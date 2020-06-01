import React from 'react';
import VideoItem from './VideoItem';

const VideoList  = ({videosList,onVideoSelection}) =>{
       const videos = videosList.map(function(singleItem){
    
       return <VideoItem 
                key={singleItem.id.videoId}
                videoDetail={singleItem} onVideoSelection={onVideoSelection}>
                </VideoItem>
        });
        return(
            <div className="ui relaxed divided list">
                {videos}
            </div>
        )
    }

export default VideoList;