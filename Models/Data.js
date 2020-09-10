const mongoose = require("mongoose")
const schema = mongoose.Schema

//Schema for database

const dataSchema = new schema(
    {
        link : {
            type : String,
            required : true
        },
        video_id:{
            type : String
        },
        img_url:{
            type : String
        },
        video_name:{
            type : String
        },
        desc:{
            type : String
        },
        date:{
            type : Date,
            default : Date.now
        },
        likeCount:{
            type: Number
        },
        dislikeCount:{
            type: Number
        },
        viewCount:{
            type: Number
        },
        commentCount:{
            type: Number
        },
        channelTitle:{
            type: String
        },
        channelId:{
            type: String
        }

    }
);

module.exports = Data = mongoose.model("data",dataSchema)