import React, { Component } from 'react';
import './add-post.css'




export default class PostAddForm extends Component {


    constructor(props){
        super(props);
        this.state= {
            text: ''
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChangeValue(e){
        this.setState({
            text: e.target.value
        })

    }
    onSubmit(e){
        e.preventDefault()
        this.props.addItem(this.state.text)

        this.setState({
            text: ''
        })

    }



    render(){
        return(
            <div className="container">
                <form 
                onSubmit={this.onSubmit}
                className="bottom-panel d-flex mt-5 "
                >
     
                    <input 
                    type="text"
                    placeholder="Введите мысль"
                    className="form-control new-post-label"
                    onChange={this.onChangeValue}
                    value={this.state.text}
                    />
     
                    <button 
                    type="submit" 
                    className="btn btn-outline-secondary"
                    >
                    
                    Добавить
                    </button>
    
                
                
                </form>
            </div>
        )
    }





    
}

