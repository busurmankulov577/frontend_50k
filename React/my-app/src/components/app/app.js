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
                {label: "Статья номер 1", important: true, id:1 },
                {label: "Статья номер 2", important: false,id:2},
                {label: "Статья номер 3", important: false,id:3},

            ]
        }
        this.onDelete = this.onDelete.bind(this);
        this.addItem = this.addItem.bind(this);

        this.id = 4;
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
    addItem(text){
        
        const newItem = {
            label: text,
            important: false,
            id:this.id++
        }
        console.log(this.id)

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
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
                <PostAddForm 
                    addItem={this.addItem}
                />
            </div>
        )
    }

    
}


// <PostStatusFilter />