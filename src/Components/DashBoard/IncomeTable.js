import React, { Component } from "react";
import TableHeaderMonth from "./TableHeaderMonth";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";

class IncomeTable extends Component {
  render() {
    return (
      <>
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
              PROFISSIONAL
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body table-responsive"></div>
            {/** TABLE */}
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <tbody>
                  <tr>
                    <td colspan="4">
                      <table className="table mb-0 table-hover table-sm align-middle">
                        <thead>
                          <TableHeaderMonth />
                        </thead>
                        <thead>
                          <th scope="col">Salario Pedro - ITEM</th>
                        </thead>
                        <tbody>
                          <TableRow />
                        </tbody>
                        <thead>
                          <th scope="col">Salario Renata - ITEM</th>
                        </thead>
                        <tbody>
                          <TableRow />
                        </tbody>
                        <tfoot>
                          <TableFooter />
                        </tfoot>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/** TABLE */}
          </div>
        </div>
      </>
    );
  }
}

export default IncomeTable;
