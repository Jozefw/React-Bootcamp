import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchItem:''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onInputChange(event){
        this.setState({searchItem:event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault();
        
        this.props.formSubmit(this.state.searchItem)

    }
    render(){
        return(
           <div className="ui segment">
               <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input 
                    type='text' 
                    placeholder="Search"
                    onChange={this.onInputChange}
                    value={this.state.searchItem}
                    />
                </div>
               </form>
           </div>
        )
    }
}

export default SearchBar;