import React from 'react';
import ButtonLink from '../Components/ButtonLink';




const Home = () => {
    return (
        <>
            <ButtonLink text="SignUp" endpoint="/signup" />
            <ButtonLink text="LogIn" endpoint="/login" />
        </>
    )
}

export default Home
