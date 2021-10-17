import React from 'react';
import ButtonLink from '../Components/ButtonLink';

const Settings = (props) => {
    return (
        <>  
            <h1>Settings Page</h1>
            <ButtonLink text = "Back to Dashboard" endpoint="/dashboard"/>
        </>
    )
}

export default Settings
