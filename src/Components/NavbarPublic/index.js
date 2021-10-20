import React, { Component } from "react";
import ButtonLink from '../ButtonLink';

class NavbarPublic extends Component {

render() {
    return (
        <>
        <ButtonLink text="SignUp" endpoint="/signup" />
        <ButtonLink text="LogIn"  endpoint="/login" />
        <ButtonLink text="LogOut"/>
        </>
    )
}

};

export default NavbarPublic;