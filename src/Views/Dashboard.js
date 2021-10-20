import React, { Component } from 'react';
import ButtonLink from '../Components/ButtonLink';
import NavbarPublic from '../Components/NavbarPublic';
import NavbarPrivate from '../Components/NavbarPrivate';

class Dashboard extends Component {
    state = {

    };


    componentDidMount(){
        
    }

    handleSubmit = () => {

    }

    render(){
        return (
            <>  
                <NavbarPublic/>
                <NavbarPrivate/>
                <h1>DASHBOARD!!!</h1>
                <ButtonLink text = "Add/Edit Categories" endpoint="/category"/>
                <ButtonLink text = "Add/Edit Transactions" endpoint="/category"/>
                <ButtonLink text = "Settings" endpoint="/settings" onClick={this.handleSubmit}/>
    
            </>
        )
    };

};

export default Dashboard;
