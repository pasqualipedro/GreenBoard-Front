import React, { Component } from "react"
import api from "../../Api/api.config"
import ButtonButton from "../ButtonButton"

class TransactionListItem extends Component {
    state = {
        startDate: this.props.name,
        endDate: this.props.description,
        type: this.props.type,
        description: this.props.description,
        label: this.props.label,
        category: this.props.category,
        value: this.props.value,
        frequency: this.props.frequency,
        edit: false
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
    
    handleDelete = async (id) => {
        try {
            await api.transactionDelete(id);
            this.props.updatedTransactionList();
        } catch (error) {
            console.log(error)
        };
    };

    handleUpdate = async (id, payload) => {
        try {
            await api.transactionUpdate(id, payload);
            this.editToggle();
            this.props.updatedTransactionList();
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
                        <td><input type="date" name="startDate" value={this.state.startDate} onChange={this.handleInput}/></td>
                        <td><input type="date" name="endDate" value={this.state.endDate} onChange={this.handleInput}/></td>
                        <td><input type="text" name="type" value={this.state.type} onChange={this.handleInput}/></td>
                        <td><input type="text" name="description" value={this.state.description} onChange={this.handleInput}/></td>
                        <td><input type="text" name="label" value={this.state.label} onChange={this.handleInput}/></td>
                        <td><input type="text" name="category" value={this.state.category} onChange={this.handleInput}/></td>
                        <td><input type="number" name="value" value={this.state.value} onChange={this.handleInput}/></td>
                        <td><input type="text" name="frequency" value={this.state.frequency} onChange={this.handleInput}/></td>
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
                        <td>{this.props.startDate}</td>
                        <td>{this.props.endDate}</td>
                        <td>{this.props.type}</td>
                        <td>{this.props.description}</td>
                        <td>{this.props.label}</td>
                        <td>{this.props.category}</td>
                        <td>{this.props.value}</td>
                        <td>{this.props.frequency}</td>
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

export default TransactionListItem;