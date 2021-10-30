import React, { Component } from "react";
import CategoryListContentItem from "./CategoryListContentItem";

class CategoryListContent extends Component {
state = {
  itemName: this.props.itemName
}

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
                  <CategoryListContentItem {...this.props}/>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default CategoryListContent;
