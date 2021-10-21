import React, { Component } from "react"
import api from "../../Api/api.config"
import Button from "../Button"

class CategoryListItem extends Component {
    state = {
        name: this.props.name,
        description: this.props.description,
        type: this.props.type,
        label: this.props.label,
        budget: this.props.budget,
        edit: false
    };

    handleDelete = async (id) => {
        try {
            await api.categoryDelete(id);
            this.props.updateList();
        } catch (error) {
            console.log(error)
        };
    };

    editToggle = () => {
        this.setState({
            edit: !this.state.edit
        });
    }; 

    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState
        ({
            [name]: value
        });
    };

    handleUpdate = async (id, payload) => {
        try {
            await api.categoryUpdate(id, payload);
            this.editToggle();
            this.props.updateList();
        } catch (error) {
            console.log(error)
        };
    };

    render() {
        return (
            <>
                {/* CONDITIONAL RENDER */}
                {this.state.edit ? 
                    (<>
                        {/**IF TRUE*/}
                        <td><input type="text" name="name" value={this.state.name} onChange={this.handleInput}/></td>
                        <td><input type="text" name="description" value={this.state.description} onChange={this.handleInput}/></td>
                        
                        <td><input type="text" name="type" value={this.state.type} onChange={this.handleInput}/></td> {/** CONFIRMAR TAG "SELECT" */}
                        <td><input type="text" name="label" value={this.state.label} onChange={this.handleInput}/></td>
                        <td><input type="number" name="budget" value={this.state.budget} onChange={this.handleInput}/></td>
                        <td>
                            <Button text="Cancel" action={ () => { 
                                this.editToggle();
                                this.setState({...this.props})
                                }} />
                        </td>
                        <td>
                            <Button text="Save" action={ () => this.handleUpdate(this.props._id, this.state) }/>
                        </td>
                    </>)
                :  
                    (<>
                        {/**IF FALSE */}
                        <td>{this.props.name}</td>
                        <td>{this.props.description}</td>
                        <td>{this.props.type}</td>
                        <td>{this.props.label}</td>
                        <td>{this.props.budget}</td>
                        <td>
                            <Button text="Delete" action={ () => { this.handleDelete(this.props._id) }} />
                        </td>
                        <td>
                            <Button text="Edit" action={this.editToggle}/>
                        </td>
                    </>)
                }
            </>
        )
    }
};

export default CategoryListItem;