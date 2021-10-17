import React from 'react';
import ButtonLink from '../Components/ButtonLink';

const Dashboard = () => {
    return (
        <>  
            <h1>DASHBOARD!!!</h1>
            <ButtonLink text = "Add/Edit Categories" endpoint="/category"/>
            <ButtonLink text = "Add/Edit Transactions" endpoint="/category"/>
            <ButtonLink text = "Settings" endpoint="/category"/>

        </>
    )
}

export default Dashboard
