import React,{Component} from 'react';


class Buttons extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="extra content">
            <div className="ui two buttons">

            </div>
            <div className="ui basic green button">Accept</div>
            <div className="ui basic red button">Decline</div>
        </div>
        )
    }
}

export default Buttons;