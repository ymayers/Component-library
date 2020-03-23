import React from "react";
import "./Label.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Label = props => (
   <>
    <div>
    <select className={props.type}>
      <option>Label</option>
    </select> 
  </div>
</>
);
export default Label;


  