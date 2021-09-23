import React from "react";
import { Link } from "react-router-dom";

import styles from "./listItem.module.css";

export default function ListItem(props) {
   const item = props.item;

   return (
      <Link to={"/item/" + item.id} key={item}>
         <div className={styles.listItemWrap}>
            <div className={styles.itemImg}>
               <img src="" alt="" />
            </div>
            <div className={styles.itemNameWrap}>
               <h3 className={styles.itemName}>{item.name}</h3>
               <p className={styles.itemBrand}>{item.brand}</p>
            </div>
            <div className={styles.itemQuantity}>{item.quantity}</div>
         </div>
      </Link>
   );
}
