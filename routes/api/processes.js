const express = require('express')
const router = express.Router()
const {google} = require('googleapis')
const API_KEY = require('../../keys').youtubeAPIKEY

//data model 
const Data = require("../../Models/Data")

// @route Post /api/data
// @desc add items to database
// @access public
router.post('/',(req,res)=>{
    const vid_link=req.body.link
    
    //getting video id from the video link
    vid_id= vid_link.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    vid_id=(vid_id[2] !== undefined) ? vid_id[2].split(/[^0-9a-z_\-]/i)[0] : vid_id[0];
    
    //Using google api to get the video details using the video id and uploading it to mongoDB
    google.youtube('v3').videos.list({
        key:API_KEY,
        part:'snippet,contentDetails,statistics,status',
        id:vid_id
        })
        .then(response =>{
            const {data} = response;
            image_url = data.items[0].snippet.thumbnails.high.url
            vid_name = data.items[0].snippet.title
            vid_desc = data.items[0].snippet.description
            channel_id= data.items[0].snippet.channelId
            channeltitle= data.items[0].snippet.channelTitle
            likes=data.items[0].statistics.likeCount
            dislikes=data.items[0].statistics.dislikeCount
            views=data.items[0].statistics.viewCount
            comments=data.items[0].statistics.commentCount
            const newData = new Data({
                link : vid_link,
                video_id:vid_id,
                video_name:vid_name,
                img_url: image_url,
                desc: vid_desc,
                channelId:channel_id,
                likeCount:likes,
                viewCount:views,
                dislikeCount:dislikes,
                commentCount:comments,
                channelTitle:channeltitle
            })
            newData.save().then(datas => res.json(datas))    
        })
        .catch(err => console.log(err))
    
})

// @route GET /api/items
// @desc GET all items
// @access public
router.get('/',(req,res)=>{
    Data.find()
        .sort({date : -1})
        .then(datas => res.json(datas))
})

// @route Delete /api/items
// @desc delete an items
// @access public
router.delete("/:id",(req,res)=>{
    Data.findByIdAndDelete(req.params.id).then(() => res.json({success:true})).catch(err => res.status(404).json({success:false}))
})


module.exports= router