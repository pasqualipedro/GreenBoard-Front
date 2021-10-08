import React from "react";
import { Route, Switch } from "react-router-dom";


/**Importing Components */


/**Importing Views/pages */


/**Global-Style from styled components*/
import { createGlobalStyle } from "styled-components"; /*----> ?? CONFIRMAR SE ESTA CORRETO*/


function App() {
  return (
    <>
    <Switch>
      <Route path="/home" component={SignUpLogIn}/>
      <Route path="/login" component={LogIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/newcategory" component={NewCategory}/>
      <Route path="/dashboard" component={DashBoard}/>
      <Route path="/infoupdate" component={InfoUpdate}/>
    </Switch>
    </>
  );
}

export default App;
