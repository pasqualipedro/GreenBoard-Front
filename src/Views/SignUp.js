import React from 'react';
import SignupForm from "../Components/SignUpForm"


const SignUp = (props) => {
    return (
        <>
            <h1>SignUp Page</h1>
            <SignupForm type="text" {...props}/>
        </>
    )
}

export default SignUp