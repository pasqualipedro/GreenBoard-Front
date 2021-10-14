import React from 'react';
import ButtonLink from '../Components/ButtonLink';




const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <ButtonLink text="SignUp" endpoint="/signup" />
            <ButtonLink text="LogIn" endpoint="/login" />
        </>
    )
}

export default Home
