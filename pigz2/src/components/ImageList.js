import '../imageList.css';
import React,{Component} from 'react';

class ImageList extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        const results = this.props.searchList.map(function(listItem){
            return (<img key={listItem.id} src={listItem.urls.regular} alt={listItem.description}/>)
        })
       
        return(
        <div className="image-list">
            {results}
        </div>
        )
    }
}

export default ImageList;