import React, { Component } from 'react';
import CategoryForm from '../Components/CategoryForm';
import CategoryList from '../Components/CategoryList';
import api from '../Api/api.config';
import NavbarPrivate from '../Components/NavbarPrivate';
import NavbarPublic from '../Components/NavbarPublic';


class Category extends Component {
    state = {
        loading: false,
        categoryList: []
    };
    
    getAllCategories = async () => {
        this.setState({
            loading: true
        });
        try {
            const allCategories = await api.categoryFetchAll();
            this.setState({
                categoryList: allCategories
            });
        } catch (error) {
            console.log(error, `Unable to fetch all categories`);
        } finally {
            this.setState({
                loading: false
            });
        }
    };

    componentDidMount(){
        this.getAllCategories();
    };


    render(){
        return (
            <>  
                <NavbarPublic/>
                <NavbarPrivate/>
                <CategoryForm updatedCategoryList={this.getAllCategories} history={this.props.history} />
                { this.state.loading ? <h3>Loading</h3> : /**--------------->>>> APRIMORAR ESTE LOADING!!!! */
                <CategoryList {...this.state} updatedCategoryList={ this.getAllCategories } />
                }
            </>
        );
    };

};

export default Category;
