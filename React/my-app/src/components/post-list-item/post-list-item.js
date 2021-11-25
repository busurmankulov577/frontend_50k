import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            important: false,
            like: false
        }

        this.addImportant = this.addImportant.bind(this);
        this.addLike = this.addLike.bind(this);
    }



    addImportant (){    
        this.setState(({important}) => ({
            important: !important
        }))

    }
    addLike (){    
        this.setState(({like}) => ({
            like: !like
        }))

    }
    render() {


        const {label , onDelete} = this.props;
        const {important, like} = this.state;

        let className = " app-list-item d-flex justify-content-between"
        if (important){
            className += " important"
        }
        if (like){
            className += " like"
        }
        return(
            <div className="container">
                <li className={className}>
                    <span className="app-list-item-label " onClick={this.addLike}>{label}{important}</span>
                    <div className="d-flex justify-content-evenly align-items">
                        <button className="btn-star btn-sm mx-3" onClick={this.addImportant}>
                            <i class="fas fa-star"></i>
                        </button>
                        <button className="btn-trash btn-sm mx-3"  onClick={onDelete}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                        <i className="fa fa-heart"></i>
                    </div>
                </li>
            </div>
    
        )
    }
}



