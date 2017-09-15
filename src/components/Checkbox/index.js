import React, {Component} from 'react';

class Checkbox extends Component {

  constructor(props) {
    super(props);
    //this.state = {};

    // This binding is necessary to make `this` work in the callback
    this.removeItemHandler = this.removeItemHandler.bind(this);
  }

  removeItemHandler(){
    this.props.removeItem(this.props.id);
  }

  render() {
    return (
      <li className="checkbox-item">
        <input type="checkbox" id={this.props.id}/>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <a href="javascript:void(0);" className="delete-item" onClick={this.removeItemHandler}>X</a>
      </li>
      );
  }


}

export default Checkbox;