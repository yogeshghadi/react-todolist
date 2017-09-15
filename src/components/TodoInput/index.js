import React, {Component} from 'react';

class TodoInput extends Component {

  render() {
    return(
      <div className="row todo-input">
        <div className="col-sm-9 col-xs-8">
          <input type="text" placeholder={this.props.placeholder} onChange={this.props.getValueHandler}/>  
        </div>
        <div className="col-sm-3 col-xs-4">
          <button type="button" className="btn btn-primary" onClick={this.props.addItemHandler}>{this.props.btnLabel}</button>
        </div>
      </div>
    );
  }
}

export default TodoInput;