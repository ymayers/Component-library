import React from "react";
import "./Input.css";

const Input = props => (
  <>
    <div>
      <input className={props.label} placeholder={props.placeholder}></input>
    </div>
  </>
);

export default Input;
