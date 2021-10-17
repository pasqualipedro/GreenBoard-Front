import React, { Component } from 'react';
import ButtonLink from '../Components/ButtonLink';

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
                <h1>DASHBOARD!!!</h1>
                <ButtonLink text = "Add/Edit Categories" endpoint="/category"/>
                <ButtonLink text = "Add/Edit Transactions" endpoint="/category"/>
                <ButtonLink text = "Settings" endpoint="/settings" onClick={this.handleSubmit}/>
    
            </>
        )
    };

};

export default Dashboard;
