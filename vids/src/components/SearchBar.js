import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={videoInput:''};
        this.handleChange = this.handleChange.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
    }


    handleChange(event){
        this.setState({videoInput:event.target.value})
    }
    searchSubmit(event){
        event.preventDefault();
        console.log(this.props)
        this.props.formSearch(this.state.videoInput)
    }
    render(){
        return(
            <div className="ui segment">
            <form className="ui form" onSubmit={this.searchSubmit}>
            <div className="field">
                <label htmlFor="search">Video Search</label>
                <input type='text'
                id='search'
                value={this.state.videoInput}
                onChange={this.handleChange}
                
                />
                </div>
            </form>
            </div>
        )
    }
}

export default SearchBar;