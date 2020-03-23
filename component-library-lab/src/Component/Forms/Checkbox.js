import React from "react";

const Checkbox = props => (
  <>
    <label className={props.boxColor}>
      <input className={props.type} type="checkbox" />{props.label}
      <span className={props.checkStyle}></span>
    </label>
  </>
);
export default Checkbox;
