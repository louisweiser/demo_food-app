import React from "react";

import classes from "./Input.module.css";

// nice trick with spreed operator to pass all props from props.input as props into the input

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
