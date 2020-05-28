import '../imageList.css';
import React,{Component} from 'react';
import ImageCard from "./ImageCard"

class ImageList extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        const results = this.props.searchList.map(function(listItem){
            return <ImageCard 
                key={listItem.id} 
                srcProp={listItem.urls.regular} 
                altProp={listItem.description}></ImageCard> 
        })
       
        return(
        <div className="image-list">
            {results}
        </div>
        )
    }
}

export default ImageList;