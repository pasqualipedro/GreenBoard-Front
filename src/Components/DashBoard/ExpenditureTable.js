import React, { Component } from "react";
import TableHeaderMonth from "./TableHeaderMonth";
import TableRowsList from "./TableRowsList.js";
import TableFooter from "./TableFooter";

class ExpenditureTable extends Component {
  render() {
    return (
      <>
        <div className="accordion-item">
          <h2 className="accordion-header" id={`panelsStayOpen-heading${this.props.tableNumber}E`} >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#panelsStayOpen-collapse${this.props.tableNumber}E`}
              aria-expanded="true"
              aria-controls={`panelsStayOpen-collapse${this.props.tableNumber}E`}
            >
              Expenditures
            </button>
          </h2>
          <div
            id={`panelsStayOpen-collapse${this.props.tableNumber}E`}
            className="accordion-collapse collapse show"
            aria-labelledby={`panelsStayOpen-heading${this.props.tableNumber}E`}
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
                          <TableFooter />
                        </thead>
                        {/** repetitive "sub" header + data rows ---- */}
                        {this.props.categoriesExpenditure.map((element, index) => {
                          return (
                            <TableRowsList 
                              key={index}
                              categoryItem={element.item}
                              categoryBudget={element.budget}
                            />
                          );  
                        })}
                        {/** ------ */}
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

export default ExpenditureTable;
