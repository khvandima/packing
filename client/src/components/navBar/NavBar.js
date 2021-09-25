import React from "react";
import { Link } from "react-router-dom";

import styles from "./navBar.module.css";

export default function NavBar() {
   return (
      <div className={styles.container}>
         <h1 className={styles.h1}>Packing</h1>
         <div className={styles.btnWrap}></div>
         <Link to={"/"}>
            <button className={styles.btn}>Home</button>
         </Link>
         <Link to={"/addItem"}>
            <button className={styles.btn}>Add</button>
         </Link>
      </div>
   );
}
