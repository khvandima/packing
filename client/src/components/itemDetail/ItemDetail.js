import React from "react";
import { Link } from "react-router-dom";

import styles from "./itemDetail.module.css";

export default function ItemDetail(props) {
   const arrayItems = [
      {
         id: "0001",
         name: "쟁반막국수",
         brand: "면사랑",
         quantity: 0,
         place: ["현장", "자제팀"],
      },
      {
         id: "0002",
         name: "쫄면",
         brand: "족발야시장",
         quantity: 10,
         place: ["현장", "자제팀"],
      },
      {
         id: "0003",
         name: "냉면",
         brand: "면사랑",
         quantity: 0,
         place: ["현장", "자제팀"],
      },
      {
         id: "0004",
         name: "평양냉면",
         brand: "면사랑",
         quantity: 5,
         place: ["현장", "자제팀"],
      },
      {
         id: "0005",
         name: "함흥냉면",
         brand: "면사랑",
         quantity: 40,
         place: ["현장", "자제팀"],
      },
   ];

   //*Получаем id из props для поиска нужного item
   let id = props.match.params.id;

   let item = arrayItems.filter((item) => {
      return item.id.includes(id);
   })[0];

   console.log(item);

   return (
      <div className={styles.container}>
         <div className={styles.itemCard}>
            <img src="" alt="" className={styles.itemCard_img} />
            <div className={styles.itemCard_list}>
               <h2 className={styles.itemCard_list__name}>{item.name}</h2>
               <p className={styles.itemCard_list__brand}>{item.brand}</p>
               <div className={styles.itemCard_list__quantity}>
                  <label htmlFor="itemQuantity">Quantity:</label>
                  <input
                     className={styles.itemCard_input}
                     value={item.quantity}
                     type="text"
                     id="itemQuantity"
                     readonly
                  />
               </div>
               <div className={styles.itemCard_btn}>
                  <button className={styles.edit_btn}>Edit</button>
                  <button className={styles.save_btn}>Save</button>
               </div>
            </div>
         </div>
         <div className={styles.item_info}>
            <Link to={"/"}>
               <button className={styles.edit_btn}>Back</button>
            </Link>
         </div>
      </div>
   );
}
