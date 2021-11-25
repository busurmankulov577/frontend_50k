import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
// import PostStatusFilter from '../post-status';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';


export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [
                {label: "Статья номер 1", important: true, id: "asddddda"},
                {label: "Статья номер 2", important: false,id: "asasda"},
                {label: "Статья номер 3", important: false,id: "asdasda"},
                {label: "Статья номер 4", important: false,id: "asdsa"},
                {label: "Статья номер 3", important: false,id: "asdaaaaa"},
                {label: "Статья номер 12", important: true,id: "asdaaasdasdaa"}
            ]
        }
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0 ,index);
            const after = data.slice(index + 1);
            const newData = [...before, ...after];
            return {
                data: newData
            }
        })

    }
    render () {
        return (
            <div>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel />
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.onDelete}
                />
                <PostAddForm/>
            </div>
        )
    }

    
}


// <PostStatusFilter />