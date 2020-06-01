import React,{Component} from 'react';
import SearchBar from './SearchBar';
import YoutubeApi from '../Api/YoutubeApi';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';



class App extends Component{
    constructor(props){
        super(props);
        this.state={
            searchResponse:[],
            inputValue:'',
            selectedVideo:null};
        this.formApiCall = this.formApiCall.bind(this);
        this.VideoSelect = this.VideoSelect.bind(this);
    
    }

    componentDidMount(){
        this.formApiCall('flowers')
    }
    
    async formApiCall(searchValue){
       const response = await YoutubeApi.get('/search',{
            params: {
                q:searchValue
            }
        });
        
         this.setState({
             searchResponse:response.data.items,inputValue:searchValue,
             selectedVideo:response.data.items[0]
            });
    };

    VideoSelect(video){
        this.setState({selectedVideo:video});
        console.log(this.state);
    }

    render(){
       
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar 
                    formSearch={this.formApiCall}>
                </SearchBar>
                There {this.state.searchResponse.length === 1 ? "is": "are"} {this.state.searchResponse.length} videos on the topic of {this.state.inputValue}
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}>
                            </VideoDetail>
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                videosList={this.state.searchResponse} onVideoSelection={this.VideoSelect}>
                            </VideoList>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default App;