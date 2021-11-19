import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
// import PostStatusFilter from '../post-status';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

const App = () => {

    const data = [
        {label: "Статья номер 1", important: true, id: "asddddda"},
        {label: "Статья номер 2", important: false,id: "asasda"},
        {label: "Статья номер 3", important: false,id: "asdasda"},
        {label: "Статья номер 4", important: false,id: "asdsa"},
        {label: "Статья номер 3", important: false,id: "asdaaaaa"},
        {label: "Статья номер 12", important: true,id: "asdaaasdasdaa"}
    ]
    return (
        <div>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel />
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;
// <PostStatusFilter />