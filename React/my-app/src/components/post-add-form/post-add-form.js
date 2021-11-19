import React from 'react';
import './add-post.css'
const PostAddForm = () => {
    return(
        <div className="container">
            <form className="bottom-panel d-flex mt-5 ">
 
                <input 
                type="text"
                placeholder="Введите мысль"
                className="form-control new-post-label"
                />
 
                <button 
                type="submit" 
                className="btn btn-outline-secondary">
                Добавить
                </button>

            
            
            </form>
        </div>
    )
}

export default PostAddForm;