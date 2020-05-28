import React,{Component} from 'react';


class CommentDetail extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className="comment">
            <a href="" className="avatar">
                <img src={this.props.imgSrc} alt="avatar"/>
                </a>
            <div className="content">
                <a href="" className="author">{this.props.author}</a>
                <div className="metadata">
                    <span className="date">{this.props.time}</span>
                </div>
                    <div className="text">{this.props.bolgContent}</div>
            </div>
        </div>
        )
    }
}

export default CommentDetail