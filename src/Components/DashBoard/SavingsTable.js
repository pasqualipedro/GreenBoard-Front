import React, { Component } from "react";
import MonthHeader from "../DashBoard/MonthHeader";
import CategoryListContent from "./CategoryListContent";
import TotalValues from "../DashBoard/TotalValues";

class SavingsTable extends Component {
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
              POUPANCA ITAU - Category NAME
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body table-responsive">
              <MonthHeader />
              <CategoryListContent />
              <TotalValues />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SavingsTable;
