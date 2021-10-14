import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import LogIn from "./Views/LogIn";
import SignUp from "./Views/SignUp";
import Dashboard from "./Views/Dashboard";
import Category from "./Views/Category";

/**Importing Components */


/**Importing Views/pages */


/**Global-Style from styled components*/
/* import { createGlobalStyle } from "styled-components"; */ /*----> ?? CONFIRMAR SE ESTA CORRETO*/


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" render = {(props) => <LogIn {...props} /> } />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/category" component={Category} />
        {/* <Route path="/newcategory" component={NewCategory} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/infoupdate" component={InfoUpdate} /> */}
      </Switch>
    </>
  );
}

export default App;
