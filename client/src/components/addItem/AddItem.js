import React, { useState } from "react";
import axios from "axios";

import styles from "./addItem.module.css";

export default function AddItem() {
   const [name, setName] = useState("");
   const [brand, setBrand] = useState("");
   const [quantity, setQuantity] = useState("");

   const clearStates = () => {
      setName("");
      setBrand("");
      setQuantity("");
   };

   const add = async (event) => {
      event.preventDefault();

      let item = { name, brand, quantity };

      try {
         await axios.post("/box", item).then((res) => {
            console.log(JSON.stringify(res.data));
         });
      } catch (error) {
         console.log(error);
         alert("등록 된 박스");
      }
      clearStates();
   };

   return (
      <div className={styles.container}>
         <div className={styles.addItemWrap}>
            <form className={styles.addItemForm} onSubmit={add}>
               <input
                  value={name}
                  id="itemName"
                  className={styles.inp}
                  type="text"
                  name="name"
                  placeholder="Item name ..."
                  onChange={(event) => setName(event.target.value)}
               />
               <input
                  value={brand}
                  id="itemBrand"
                  className={styles.inp}
                  type="text"
                  name="name"
                  placeholder="Item brand ..."
                  onChange={(event) => setBrand(event.target.value)}
               />
               <input
                  value={quantity}
                  id="itemQuantity"
                  className={styles.inp}
                  type="text"
                  name="name"
                  placeholder="Item quantity ..."
                  onChange={(event) => setQuantity(event.target.value)}
               />
               <input className={styles.inp} type="file" name="file" />
               <button type="submit" className={styles.btn}>
                  Save
               </button>
            </form>
         </div>
      </div>
   );
}
