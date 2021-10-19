import React from 'react';
import SignupForm from "../Components/SignUpForm"
import NavbarPublic from '../Components/NavbarPublic';

const SignUp = (props) => {
    return (
        <>
            <NavbarPublic/>
            <h1>SignUp Page</h1>
            <SignupForm type="text" {...props}/>
        </>
    )
}

export default SignUp