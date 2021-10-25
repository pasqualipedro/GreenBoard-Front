import React from "react";
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
    <ButtonButton text="Categories" endpoint="/category"/>
    <ButtonButton text="Transactions" endpoint="/transaction"/>
    <ButtonButton text="DashBoard" endpoint="/dashboard"/>
    <ButtonButton text="Settings" endpoint="/settings"/>
    <ButtonButton action={logOut} />
    </>
  )
};

export default NavbarPrivate;