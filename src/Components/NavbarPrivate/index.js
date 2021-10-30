import React from "react";
import ButtonLink from "../ButtonLink";
import ButtonButton from "../ButtonButton";
import { useHistory } from 'react-router-dom';

const NavbarPrivate = () => {
  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem(`token`);
    history.push('/');
  };

  return (
    <>
    <ButtonLink text="Categories" endpoint="/category"/>
    <ButtonLink text="Transactions" endpoint="/transaction"/>
    <ButtonLink text="DashBoard" endpoint="/dashboard"/>
    {/* <ButtonLink text="Settings" endpoint="/settings"/> */}
    <ButtonButton text="Logout" action={logOut} />
    </>
  )
};

export default NavbarPrivate;