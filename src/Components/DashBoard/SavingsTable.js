import React, { Component } from "react";

class ExpenditureTable extends Component {


  render() {
    return (
      <>
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                SAVINGS
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="table-responsive accordion-body">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Income Transactions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Category A</th>
                    <td colspan="4">category description</td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <table className="table mb-0 table-hover table-sm align-middle">
                        <thead>
                          <th scope="col">name</th>
                          <th scope="col">value</th>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Group AA</th>
                            <td colspan="4">100</td>
                          </tr>
                          <tr>
                            <th scope="row">Group BB</th>
                            <td colspan="4">125</td>
                          </tr>
                          <tr>
                            <th scope="row">Group CC</th>
                            <td colspan="4">25</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SUB TOTAL</th>
                    <td>250</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">TOTAL TOTAL</th>
                    <td>250!!</td>
                  </tr>
                </tfoot>
              </table>
              </div>
            </div>
          </div>
      </>
    );
  }
}

export default ExpenditureTable;




