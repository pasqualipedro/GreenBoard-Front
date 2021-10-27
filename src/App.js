import React from "react";
import { Route, Switch } from "react-router-dom";

/**Importing Views/pages */
import Home from "./Views/Home";
import LogIn from "./Views/LogIn";
import SignUp from "./Views/SignUp";
import Dashboard from "./Views/Dashboard";
import Category from "./Views/Category";
import Settings from "./Views/Settings";
import Transaction from "./Views/Transaction";

function App() {
  return (
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" render = {(props) => <LogIn {...props} /> }/>
        <Route path="/signup" render = {(props) => <SignUp {...props} />}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/category" component={Category} />
        <Route path="/settings" component={Settings} />
        <Route path="/transaction" component={Transaction} />
      </Switch>
    
  );
}

export default App;
