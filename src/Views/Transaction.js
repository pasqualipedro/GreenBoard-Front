import React, { Component } from 'react';
import TransactionForm from '../Components/TransactionForm';
import TransactionList from '../Components/TransactionList';
import api from '../Api/api.config';
import NavbarPrivate from '../Components/NavbarPrivate';
import NavbarPublic from '../Components/NavbarPublic';


class Transaction extends Component {
    state = {
        loading: false,
        transactionList: [],
        categoryList: []
    };
    
    getAllTransactions = async () => {
        this.setState({
            loading: true
        });
        try {
            const allTransactions = await api.transactionFetchAll();
            this.setState({
                transactionList: allTransactions
            });
        } catch (error) {
            console.log(error, `Unable to fetch all transactions`);
        } finally {
            this.setState({
                loading: false
            });
        }
        
    };

    getAllCategories = async () => {
        this.setState({
            loading: true
        });
        try {
            const allCategories = await api.categoryFetchAll();
            this.setState({
                categoryList: allCategories
            });
        } catch (error) {
            console.log(error, `Unable to fetch all categories`);
        } finally {
            this.setState({
                loading: false
            });
        }
    };

    
    componentDidMount() {
        this.getAllTransactions();
        this.getAllCategories();
    };

    

    render(){
        return (
            <>  
                <NavbarPublic/>
                <NavbarPrivate/>
                <TransactionForm updatedTransactionList={this.getAllTransactions} categoryList={this.state.categoryList} />
                { this.state.loading? <h3>Loading</h3> : /**--------------->>>> APRIMORAR ESTE LOADING!!!! */
                <TransactionList {...this.state} updatedTransactionList={ this.getAllTransactions } />
                }
            </>
        );
    };

};

export default Transaction;
