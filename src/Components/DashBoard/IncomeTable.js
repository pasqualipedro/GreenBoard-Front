import React, { Component } from "react";
import Header from "../DashBoard/Header";
import CategoryContent from "../DashBoard/CategoryContent";
import TotalValues from "../DashBoard/TotalValues";

class IncomeTable extends Component {
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
                SALARIO - Category NAME
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="table-responsive accordion-body">

                <Header />
                <CategoryContent />
                <TotalValues />
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default IncomeTable;
