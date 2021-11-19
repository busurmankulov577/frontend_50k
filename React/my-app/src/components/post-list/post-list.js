import React from 'react';
import PostListItem from '../post-list-item';

const PostList = ({posts}) => {
    const elem = posts.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key={id}>
                
                <PostListItem {...itemProps}/>
            </li>


        );
    });


    return(
        <ul className="app-list list-group">
            {elem}
        </ul>

    )
}

export default PostList;