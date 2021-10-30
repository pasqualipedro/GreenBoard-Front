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
      <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <ButtonLink text="Categories" endpoint="/category" />
            </li>
            <li class="nav-item">
              <ButtonLink text="Transactions" endpoint="/transaction" />
            </li>
            <li class="nav-item">
              <ButtonLink text="DashBoard" endpoint="/dashboard" />
            </li>
            {/* <li class="nav-item">
              <ButtonLink text="Settings" endpoint="/settings" />
            </li> */}
          </ul>
          <ButtonButton text="Logout" action={logOut} />
        </div>
      </nav>
    </>
  )
};

export default NavbarPrivate;