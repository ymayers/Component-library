import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => (
  <button className={props.type}icon={props.icon}>
    {props.label}
  </button>
);
export default Button;
