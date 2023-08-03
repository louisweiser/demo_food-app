import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  return (
    <form className={classes.form}>
      <button>+ Add</button>
    </form>
  );
}
