import React, { Component } from 'react';
import CategoryForm from '../Components/CategoryForm';
import CategoryList from '../Components/CategoryList';
import api from '../Api/api.config';
import ButtonLink from '../Components/ButtonLink';


class Category extends Component {
    state = {
        list: []
    }
    
    getAllCategories = async () => {
        try {
            const allCategories = await api.categoryFetchAll()
            this.setState({
                list: allCategories
            })
        } catch (error) {
            
        }
    }

    componentDidMount(){
        this.getAllCategories();
    }

 
    render(){
        return (
            <>  
                <h1>Category!!!</h1>
                <CategoryForm updateList = {this.getAllCategories}/>
                <CategoryList {...this.state} updateList = {this.getAllCategories}/>
                <ButtonLink text = "Enter" endpoint="/dashboard"/>
            </>
        )
    }
}

export default Category
