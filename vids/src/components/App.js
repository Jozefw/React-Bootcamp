import React,{Component} from 'react';
import SearchBar from './SearchBar'

class App extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    formApiCall(searchValue){
        console.log(searchValue);
    }
    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar formSearch={this.formApiCall}></SearchBar>
            </div>
        )
    }
}

export default App;