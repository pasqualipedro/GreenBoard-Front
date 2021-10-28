import React, { Component } from "react";

class CategoryContent extends Component {
  render() {
    return (
      <>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colspan="4">
                <table className="table mb-0 table-hover table-sm align-middle">
                  <thead>
                    <th scope="col">Salario Pedro - ITEM</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">net salary</th>
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
                      <th scope="row">gross salary</th>
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
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default CategoryContent;
