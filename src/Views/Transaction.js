import React, { Component } from 'react';
import TransactionForm from '../Components/TransactionForm';
import TransactionList from '../Components/TransactionList';
import api from '../Api/api.config';
import NavbarPrivate from '../Components/NavbarPrivate';
import NavbarPublic from '../Components/NavbarPublic';
import { Grid, CircularProgress } from '@material-ui/core';
import ButtonButton from '../Components/ButtonButton';

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



    render() {
        return (
            <>  
                <NavbarPublic/>
                <NavbarPrivate/>
                <div style={{ backgroundColor: "#C1FAE3" }}>
                    <Grid container justifyContent="space-around" direction='column' alignItems='center'>
                        <TransactionForm updatedTransactionList={this.getAllTransactions} categoryList={this.state.categoryList} />
                        <Grid container justifyContent="center" alignItems="center">
                            <ButtonButton type="submit" text="Add" />
                        </Grid>
                        {this.state.loading ?<CircularProgress style={{ display: 'block', margin: '10px auto' }} /> : /**--------------->>>> APRIMORAR ESTE LOADING!!!! */
                            <TransactionList {...this.state} updatedTransactionList={ this.getAllTransactions } categoryList={ this.state.categoryList }/>
                        };
                    </Grid>
                </div>    
                
            </>
        );
    };

};

export default Transaction;