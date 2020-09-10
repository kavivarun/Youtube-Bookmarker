import React, {Component} from 'react';
import { Container,Button, CardGroup } from 'reactstrap';
import {connect} from 'react-redux';
import { getData, deleteData} from '../actions/dataActions'
import PropTypes from 'prop-types'
import { CardColumns, Card , CardImg} from 'react-bootstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash, faThumbsUp, faThumbsDown, faComment,faUser, faInfo } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'
import {Tooltip} from '@material-ui/core'   

class VideoTileList extends Component{
    componentDidMount() {
        this.props.getData();
    }
    onClickDelete = id => {
        this.props.deleteData(id);
    }
    onClickDesc = desc =>{
        this.setState()
    }
   
    render(){
        const {datas} = this.props.data;
        return(
            <Container>
                <CardColumns>
                    {datas.map(({_id,video_name,link,img_url,desc,likeCount,dislikeCount,channelId,channelTitle,commentCount}) =>(
                        <Card border="light" style={{width:"22rem",justifyContent:'left', backgroundColor:"#404040", marginRight:'10rem'}}>
                            <span data-tip="Click to goto video">
                                <Button  style={{marginLeft:'.35rem',backgroundColor:"#404040",border:'.1rem'}} href={link} target="_blank">
                                    <CardImg variant="top" src={img_url} style={{width:"19.5rem",height:"12rem",marginTop:'.2rem'}}></CardImg>
                                </Button>
                            </span>
                            <span data-tip="Click to goto video" style={{marginBottom:'0rem'}}> 
                                <Button  style={{marginLeft:'.35rem',backgroundColor:"#404040",border:'.1rem',marginBottom:"0rem"}} href={link} target="_blank">
                                    <Card.Title style={{marginLeft:'.8rem', color:"white",marginBottom:"0rem"}}>{video_name}</Card.Title>
                                </Button>
                            </span>
                            <CardGroup style={{display:'flex'}}>
                                <span data-tip="Click to goto Channel" style={{marginBottom:'0rem'}}> 
                                    <Button style={{marginLeft:'0.5rem',backgroundColor:"#404040",border:'0rem',marginBottom:"0rem",color:'white'}} href={`https://www.youtube.com/channel/${channelId}`} target="_blank">
                                        <FontAwesomeIcon icon={faUser}/><span style={{marginRight:".5rem"}}/>{channelTitle}
                                    </Button>
                                </span>
                                <Tooltip title={desc} placement="top" arrow>
                                    <Button style={{marginLeft:'auto',backgroundColor:"#000000",border:'0rem',marginRight:".5rem",color:'white',justifyContent:"right"}}>
                                        <FontAwesomeIcon className="fa-lg" icon={faInfo}/>
                                    </Button>
                                </Tooltip>
                            </CardGroup>
                            <ReactTooltip/>
                            <Card.Body style={{color:'white',marginTop:"0rem", display:'flex'}}>
                                <Button color="danger" style={{marginLeft:'.5rem', marginBottom:'.5rem',marginTop:'0rem'}} onClick={this.onClickDelete.bind(this,_id)}>
                                <FontAwesomeIcon icon={faTrash} color="Black"/> delete 
                                </Button>
                                <span style={{marginLeft:"auto"}}>
                                <FontAwesomeIcon icon={faThumbsUp}/> {likeCount} <span style={{marginRight:".1rem"}}/>
                                <FontAwesomeIcon icon={faThumbsDown}/> {dislikeCount} <span style={{marginRight:".1rem"}}/>
                                <FontAwesomeIcon icon={faComment}/> {commentCount}<span style={{marginRight:".1rem"}}/>
                                </span>
                            </Card.Body>  
                        </Card>
                    ))}
                </CardColumns>
            </Container>
        )
    }

}

VideoTileList.propTypes = {
    getData : PropTypes.func.isRequired,
    data : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    data : state.data
})

export default connect(mapStateToProps,{getData, deleteData})(VideoTileList);