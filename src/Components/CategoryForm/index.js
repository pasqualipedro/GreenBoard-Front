import React, { Component } from "react";
import ButtonButton from "../ButtonButton";
import api from "../../Api/api.config";

class CategoryForm extends Component {
  state = {
    item: "",
    description: "",
    type: "",
    group: "",
    /* inUse: "", */
    budget: "",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.categoryCreate(this.state);
      await this.props.updatedCategoryList();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="category_form">
            <label>Description:</label>
                <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleInput}
                />
            <label htmlFor="types">Choose category type:</label>
              <select
                id="types"
                name="type"
                form="category_form"
                onChange={this.handleInput}
                >
                  <option disabled selected ></option>
                  <option value="Income">Income</option>
                  <option value="Expenditure">Expenditure</option>
                  <option value="Savings">Savings</option>
              </select>    
            <label>Category Name:</label>
                <input
                type="text"
                name="group"
                value={this.state.group}
                onChange={this.handleInput}
                />
            <label>item:</label>
                <input
                type="text"
                name="item"
                value={this.state.item}
                onChange={this.handleInput}
                />
            <label>Budget:</label>
                <input
                type="number"
                name="budget"
                value={this.state.budget}
                onChange={this.handleInput}
                />
            <ButtonButton type="submit" text="Add" />
        </form>
      </div>
    );
  }
}

export default CategoryForm;
