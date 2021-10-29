import React, { Component } from "react"
import api from "../../Api/api.config"
import ButtonButton from "../ButtonButton"

class TransactionListItem extends Component {
    state = {
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        description: this.props.description,
        type: this.props.type,
        group: this.props.group,
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
                        <td><input type="text" name="description" value={this.state.description} onChange={this.handleInput}/></td>
                        <td><label htmlFor="types">Choose transaction type:</label>
                            <select
                                id="types"
                                name="type"
                                onChange={this.handleInput}
                                value={this.state.type}
                                >
                                <option disabled defaultValue ></option>
                                <option value="Income">Income</option>
                                <option value="Expenditure">Expenditure</option>
                                <option value="Savings">Savings</option>
                            </select>
                        </td>
                        <td><input type="text" name="group" value={this.state.group} onChange={this.handleInput}/></td>
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
                        <td>{new Date(this.props.startDate).toLocaleDateString(`pt-BR`,`UTC`)}</td>
                        <td>{new Date(this.props.endDate).toLocaleDateString(`pt-BR`,`UTC`)}</td>
                        <td>{this.props.description}</td>
                        <td>{this.props.type}</td>
                        <td>{this.props.group}</td>
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