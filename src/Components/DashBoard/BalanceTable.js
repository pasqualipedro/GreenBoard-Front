import React, { Component } from "react";

class BalanceTable extends Component {


  render() {
    return (
      <>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Total Balance</th>
                <td colspan="4">January</td>
                <td colspan="4">February</td>
                <td colspan="4">March</td>
                <td colspan="4">April</td>
                <td colspan="4">May</td>
                <td colspan="4">June</td>
                <td colspan="4">July</td>
                <td colspan="4">August</td>
                <td colspan="4">September</td>
                <td colspan="4">October</td>
                <td colspan="4">November</td>
                <td colspan="4">December</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Income</th>
                <td colspan="4">January</td>
                <td colspan="4">February</td>
                <td colspan="4">March</td>
                <td colspan="4">April</td>
                <td colspan="4">May</td>
                <td colspan="4">June</td>
                <td colspan="4">July</td>
                <td colspan="4">August</td>
                <td colspan="4">September</td>
                <td colspan="4">October</td>
                <td colspan="4">November</td>
                <td colspan="4">December</td>
              </tr>
              <tr>
                <th>Savings</th>
                <td colspan="4">January</td>
                <td colspan="4">February</td>
                <td colspan="4">March</td>
                <td colspan="4">April</td>
                <td colspan="4">May</td>
                <td colspan="4">June</td>
                <td colspan="4">July</td>
                <td colspan="4">August</td>
                <td colspan="4">September</td>
                <td colspan="4">October</td>
                <td colspan="4">November</td>
                <td colspan="4">December</td>
              </tr>
              <tr>
                <th>Expenditure</th>
                <td colspan="4">January</td>
                <td colspan="4">February</td>
                <td colspan="4">March</td>
                <td colspan="4">April</td>
                <td colspan="4">May</td>
                <td colspan="4">June</td>
                <td colspan="4">July</td>
                <td colspan="4">August</td>
                <td colspan="4">September</td>
                <td colspan="4">October</td>
                <td colspan="4">November</td>
                <td colspan="4">December</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">TOTAL TOTAL</th>
                <td colspan="4">January</td>
                <td colspan="4">February</td>
                <td colspan="4">March</td>
                <td colspan="4">April</td>
                <td colspan="4">May</td>
                <td colspan="4">June</td>
                <td colspan="4">July</td>
                <td colspan="4">August</td>
                <td colspan="4">September</td>
                <td colspan="4">October</td>
                <td colspan="4">November</td>
                <td colspan="4">December</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </>
    );
  }
}

export default BalanceTable;
