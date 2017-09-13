import React, {Component} from 'react';

class Button extends Component {
  //this.state = { btnName: }
	render() {
		return (
        <button type="button" className="btn btn-primary">{this.props.label}</button>
	 );
  }
}
/*
const Button = ({btnName}) => {
	return (
	<div class="btn" role="button" aria-label="...">
          <button type="button" className="btn btn-primary">{btnName}</button>
    </div>
)
}*/

export default Button;
