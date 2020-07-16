import styles from "../styles/modules/accordion.module.scss";
import { useState } from "react";

export default ({ title, content }) => {
  const extend = (e) => {
    const panel = e.target.parentNode.nextSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div className={styles.accordion}>
      <div onClick={extend}>
        <h4>{title}</h4>
      </div>
      <div className={styles.panel}>
        <br />
        <p>{content}</p>
        <br />
      </div>
    </div>
  );
};
