import React,{Component} from 'react';
import Unsplash from '../Api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {images:[]}
        this.searchFormSubmit = this.searchFormSubmit.bind(this);
    }

    async searchFormSubmit(inputValue){
        const response = await Unsplash.get('https://api.unsplash.com/search/photos',{
            params:{query:inputValue},
           
        });
        
       this.setState({images:response.data.results})
    }
    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar formSubmit={this.searchFormSubmit}></SearchBar>
                <ImageList searchList={this.state.images}></ImageList>
            </div>
        )

    }
}

export default App;