import React, {Component} from 'react';

class Checkbox extends Component {

  constructor(props) {
    super(props);
    //this.state = {};

    // This binding is necessary to make `this` work in the callback
    this.removeItemHandler = this.removeItemHandler.bind(this);
    this.getStatusHandler = this.getStatusHandler.bind(this);
  }

  removeItemHandler(e) {
    e.preventDefault();
    this.props.removeItem(this.props.id);
  }

  getStatusHandler(event) {
    this.props.getStatus( event, this.props.id);
  }

  render() {

    return (
      <li className={"checkbox-item" + (this.props.checked ? " checked" : "") }>
        <input checked={this.props.checked} type="checkbox" id={this.props.id} onChange={this.getStatusHandler} />
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <span className="delete-item" onClick={this.removeItemHandler}>X</span>
      </li>
      );
  }


}

export default Checkbox;