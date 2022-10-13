import React from 'react';
import Products from "../Products/Product";
import {Route, Switch } from "react-router-dom";

const Routes = (productItems) => {
  return <div>
    <Switch>
        <Route path="/" exact>
          <products productItems={productitems}/>
          <Route />
        </Route>

        
    </Switch>
    
    </div>;
    
};
export default Routes;