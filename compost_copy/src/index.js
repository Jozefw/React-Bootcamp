import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from './ApprovalCard';
import Buttons from './Buttons';
const App = ()=>{

    return(
        <div className="ui container comments">
            <br></br>
          <ApprovalCard>
            <CommentDetail 
            author='sam' 
            time="12noon" 
            imgSrc={faker.image.avatar()} bolgContent="rando stuf">    
            </CommentDetail>
          </ApprovalCard>
            <ApprovalCard>
                    <CommentDetail 
                    author='self' 
                    time="4pm" 
                    imgSrc={faker.image.avatar()} 
                    bolgContent="oh, more rando crap">
                    </CommentDetail>
                   
            </ApprovalCard>
        <ApprovalCard>
        <CommentDetail 
        author='jane' 
        time="4:20" 
        imgSrc={faker.image.avatar()} 
        bolgContent="crap crap crap crap crap">
        </CommentDetail>
       
        </ApprovalCard>
           
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));