// importing react library
import React, { Component } from 'react';

// importing styles
import '../styles/index.css';

// importing components
import TodoInput from '../components/TodoInput';
import Checkbox from '../components/Checkbox';

// importing uniqid
import uniqid from 'uniqid/index.js';

//let listItems;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todolist: [],
      inputValue: ""
    };

    this.getValue = this.getValue.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.getStatus = this.getStatus.bind(this);

  } // constructor

  componentDidMount() {
    this.getList();
  } // componentDidMount

  getList() {

    if(!localStorage.getItem("todolist")) {
      localStorage.setItem("todolist", JSON.stringify(this.state.todolist) );
    }
    else {
      this.setState({
        todolist: JSON.parse(localStorage.getItem("todolist"))
      });
    }

  } // getList


  // update state with changed input value

  getValue(e) {

    this.setState({
      inputValue: e.target.value
    })

  } // getValue

  // todolist localstorage modifications

  addItem() {
    //console.log(this.state.inputValue);

    let todoItem = {
      key: uniqid('todo-'),
      id: uniqid(),
      label: this.state.inputValue,
      completed: false
    }

    let updatedList = this.state.todolist;
    updatedList.push(todoItem);

    this.setState({
      todolist: updatedList,
      inputValue: ""
    },
    function(){
      localStorage.setItem("todolist", JSON.stringify(this.state.todolist) );
    });

  } 

  removeItem(id) {
    
    let updatedList = this.state.todolist.filter(function(item, index){
      return item.id !== id;
    });

    console.log('updatedList : ' + JSON.stringify(updatedList));

    this.setState({
      todolist: updatedList
    },
    function(){
      localStorage.setItem("todolist", JSON.stringify(this.state.todolist) );
    });
    
  }

  getStatus(e, id) {

    let updatedList = this.state.todolist.map( (item) => {
      if(item.id === id) {
        if(e.target.checked){
          item.completed = true;
        }
        else{
          item.completed = false;
        }
      }

      return item;
    });

    console.log('updatedList : ' + JSON.stringify(updatedList));

    this.setState({
      todolist: updatedList
    },
    function(){
      localStorage.setItem("todolist", JSON.stringify(this.state.todolist) );
    });
  }

  toggleItem() {
    console.log('toggleItem');
  }

  render() {

    const listItems = this.state.todolist.map( (item) => 
      <Checkbox key={item.key} id={item.id} label={item.label} checked={item.completed} removeItem={this.removeItem} getStatus={this.getStatus} />

    );

    return (
      <div className="app">

        <div className="header">
          <h2>To Do List</h2>
        </div>

        <div className="row todo-wrapper">
          <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            
            <TodoInput inputValue={this.state.inputValue} placeholder="To do Task" btnLabel="Add" getValueHandler={this.getValue} addItemHandler={this.addItem} />

            <div className="row todo-list">
              <ul className="col-xs-12">
                {listItems}
              </ul>
            </div>
         
          </div>
        </div>

      </div>
    );
  } // render

}

export default App;
