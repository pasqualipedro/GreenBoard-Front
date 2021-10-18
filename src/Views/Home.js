import React from 'react';
import ButtonLink from '../Components/ButtonLink';
import NavbarPublic from '../Components/NavbarPublic';



const Home = () => {
    return (
        <>
            <NavbarPublic/>
            <h1>Home Page</h1>
            <ButtonLink text="SignUp" endpoint="/signup" />
            <ButtonLink text="LogIn" endpoint="/login" />
        </>
    )
}

export default Home
