import React, { Component } from "react";

class ExpenditureTable extends Component {


  render() {
    return (
      <>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                EXPENDITURES
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="table-responsive accordion-body">
                <table className="table table-striped table-bordered">
                  <tbody>
                    <tr>
                      <th>CASA</th>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <table className="table mb-0 table-hover table-sm align-middle">
                          <thead>
                            <th scope="col">fixos</th>
                            <th scope="col">value</th>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">agua</th>
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
                              <th scope="row">luz</th>
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
                              <th scope="row">gas</th>
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
                    <tr>
                      <th scope="row">SUB TOTAL</th>
                      <td>250</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <th>CARRO</th>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <table className="table mb-0 table-hover table-sm align-middle">
                          <thead>
                            <th scope="col">fixos</th>
                            <th scope="col">value</th>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">IPVA</th>
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
                              <th scope="row">revisoes + manut</th>
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
                              <th scope="row">gas</th>
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
                          <thead>
                            <th scope="col">nao-fixos</th>
                            <th scope="col">value</th>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">extras</th>
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
        </div>  
      </>
    );
  }
}

export default ExpenditureTable;
