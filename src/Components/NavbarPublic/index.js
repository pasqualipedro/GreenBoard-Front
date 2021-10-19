import React, { Component } from "react";
import ButtonLink from '../ButtonLink';

class NavbarPublic extends Component {

render() {
    return (
        <>
        <h1>Thats the NavbarPublic - start</h1>
        <ButtonLink text="SignUp" endpoint="/signup" />
        <ButtonLink text="LogIn" endpoint="/login" />
        <h1>Thats the NavbarPublic - end</h1>
        </>
    )
}

};

export default NavbarPublic;