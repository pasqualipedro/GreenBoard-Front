import React, { Component } from "react";
import ButtonButton from "../ButtonButton";


class NavbarPrivate extends Component {

  logOut = () => {
    localStorage.removeItem(`token`);
    history.push('/');
  };

  render() {
      return (
          <>
          <ButtonButton text="Categories" endpoint="/category"/>
          <ButtonButton text="Transactions" endpoint="/transaction"/>
          <ButtonButton text="DashBoard" endpoint="/dashboard"/>
          <ButtonButton text="Settings" endpoint="/settings"/>
          <ButtonButton action={this.logOut} />
          </>
      )
  }

};

export default NavbarPrivate;