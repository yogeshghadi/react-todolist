import React from "react";

import {Link} from "react-router-dom";


const Footer = (props) => (
  <div className="row todo-footer">
    {/*<div className="active-number col-xs-2">
          <span>{props.activeNumber}</span>
        </div>*/}
    <div className="filters col-xs-8">
      <Link to="/#" className={ (props.nowShowing === "all") ? "selected" : ""} >All</Link>
      <Link to="/#active" className={ (props.nowShowing === "ac") ? "selected" : ""} >Active</Link>
      <Link to="/#completed" className={ (props.nowShowing === "completed") ? "selected" : ""} >Completed</Link>
    </div>

    <div className="clear-link col-xs-4">
      <span>Clear Completed</span>
    </div>
  </div>
); 

export default Footer;