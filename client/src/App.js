import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import Search from "./components/search/Search";
import ItemDetail from "./components/itemDetail/ItemDetail";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Switch>
               <Route exact path="/" component={Search} />
               <Route path={"/item/:id"} component={ItemDetail} />
               <Redirect to="/" />
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
