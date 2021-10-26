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
      this.props.history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={this.state.type}
            onChange={this.handleInput}
          />
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
          <label>Frequency:</label>
          <input
            type="text"
            name="frequency"
            value={this.state.frequency}
            onChange={this.handleInput}
          />
          <ButtonButton type="submit" text="Add" />
        </form>
      </div>
    );
  }
}

export default TransactionForm;
