import React, {Component} from 'react';

class Checkbox extends Component {

  render(){
    return (
      <li className="checkbox-item">
        <input type="checkbox" id={this.props.id}/>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <a href="javascript:void(0;)" className="delete-item">X</a>
      </li>
      );
  }
}

export default Checkbox;