import React, { Component } from "react";
import NavbarPublic from "../Components/NavbarPublic";
import NavbarPrivate from "../Components/NavbarPrivate";

class DashBoard extends Component {
  render() {
    return (
      <>
        <NavbarPublic />
        <NavbarPrivate />
        <div class="table-responsive">
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
                Accordion Item #1
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
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
                Accordion Item #2
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DashBoard;
