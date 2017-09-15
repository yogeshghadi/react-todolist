import React, {Component} from 'react';

class Button extends Component {
  //this.state = { btnName: }
	render() {
		return (
        <button type="button" className="btn btn-primary">{this.props.label}</button>
	 );
  }
}

export default Button;
