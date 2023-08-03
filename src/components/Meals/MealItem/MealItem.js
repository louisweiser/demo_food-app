import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`; // toFixed(2) reserviert 2 platzhalter stellen um den preis optisch gut darzustellen

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
}
