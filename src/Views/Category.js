import React, { Component } from "react";
import CategoryForm from "../Components/CategoryForm";
import CategoryList from "../Components/CategoryList";
import api from "../Api/api.config";
import NavbarPrivate from "../Components/NavbarPrivate";
import NavbarPublic from "../Components/NavbarPublic";
import { Grid, CircularProgress } from "@material-ui/core";

class Category extends Component {
  state = {
    loading: false,
    categoryList: [],
  };

  getAllCategories = async () => {
    this.setState({
      loading: true,
    });
    try {
      const allCategories = await api.categoryFetchAll();
      this.setState({
        categoryList: allCategories,
      });
    } catch (error) {
      console.log(error, `Unable to fetch all categories`);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  componentDidMount() {
    this.getAllCategories();
  }

  render() {
    return (
      <>
        <NavbarPublic />
        <NavbarPrivate />

        <div style={{ backgroundColor: "#C1FAE3" }}>
          <Grid
            container
            justifyContent="space-around"
            direction="column"
            alignItems="center"
          >
            <CategoryForm
              updatedCategoryList={this.getAllCategories}
              history={this.props.history}
              categoryList={this.state.categoryList}
            />
            
            {this.state.loading ? (
              <CircularProgress
                style={{ display: "block", margin: "10px auto" }}
              />
            ) : (
              <CategoryList
                {...this.state}
                updatedCategoryList={this.getAllCategories}
              />
            )}
          </Grid>
        </div>
      </>
    );
  }
}

export default Category;
