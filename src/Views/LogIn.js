import React from 'react';
import LoginForm from "../Components/LogInForm"
import NavbarPublic from '../Components/NavbarPublic';


const LogIn = (props) => {
    return (
        <>  
            <NavbarPublic/>
            <h1>LogIn Page</h1>
            <LoginForm type="text" {...props} />
        </>
    )
}

export default LogIn
