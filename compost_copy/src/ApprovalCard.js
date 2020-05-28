import React,{Component} from 'react';
import Buttons from './Buttons';


class ApprovalCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="ui card">
                <div className="content">{this.props.children}</div>
               <Buttons>
                   
               </Buttons>
            </div>
        )
    }
}

export default ApprovalCard;