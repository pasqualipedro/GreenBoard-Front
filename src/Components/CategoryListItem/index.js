import React, { Component } from "react"
import CategoryForm from "../CategoryForm"
import api from "../../Api/api.config"
import Button from "../Button"

class CategoryListItem extends Component {
    state = {
        name: this.props.name,
        description: this.props.description,
        budget: this.props.budget,
        edit: false
    }

    handleDelete = async (id) => {
        console.log(id)
        try {
            await api.categoryDelete(id)
            this.props.updateList()
        } catch (error) {
            console.log(error)
        }
    }

    editToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    } 

    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleUpdate = async (id, payload) => {
        try {
            await api.categoryUpdate(id,payload)
            this.editToggle()
            this.props.updateList()
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <>
                {this.state.edit ? 
                <>
                <td><input type = "text" name = "name" value = {this.state.name} onChange = {this.handleInput}/></td>
                <td><input type = "text" name = "description" value = {this.state.description} onChange = {this.handleInput}/></td>
                <td><input type = "number" name = "budget" value = {this.state.budget} onChange = {this.handleInput}/></td>
                <td>
                    <Button text="Cancel" action={this.editToggle} />
                </td>
                <td>
                    <Button text="Save" action={() => this.handleUpdate(this.props._id, this.state)}/>
                </td>
                </>
                :  
                <>
                <td>{this.state.name}</td>
                <td>{this.state.description}</td>
                <td>{this.state.budget}</td>
                <td>
                    <Button text="Delete" action={() => { this.handleDelete(this.props._id) }} />
                </td>
                <td>
                    <Button text="Edit" action={this.editToggle}/>
                </td>
                </>
                }

            </>
        )
    }
}

export default CategoryListItem