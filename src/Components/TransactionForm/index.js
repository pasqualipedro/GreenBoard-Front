import React, { Component } from "react";
import ButtonButton from "../ButtonButton";
import api from "../../Api/api.config";

class TransactionForm extends Component {
  state = {
    startDate: "",
    endDate: "",
    type: "",
    description: "",
    category: "",
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
          <label htmlFor="types">Choose category type:</label>
            <select
              id="types"
              name="type"
              form="transaction_form"
              onChange={this.handleInput}
              >
                <option disabled selected ></option>
                <option value="Income">Income</option>
                <option value="Expenditure">Expenditure</option>
            </select>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleInput}
          />
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={this.state.category}
            onChange={this.handleInput}
          />
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
                <option disabled selected ></option>
                <option value="Income">Single Time</option>
                <option value="Expenditure">Installment</option>
                <option value="Expenditure">Daily</option>
                <option value="Expenditure">Weekly</option>
                <option value="Expenditure">Monthly</option>
                <option value="Expenditure">Year</option>
                <option value="Expenditure">Weekdays</option>
                <option value="Expenditure">Weekends</option>
                <option value="Expenditure">By 2 Months</option>
                <option value="Expenditure">By 3 Months</option>
                <option value="Expenditure">By 4 Months</option>
                <option value="Expenditure">By 6 Months</option>
            </select>
          <ButtonButton type="submit" text="Add" />
        </form>
      </div>
    );
  }
}

export default TransactionForm;
