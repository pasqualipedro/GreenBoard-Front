import React from 'react';
import ButtonLink from '../Components/ButtonLink';
import NavbarPublic from '../Components/NavbarPublic';
import Footer from '../Components/Footer'

const Settings = (props) => {
    return (
        <>  
            <NavbarPublic/>
            <h1>Settings Page</h1>
            <ButtonLink text = "Back to Dashboard" endpoint="/dashboard"/>
            <Footer/>
        </>
    )
}

export default Settings
