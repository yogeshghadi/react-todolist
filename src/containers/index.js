// importing react library
import React, { Component } from 'react';

// importing images
import logo from '../images/logo.svg';

// importing styles
import '../styles/index.css';

// importing components
import Button from '../components/Button';
import InputText from '../components/InputText';
import Checkbox from '../components/Checkbox';

class App extends Component {
  render() {
    return (
      <div className="app">

        <div className="header">
          <h2>To Do List</h2>
        </div>

        <div className="row todo-wrapper">
          <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <div className="row todo-input">
              <div className="col-sm-9 col-xs-8">
                <InputText value="" placeholder="Todo Task" />  
              </div>
              <div className="col-sm-3 col-xs-4">
                <Button label="Add" />
              </div>
            </div>
         
            <div className="row todo-list">
              <ul className="col-xs-12">
                <Checkbox id="abc" label="xyz" />
                <Checkbox id="abc" label="xyz" />
                <Checkbox id="abc" label="xyz" />
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
