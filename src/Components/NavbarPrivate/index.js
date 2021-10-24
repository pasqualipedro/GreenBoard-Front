import React, { Component } from "react";
import ButtonLink from "../ButtonLink";


class NavbarPrivate extends Component {

render() {
    return (
        <>
        <ButtonLink text = "Categories" endpoint = "/category"/>
        <ButtonLink text = "Transactions" endpoint = "/transaction"/>
        <ButtonLink text = "DashBoard" endpoint = "/dashboard"/>
        <ButtonLink text = "Settings" endpoint = "/settings"/>
        </>
    )
}

};

export default NavbarPrivate;