import React, {Component} from "react";

class InputText extends Component {

  render(){
    
    return (
      <input type="text" placeholder={this.props.placeholder} />  
    );

  }
}

export default InputText;
