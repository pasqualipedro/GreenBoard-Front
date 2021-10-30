import React, { Component } from "react";
import TableHeaderMonth from "./TableHeaderMonth";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";

class TableBalance extends Component {

  render() {
    return (
      <>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <TableHeaderMonth />
            </thead>
            <tbody>
              <TableRow rowTitle={"Income"} />
              <TableRow rowTitle={"Expenditure"} />
              <TableRow rowTitle={"Savings"} />
            </tbody>
            <tfoot>
              <TableFooter />
            </tfoot>
          </table>
        </div>
      </>
    );
  }
}

export default TableBalance;
