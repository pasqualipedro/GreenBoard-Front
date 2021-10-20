import React, { Component } from "react";
import ButtonLink from "../ButtonLink";


class NavbarPrivate extends Component {

render() {
    return (
        <>
        <ButtonLink text = "Categories" endpoint = "/category"/>
        <ButtonLink text = "Transactions" endpoint = "/transactions"/>
        <ButtonLink text = "DashBoard" endpoint = "/dashboard"/>
        <ButtonLink text = "Settings" endpoint = "/settings"/>
        </>
    )
}

};

export default NavbarPrivate;