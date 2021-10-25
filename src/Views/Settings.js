import React from 'react';
import ButtonButton from '../Components/ButtonButton';
import NavbarPublic from '../Components/NavbarPublic';
import Footer from '../Components/Footer'

const Settings = (props) => {
    return (
        <>  
            <NavbarPublic/>
            <h1>Settings Page</h1>
            <ButtonButton text="Back to Dashboard" endpoint="/dashboard"/>
            <Footer/>
        </>
    )
}

export default Settings
