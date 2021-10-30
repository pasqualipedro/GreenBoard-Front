import React, { Component } from "react";

class TableRow extends Component {


  render() {
    return (
      <>
        <tr>
          <td>{this.props.rowTitle}</td>
          <td colspan="4">{this.props.monthValue}</td>
          <td colspan="4">{this.props.monthValue}</td>
          <td colspan="4">{this.props.monthValue}</td>
          <td colspan="4">{this.props.monthValue}</td>
          <td colspan="4">{this.props.monthValue}</td>
          <td colspan="4">{this.props.monthValue}</td>
          <td colspan="4">{this.props.monthValue}</td>
          <td colspan="4">{this.props.monthValue}</td>
          <td colspan="4">{this.props.monthValue}</td>
          <td colspan="4">{this.props.monthValue}</td>
          <td colspan="4">{this.props.monthValue}</td>
          <td colspan="4">{this.props.monthValue}</td>
        </tr>
      </>
    );
  }
}

export default TableRow;
