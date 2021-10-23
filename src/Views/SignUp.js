import React from 'react';
import SignupForm from "../Components/SignUpForm"
import NavbarPublic from '../Components/NavbarPublic';
import Footer from '../Components/Footer';

const SignUp = (props) => {
    return (
        <>
            <NavbarPublic/>
            <SignupForm type="text" {...props}/>
            <Footer/>
        </>
    )
}

export default SignUp