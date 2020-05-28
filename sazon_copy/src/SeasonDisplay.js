import React,{Component} from 'react';



class SeasonDisplay extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const getSeason = (lat,month)=>{
            if(month > 2  &&  month < 9){
                return lat > 0 ? "Winter":"Summer"
            } else {
                return lat > 0 ? "Summer":"Winter"
            }
        }
        const SeasonWrapper = (props)=>{
            const season =  getSeason(props.lat,new Date().getMonth());
            console.log(season);
             return <div>rando</div>
             }

        return(
           <div>{this.props.lats}</div>
        )
    }
}

export default SeasonDisplay