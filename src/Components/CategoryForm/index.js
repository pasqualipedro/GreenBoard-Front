import { render } from "@testing-library/react"
import react, { Component } from "react"
import Button from "../Button"
import CategoryList from "../CategoryList"
import api from "../../Api/api.config"

class CategoryForm extends Component {
    state ={
        name: "",
        description: "",
        budget:""
    }

    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.categoryCreate(this.state);
            await this.props.updateList()
        } catch (error) {
            
        }
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Name: </label>
                    <input type = "text" name = "name" value = {this.state.name} onChange = {this.handleInput}/>
                    <label>Description: </label>
                    <input type = "text" name = "description" value = {this.state.description} onChange = {this.handleInput}/>
                    <label>Budget: </label>
                    <input type = "number" name = "budget" value = {this.state.budget} onChange = {this.handleInput}/>
                    <Button type = "submit" text = "Add"/>
                </form>
                    <Button type = "submit" text = "Enter"/>
            </div>
        )
    }
}

export default CategoryForm