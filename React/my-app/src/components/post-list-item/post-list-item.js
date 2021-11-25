import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component{
    

    render() {


        const {label , onDelete , onToggleImportant, onToggleLike, important, like} = this.props;


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
                    <span className="app-list-item-label " onClick={onToggleLike}>{label}{important}</span>
                    <div className="d-flex justify-content-evenly align-items">
                        <button className="btn-star btn-sm mx-3" onClick={onToggleImportant}>
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



