import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonWrapper from './SeasonWrapper';
import Spinner from './Spinner';

class App extends Component{
    constructor(props){
        super(props);
        this.state={long:null, Lat:null,errMess:''}
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (data)=>{this.setState({
                long:data.coords.longitude,
                lat:data.coords.latitude
            })},
            (error)=>{this.setState({errMess:error.message})}
        );
    }

    contentLogic(){
        if(this.state.errMess && !this.state.lat){
            return <div>Error:{this.state.errMess}</div>
        }
        if(!this.state.errMess && this.state.lat){
            return <SeasonWrapper latitude={this.state.lat}></SeasonWrapper>
    
        }
        return <Spinner message="Please wait..."></Spinner>
    }
    render(){
           return(
               <div className='border-red'>
                   {this.contentLogic()}
               </div>  
           )
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('#root')
);


