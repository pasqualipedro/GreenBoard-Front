import React from 'react';
import ButtonButton from '../Components/ButtonButton';
import NavbarPublic from '../Components/NavbarPublic';
import NavbarPrivate from '../Components/NavbarPrivate';
import Footer from '../Components/Footer'


const Settings = (props) => {
    return (
        <>  
            <NavbarPublic/>
            <NavbarPrivate />
            <ButtonButton text="Update my Info"/>
            <Footer/>
        </>
    )
}

export default Settings
