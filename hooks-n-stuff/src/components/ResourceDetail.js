import React, {Component} from 'react';
import axios from 'axios';

class ResourceDetail extends Component{
   state={resources:[]}

    async componentDidMount(){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceProp}`)
        this.setState({resources:response.data})
    }

    // async componentDidUpdate(prevProps){
    //     if(prevProps.resourceProp !== this.props.resourceProp){
    //         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceProp}`)
    //         this.setState({resources:response.data});
           
    //     }
    // }
    render(){
       
        return(
        <div>{this.state.resources.length}</div>
        )
    }
}
export default ResourceDetail;