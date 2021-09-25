import React, { useState, useContext } from "react";

import { Context } from "../../Context";

import ListItem from "../listItem/ListItem";
import styles from "./search.module.css";

export default function Search(props) {
   const [value, setValue] = useState("");

   const [arrayItems] = useContext(Context);

   const onChangeHandle = (event) => {
      setValue(event.target.value);
   };

   // const focusOutHandler = () => {
   //    setValue("");
   // };

   //* Сортировка по поиску
   const filterItems = arrayItems.filter((item) => {
      let itemName = item.name + " " + item.brand;
      return itemName.includes(value);
   });

   //* Сортировка по наличию
   const filterItemsInStock = arrayItems.filter((item) => {
      return item.quantity > 0;
   });

   return (
      <>
         <div className={styles.searchForm}>
            <input
               className={styles.input}
               type="text"
               placeholder="Search..."
               value={value}
               onChange={onChangeHandle}
               // onBlur={focusOutHandler}
            />
         </div>
         <div className={styles.listWrap}>
            {value
               ? filterItems.map((item, index) => {
                    return <ListItem item={item} key={index} />;
                 })
               : filterItemsInStock.map((item, index) => {
                    return <ListItem item={item} key={index} />;
                 })}
         </div>
      </>
   );
}
