import React, { Component } from "react";
import NavbarPublic from "../Components/NavbarPublic";
import NavbarPrivate from "../Components/NavbarPrivate";
import BalanceTable from "../Components/DashBoard/BalanceTable"
import IncomeTable from "../Components/DashBoard/IncomeTable"
import SavingsTable from "../Components/DashBoard/SavingsTable"
import ExpenditureTable from "../Components/DashBoard/ExpenditureTable"
import api from '../Api/api.config';


class DashBoard extends Component {
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
        const incomeTransactions = allTransactions.filter((element) => {
          return element.type = "Income" });
        this.setState({
            transactionList: allTransactions
        });
        console.log(incomeTransactions);
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
        <NavbarPublic />
        <NavbarPrivate />
        <h1>Balance</h1>
        <BalanceTable transactionList={this.state.transactionList} />
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <h1>Incomes</h1>
          <IncomeTable />
          <h1>Savings</h1>
          <SavingsTable />
          <h1>Expenditures</h1>
          <ExpenditureTable />
        </div>
      </>
    );
  }
}

export default DashBoard;
