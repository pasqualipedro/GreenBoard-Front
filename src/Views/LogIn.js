import React from 'react';
import LoginForm from "../Components/LogInForm"
import NavbarPublic from '../Components/NavbarPublic';
import Footer from '../Components/Footer'

const LogIn = (props) => {
    return (
        <>  
            <NavbarPublic/>
            <LoginForm type="text" {...props} />
            <Footer/>
        </>
    )
}

export default LogIn
