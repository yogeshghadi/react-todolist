import React, {Component} from "react";

class InputText extends Component {

  render(){
    
    return (
      <input type="text" placeholder={this.props.placeholder} onChange={this.props.onChangeHandler} inputValue={this.props.value}/>  
    );

  }
}

export default InputText;
