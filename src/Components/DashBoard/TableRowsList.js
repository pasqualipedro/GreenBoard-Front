import React, { Component } from "react";
import TableRow from "./TableRow";


class TableRowsList extends Component {
  render() {
    return (
      <>
        <TableRow rowTitle={" ---- "} />
        <thead>
          <td scope="col">{this.props.categoryItem}</td>
        </thead>
        <tbody>
          <TableRow
            rowTitle={"value"} 
            monthValue={"value"}
          />
          <TableRow
            rowTitle={"budget"}
            monthValue={this.props.categoryBudget}
          />
        </tbody>
      </>
    );
  }
}

export default TableRowsList;
