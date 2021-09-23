import React, { useState } from "react";

import ListItem from "../listItem/ListItem";
import styles from "./search.module.css";

export default function Search(props) {
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

   const [value, setValue] = useState("");

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
