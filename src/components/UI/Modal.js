import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

// zwei Komponenten sind hier zusätzlich. sie könnten auch standartmäig in seperate Dateien. Bei diesem Unfang bieten es sich jedoch an es so zu handhaben.

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

//gutes Template für ein overlay mithilfe props.children

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

//portal ist hier ein günstiger Anwendungsfall
// ReactDOM.createPortal(   was (inhalt)  ,     wird wo angefügt     )   <- wie portal funktioniert (sehr simpel)

const portalElement = document.getElementById("overlays"); // in der HTML wurde eine Anker gesetzt mit der ID=overlays

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
