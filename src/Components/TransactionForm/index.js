import React, { Component } from "react";
import api from "../../Api/api.config";
import {
  InputLabel,
  Input,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";

class TransactionForm extends Component {
  state = {
    startDate: "",
    endDate: "",
    description: "",
    type: "",
    group: "",
    item: "",
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
            <InputLabel>Description:</InputLabel>
            <TextField variant="filled" size="small">
              <Input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleInput}
              />
            </TextField>
          </div>

          <div class="form-group m-3">
            <InputLabel htmlFor="types">Choose transaction type:</InputLabel>
            <Select
              fullWidth
              id="types"
              name="type"
              form="transaction_form"
              onChange={this.handleInput}
            >
              <MenuItem disabled selected>
                transaction type
              </MenuItem>
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expenditure">Expenditure</MenuItem>
              <MenuItem value="Savings">Savings</MenuItem>
            </Select>
          </div>

          <div class="form-group m-3">
            <InputLabel>Category Name:</InputLabel>
            <Select
              fullWidth
              id="categories"
              name="group"
              form="transaction_form"
              onChange={this.handleInput}
            >
              <MenuItem selected disabled>
                category name
              </MenuItem>
              {this.props.categoryList.map((element, index) => {
                return (
                  <MenuItem key={index} value={element.group}>
                    {element.group}
                  </MenuItem>
                );
              })}
            </Select>
          </div>

          <div class="form-group m-3">
            <InputLabel>Item:</InputLabel>
            <Select
              fullWidth
              id="items"
              name="item"
              form="transaction_form"
              onChange={this.handleInput}
            >
              <MenuItem selected disabled>
                category item
              </MenuItem>
              {this.props.categoryList.map((element, index) => {
                return (
                  <MenuItem key={index} value={element.item}>
                    {element.item}
                  </MenuItem>
                );
              })}
            </Select>
          </div>

          <div class="form-group m-3">
            <InputLabel>Value:</InputLabel>
            <TextField variant="filled" size="small">
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
            <Select
              fullWidth
              id="frequencies"
              name="frequency"
              form="transaction_form"
              onChange={this.handleInput}
            >
              <MenuItem selected disabled>
                frequency
              </MenuItem>
              <MenuItem value="Single Time">Single Time</MenuItem>
              <MenuItem value="Installment">Installment</MenuItem>
              <MenuItem value="Daily">Daily</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Year">Year</MenuItem>
              <MenuItem value="Weekdays">Weekdays</MenuItem>
              <MenuItem value="Weekends">Weekends</MenuItem>
              <MenuItem value="By 2 Months">By 2 Months</MenuItem>
              <MenuItem value="By 3 Months">By 3 Months</MenuItem>
              <MenuItem value="By 4 Months">By 4 Months</MenuItem>
              <MenuItem value="By 6 Months">By 6 Months</MenuItem>
            </Select>
          </div>
          
        </form>
      </div>
    );
  }
}

export default TransactionForm;
