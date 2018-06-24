import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";


class TodoList extends Component {
    constructor(props){
        
        super(props);
        //sets current state to an array
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    //add item method , create item 
    addItem(e){
        if (this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            // set state to new item and this creates a new array each time
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        
        }
        this._inputElement.value = "";
        console.log(this.state.items);
        //this stops the page from reloading on form submit
        e.preventDefault();
    }
    
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item){
            return(item.key !== key);
        });
        this.setState({
            items: filteredItems
        });
        }
    

    render() {
        return (
            <div className="todoListMain">
            <div className="header">
            <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a}
                        placeholder="enter task">
                </input>
                <button type="submit">add</button>
            </form>
            </div>
            <TodoItems entries={this.state.items}
                        delete={this.deleteItem}
                        />
            </div>
        );
    }
}

export default TodoList;