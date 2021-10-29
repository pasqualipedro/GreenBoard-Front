import React, { Component } from "react"
import api from "../../Api/api.config"
import ButtonButton from "../ButtonButton"

class CategoryListItem extends Component {
    state = {
        item: this.props.item,
        description: this.props.description,
        type: this.props.type,
        group: this.props.group,
        budget: this.props.budget,
        edit: false
    };

    handleDelete = async (id) => {
        try {
            await api.categoryDelete(id);
            this.props.updatedCategoryList();
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
            this.props.updatedCategoryList();
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
                        <td><input type="text" name="description" value={this.state.description} onChange={this.handleInput}/></td>
                        <td><label htmlFor="types">Choose category type:</label>
                            <select
                                id="types"
                                name="type"
                                onChange={this.handleInput}
                                value={this.state.type}
                                >
                                <option disabled defaultValue ></option>
                                <option value="Income">Income</option>
                                <option value="Expenditure">Expenditure</option>
                            </select>
                        </td>    
                        <td><input type="text" name="categoryName" value={this.state.group} onChange={this.handleInput}/></td>
                        <td><input type="text" name="item" value={this.state.item} onChange={this.handleInput}/></td>
                        <td><input type="number" name="budget" value={this.state.budget} onChange={this.handleInput}/></td>
                        <td>
                            <ButtonButton text="Cancel" action={ () => { 
                                this.editToggle();
                                this.setState({...this.props})
                                }} />
                        </td>
                        <td>
                            <ButtonButton text="Save" action={ () => this.handleUpdate(this.props._id, this.state) }/>
                        </td>
                    </>)
                :  
                    (<>
                        {/**IF FALSE */}
                        <td>{this.props.description}</td>
                        <td>{this.props.type}</td>
                        <td>{this.props.group}</td>
                        <td>{this.props.item}</td>
                        <td>{this.props.budget}</td>
                        <td>
                            <ButtonButton text="Delete" action={ () => { this.handleDelete(this.props._id) }} />
                        </td>
                        <td>
                            <ButtonButton text="Edit" action={this.editToggle}/>
                        </td>
                    </>)
                }
            </>
        )
    }
};

export default CategoryListItem;