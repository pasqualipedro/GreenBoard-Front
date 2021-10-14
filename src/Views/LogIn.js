import React from 'react';
import LoginForm from "../Components/LogInForm"


const LogIn = (props) => {
    return (
        <>  
            <h1>LogIn Page</h1>
            <LoginForm type="text" {...props} />
        </>
    )
}

export default LogIn
