import React, { Component } from 'react';
import TransactionForm from '../Components/TransactionForm';
import TransactionList from '../Components/TransactionList';
import api from '../Api/api.config';
import ButtonLink from '../Components/ButtonLink';
import NavbarPrivate from '../Components/NavbarPrivate';
import NavbarPublic from '../Components/NavbarPublic';


class Transaction extends Component {
    state = {
        loading: false,
        list: []
    };
    
    getAllTransactions = async () => {
        this.setState({
            loading: true
        });
        try {
            const allTransactions = await api.transactionFetchAll();
            this.setState({
                list: allTransactions
            });
        } catch (error) {
            console.log(error, `Unable to fetch all transactions`);
        } finally {
            this.setState({
                loading: false
            });
        }
        
    };

    componentDidMount(){
        this.getAllTransactions();
    };


    render(){
        return (
            <>  
                <h1>Transaction!!!</h1>
                <NavbarPublic/>
                <NavbarPrivate/>
                <TransactionForm updatedTransactionList={this.getAllTransactions}/>
                { this.state.loading? <h3>Loading</h3> : /**--------------->>>> APRIMORAR ESTE LOADING!!!! */
                <TransactionList {...this.state} updatedTransactionList={ this.getAllTransactions } />
                }
                <ButtonLink text = "Enter" endpoint="/dashboard"/>
            </>
        );
    };

};

export default Transaction;
