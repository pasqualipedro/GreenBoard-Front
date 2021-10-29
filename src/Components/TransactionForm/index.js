import React, { Component } from "react";
import api from "../../Api/api.config";
import { InputLabel, Input, TextField, Select, MenuItem } from "@material-ui/core";

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
          <div class="form-group m-3">
            <InputLabel>Start Date:</InputLabel>
            <Input
              type="Date"
              name="startDate"
              value={this.state.startDate}
              onChange={this.handleInput}
            />
          </div>
          <div class="form-group m-3">
            <InputLabel>End Date:</InputLabel>
            <Input
              type="Date"
              name="endDate"
              value={this.state.endDate}
              onChange={this.handleInput}
            />
          </div>
          <div class="form-group m-3">
            <InputLabel htmlFor="types">Choose category type:</InputLabel>
            <Select fullWidth
              id="types"
              name="type"
              form="transaction_form"
              onChange={this.handleInput}
            >
              <MenuItem disabled selected ></MenuItem>
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expenditure">Expenditure</MenuItem>
            </Select>
          </div>
          <div class="form-group m-3">
            <InputLabel>Description:</InputLabel>
            <TextField variant="filled" size="small" >
            <Input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleInput}
            />
            </TextField>
          </div>
          <div class="form-group m-3">
            <InputLabel>Category:</InputLabel>
            <TextField variant="filled" size="small" >
            <Input
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.handleInput}
            />
            </TextField>
          </div>
          <div class="form-group m-3">
            <InputLabel>Value:</InputLabel>
            <TextField variant="filled" size="small" >
            <Input
              type="number"
              name="value"
              value={this.state.value}
              onChange={this.handleInput}
            />
            </TextField>
          </div>
          <div class="form-group m-3">
            <InputLabel htmlFor="types">Frequency:</InputLabel>
            <Select fullWidth
              id="frequencies"
              name="frequency"
              form="transaction_form"
              onChange={this.handleInput}
            >
              <MenuItem disabled selected ></MenuItem>
              <MenuItem value="Income">Single Time</MenuItem>
              <MenuItem value="Expenditure">Installment</MenuItem>
              <MenuItem value="Expenditure">Daily</MenuItem>
              <MenuItem value="Expenditure">Weekly</MenuItem>
              <MenuItem value="Expenditure">Monthly</MenuItem>
              <MenuItem value="Expenditure">Year</MenuItem>
              <MenuItem value="Expenditure">Weekdays</MenuItem>
              <MenuItem value="Expenditure">Weekends</MenuItem>
              <MenuItem value="Expenditure">By 2 Months</MenuItem>
              <MenuItem value="Expenditure">By 3 Months</MenuItem>
              <MenuItem value="Expenditure">By 4 Months</MenuItem>
              <MenuItem value="Expenditure">By 6 Months</MenuItem>
            </Select>
          </div>
        </form>
          
      </div>
    );
  }
}

export default TransactionForm;
