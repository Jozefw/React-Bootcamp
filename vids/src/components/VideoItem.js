import React from 'react';
import './VideoItem.css';

 const videoItem = ({videoDetail,onVideoSelection}) => {
     
    return(

    <div onClick={()=>onVideoSelection(videoDetail)} className="video-item item">
        <img className="ui image" src={videoDetail.snippet.thumbnails.medium.url} alt={videoDetail.snippet.title}/> 
        <div className="content">
            <div className="header">
                {videoDetail.snippet.title}
            </div>
            <div className="description">
                {videoDetail.snippet.title}
            </div>
        </div>
    </div>
    )
}

export default videoItem;