import React from 'react';
import './SeasonWrapper.css'

const seasonConfig = {
    Summer:{
        text:"Yay, let's catch a tan",
        iconName: "sun"
    },
    Winter:{
        text:"Brr....this sux, get the hot coco",
        iconName:"snowflake"
    }
}

    const getSeason = (lat,month)=>{
        if(month > 2  &&  month < 9){
            return lat > 0 ? "Winter":"Summer"
        } else {
            return lat > 0 ? "Summer":"Winter"
        }
    }

    const SeasonWrapper = (props)=>{
       const season =  getSeason(props.lat,new Date().getMonth());
       const {text,iconName} = seasonConfig[season];
        return <div className={`season-display ${season}`}>
            <i className={`icon-right massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-left massive ${iconName} icon`}></i>
        </div>
        }







export default SeasonWrapper;
