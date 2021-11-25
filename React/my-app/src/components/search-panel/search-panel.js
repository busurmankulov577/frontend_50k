import React, {Component} from 'react';
import './search-panel'


export default class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state= {
            text: ''
        }
        this.onSearchPost = this.onSearchPost.bind(this);
    }


    onSearchPost(e){

        const value = e.target.value
        this.setState({
        
            text: value
        
        });

        this.props.onUpdateSearchPanel(value);

    }

    render(){
        return(

            <div className="container">
                    <form className="bottom-panel d-flex mb-5">
                        <input 
                            type="text"   
                            className="d-flex  form-control search-input me-1"
                            placeholder="Поиск записей"
                            onChange={this.onSearchPost}
                            
                        />
                        <div class="btn-group">
                   
                            <a href="#" class="btn btn-primary active" aria-current="page">Все</a>
                            <a href="#" class="btn btn-outline-success">Понравившиеся</a>
                        </div>
            
                    </form>
            </div>
            
    
        )
    }
}

