import React, { Component } from "react";

class CategoryListContentItem extends Component {
  


  render() {
    return (
      <>
        <tbody>
          <tr>
            <th scope="row">`${this.props.itemName}`</th>
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
      </>
    );
  }
}

export default CategoryListContentItem;
