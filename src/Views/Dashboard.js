import React, { Component } from "react";
import NavbarPublic from "../Components/NavbarPublic";
import NavbarPrivate from "../Components/NavbarPrivate";
import BalanceTable from "../Components/DashBoard/BalanceTable"
import IncomeTable from "../Components/DashBoard/IncomeTable"
import SavingsTable from "../Components/DashBoard/SavingsTable"
import ExpenditureTable from "../Components/DashBoard/ExpenditureTable"

class DashBoard extends Component {
  state = {

  };

  


  render() {
    return (
      <>
        <NavbarPublic />
        <NavbarPrivate />
        <BalanceTable />
        <h1>Incomes</h1>
        <IncomeTable />
        <h1>Savings</h1>
        <SavingsTable />
        <h1>Expenditures</h1>
        <ExpenditureTable />
      </>
    );
  }
}

export default DashBoard;
