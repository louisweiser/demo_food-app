import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg"; // Bilder können einfach importiert werden
import classes from "./Header.module.css"; // Styles können alle zusammen importuert werden

export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
      </header>
      <div className={classes["main-image"]}>
        {" "}
        {/* classes.main-image -> point operator nicht erlaubt wegen sonderzeuichen ( - ) */}
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
}
