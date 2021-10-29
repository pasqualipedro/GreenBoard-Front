import React, { Component } from "react";
import ButtonButton from "../ButtonButton";
import api from "../../Api/api.config";

class TransactionForm extends Component {
  state = {
    startDate: "",
    endDate: "",
    description: "",
    type: "",
    group: "",
    value: "",
    frequency: "",
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
      await api.transactionCreate(this.state);
      await this.props.updatedTransactionList();
    } catch (error) {
      console.log(error);
    }
  };

  
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="transaction_form">
          <label>Start Date:</label>
          <input
            type="Date"
            name="startDate"
            value={this.state.startDate}
            onChange={this.handleInput}
          />
          <label>End Date:</label>
          <input
            type="Date"
            name="endDate"
            value={this.state.endDate}
            onChange={this.handleInput}
          />
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
            form="transaction_form"
            onChange={this.handleInput}
          >
            <option disabled defaultValue ></option>
            <option value="Income">Income</option>
            <option value="Expenditure">Expenditure</option>
            <option value="Savings">Savings</option>
          </select>
          <label>Category Name:</label>
          <select
            id="categories"
            name="category"
            form="transaction_form"
            onChange={this.handleInput}
          >
            <option disabled defaultValue ></option>
            {this.props.categoryList.map((element, index) => {
              return <option key={index} value={element.group}>{element.group}</option>;
            })}
          </select>
          <label>Value:</label>
          <input
            type="number"
            name="value"
            value={this.state.value}
            onChange={this.handleInput}
          />
          <label htmlFor="types">Frequency:</label>
          <select
            id="frequencies"
            name="frequency"
            form="transaction_form"
            onChange={this.handleInput}
          >
            <option disabled selected></option>
            <option value="Single Time">Single Time</option>
            <option value="Installment">Installment</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Year">Year</option>
            <option value="Weekdays">Weekdays</option>
            <option value="Weekends">Weekends</option>
            <option value="By 2 Months">By 2 Months</option>
            <option value="By 3 Months">By 3 Months</option>
            <option value="By 4 Months">By 4 Months</option>
            <option value="By 6 Months">By 6 Months</option>
          </select>
          <ButtonButton type="submit" text="Add" />
        </form>
      </div>
    );
  }
}

export default TransactionForm;
