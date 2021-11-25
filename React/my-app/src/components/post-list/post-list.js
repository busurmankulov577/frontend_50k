import React from 'react';
import PostListItem from '../post-list-item';
import "./post-list.scss";
import style from "./post-list.module.css";

const PostList = ({posts, onDelete, onToggleLike, onToggleImportant}) => {
    const elem = posts.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={id} className={style.bg}>
                
                <PostListItem {...itemProps}
                onDelete={()=> onDelete(id)}
                onToggleImportant={()=> onToggleImportant(id)}
                onToggleLike={()=> onToggleLike(id)}
                />
                
            </li>


        );
    });


    return(
        <ul className="app-list list-group-item">
            {elem}
        </ul>

    )
}

export default PostList;