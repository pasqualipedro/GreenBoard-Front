import React, { Component } from "react";
import ButtonButton from "../ButtonButton";


class NavbarPrivate extends Component {

render() {
    return (
        <>
        <ButtonButton text="Categories" endpoint="/category"/>
        <ButtonButton text="Transactions" endpoint="/transaction"/>
        <ButtonButton text="DashBoard" endpoint="/dashboard"/>
        <ButtonButton text="Settings" endpoint="/settings"/>
        </>
    )
}

};

export default NavbarPrivate;