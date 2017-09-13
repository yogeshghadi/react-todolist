import React, {Component} from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ul className="todo-list">
        <li className="todo-item">
          <Checkbox label="checking" />
        </li>
      </ul>
    );

  }
}