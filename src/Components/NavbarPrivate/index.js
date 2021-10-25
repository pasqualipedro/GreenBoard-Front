import React, { Component } from "react";
import ButtonButton from "../ButtonButton";


class NavbarPrivate extends Component {

    const logOut = () => {
        localStorage.removeItem(`token`);
        history.push('/login');
    }

render() {
    return (
        <>
        <ButtonButton text="Categories" endpoint="/category"/>
        <ButtonButton text="Transactions" endpoint="/transaction"/>
        <ButtonButton text="DashBoard" endpoint="/dashboard"/>
        <ButtonButton text="Settings" endpoint="/settings"/>
        <ButtonButton endpoint="/"/ action={this.logOut} >
        </>
    )
}

};

export default NavbarPrivate;