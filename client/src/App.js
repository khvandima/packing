import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import "./App.css";

import { Context } from "./Context";

import Search from "./components/search/Search";
import ItemDetail from "./components/itemDetail/ItemDetail";
import AddItem from "./components/addItem/AddItem";
import NavBar from "./components/navBar/NavBar";

function App() {
   const [arrayItems, setArrayItems] = useState([]);

   useEffect(() => {
      try {
         axios.get("/box").then((res) => {
            let arrayItems = res.data;
            setArrayItems(arrayItems);
         });
      } catch (error) {
         console.log(error);
      }
   }, [arrayItems]);

   return (
      <BrowserRouter>
         <Context.Provider value={[arrayItems]}>
            <div className="App">
               <NavBar />
               <Switch>
                  <Route exact path="/" component={Search} />
                  <Route path={"/item/:id"} component={ItemDetail} />
                  <Route path={"/addItem"} component={AddItem} />
                  <Redirect to="/" />
               </Switch>
            </div>
         </Context.Provider>
      </BrowserRouter>
   );
}

export default App;
