import React, {Component} from 'react';
import './search-panel'


export default class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state= {
            text: ''
        }


        this.button = [
            {
                name: "all",label: "Все"
            },
            {
                name: "like",label: "Понравившиеся"
            }

        ]

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
        const btns = this.button.map(({name,label}) => {
            const {filter , onUpdateFilter} = this.props

            const active = filter === name;
            const activeClass = active ? 'btn-all btn-info' : 'btn-outline-secondary' 
            return (
                <button key={name} className={`btn ${activeClass}`} onClick={() => onUpdateFilter(name)}>{label}</button>
            )
        })


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
                   
                            {btns}
                        </div>
            
                    </form>
            </div>
            
    
        )
    }
}

