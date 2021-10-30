import React, { Component } from "react";
import NavbarPublic from "../Components/NavbarPublic";
import NavbarPrivate from "../Components/NavbarPrivate";
import TableBalance from "../Components/DashBoard/TableBalance";
import IncomeTable from "../Components/DashBoard/IncomeTable";
import SavingsTable from "../Components/DashBoard/SavingsTable";
import ExpenditureTable from "../Components/DashBoard/ExpenditureTable";
import api from "../Api/api.config";



class DashBoard extends Component {
  state = {
    loading: false,
    categoryListAll: [],
    transactionListAll: [],

    /** WHOLE categories by TYPE */
    categoriesIncome: [],
    categoriesExpenditure: [],
    categoriesSavings: [],

    /** WHOLE transaction by TYPE */
    transactionsIncome: [],
    transactionsExpenditure: [],
    transactionsSavings: [],

  };

  getAllTransactionsInfos = async () => {
    this.setState({
      loading: true,
    });
    try {
      /** All transactions */
      const allTransactions = await api.transactionFetchAll();
      
      /** Transactions by type */
      const transactionsIncome = await allTransactions.filter((element) => {
        return element.type === `Income`;
      });
      const transactionsExpenditure = await allTransactions.filter((element) => {
          return element.type === `Expenditure`;
      });
      const transactionsSavings = await allTransactions.filter((element) => {
        return element.type === `Savings`;
      });

      this.setState({
        transactionListAll: allTransactions,
        transactionsIncome: transactionsIncome,
        transactionsExpenditure: transactionsExpenditure,
        transactionsSavings: transactionsSavings,
      });
    } catch (error) {
      console.log(error, `Unable to fetch all transactions`);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  getAllCategories = async () => {
    this.setState({
      loading: true,
    });
    try {
      /** All Categories */
      const allCategories = await api.categoryFetchAll();

      /** Categories by type */
      const categoriesIncome = await allCategories.filter((element) => {
        return element.type === `Income`;
      });
      const categoriesExpenditure = await allCategories.filter((element) => {
        return element.type === `Expenditure`;
      });
      const categoriesSavings = await allCategories.filter((element) => {
        return element.type === `Savings`;
      });

      this.setState({
        categoryListAll: allCategories,
        categoriesIncome: categoriesIncome,
        categoriesExpenditure: categoriesExpenditure,
        categoriesSavings: categoriesSavings,
      });
    } catch (error) {
      console.log(error, `Unable to fetch all categories`);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  componentDidMount() {
    this.getAllTransactionsInfos();
    this.getAllCategories();
  }

  render() {
    return (
      <>
        <NavbarPublic />
        <NavbarPrivate />
        <h1>Balance</h1>
        <TableBalance
          transactionsIncomes={this.state.transactionsIncome}
          transactionsExpenditures={this.state.transactionsExpenditure}
          transactionsSavings={this.state.transactionsSavings}
        />
        
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <h1>Incomes</h1>
          {this.state.categoriesIncome.map((element, index) => {
            return <IncomeTable key={index} categoryItem={element.item} tableNumber={index} categoryBudget={element.budget} transactionsIncome={this.state.transactionsIncome} />
          })}
          <h1>Savings</h1>
          {this.state.categoriesSavings.map((element, index) => {
            return <SavingsTable key={index} categoryName={element.item} tableNumber={index}/>
          })}
          <h1>Expenditures</h1>
          {this.state.categoriesExpenditure.map((element, index) => {
            return <ExpenditureTable key={index} categoryName={element.item} tableNumber={index}/>
          })}
        </div>
      </>
    );
  }
}

export default DashBoard;
