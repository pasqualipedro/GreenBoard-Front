import React, { Component } from "react";
import ButtonButton from "../ButtonButton";
import api from "../../Api/api.config";
import {
  InputLabel,
  Input,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";

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

  /*   uniqueGroupNames = async () => {
    const newArray = await this.props.categoryList.map((element) => {
      return [...new Set(element.group)]
    });
  }; */

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="category_form">
          <div class="form-group m-3">
            <InputLabel>
              <b>Description:</b>
            </InputLabel>
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
            <InputLabel htmlFor="types">
              <b>Choose Category Type:</b>
            </InputLabel>
            <Select
              fullWidth
              id="types"
              name="type"
              form="category_form"
              onChange={this.handleInput}
            >
              <MenuItem disabled selected>
                category type
              </MenuItem>
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expenditure">Expenditure</MenuItem>
              <MenuItem value="Savings">Savings</MenuItem>
            </Select>
          </div>

          <div class="form-group m-3">
            <InputLabel>
              <b>Category Name:</b>
            </InputLabel>
            <TextField variant="filled" size="small">
              <Input
                type="text"
                name="group"
                value={this.state.group}
                onChange={this.handleInput}
              />
            </TextField>
          </div>

          <div class="form-group m-3">
            <InputLabel>
              <b>Item:</b>
            </InputLabel>
            <TextField variant="filled" size="small">
              <Input
                type="text"
                name="item"
                value={this.state.item}
                onChange={this.handleInput}
              />
            </TextField>
          </div>

          <div class="form-group m-3">
            <InputLabel>
              <b>Budget:</b>
            </InputLabel>
            <TextField variant="filled" size="small">
              <Input
                type="number"
                name="budget"
                value={this.state.budget}
                onChange={this.handleInput}
              />
            </TextField>
          </div>
        </form>
      </div>
    );
  }
}

export default CategoryForm;
