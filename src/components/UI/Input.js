import classes from "./Input.module.css";

export default function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* nice trick with spreed operator to pass all props from props.input as props into the input*/}
    </div>
  );
}
