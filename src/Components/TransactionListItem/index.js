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
        item: this.props.item,
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
                                <option value="" selected disabled hidden>transaction type</option>
                                <option value="Income">Income</option>
                                <option value="Expenditure">Expenditure</option>
                                <option value="Savings">Savings</option>
                            </select>
                        </td>
                        <td><label htmlFor="groups">Category Name:</label>
                            <select
                                id="groups"
                                name="group"
                                onChange={this.handleInput}
                                value={this.state.group}
                            >
                                <option value="" selected disabled hidden>category name</option>
                                {this.props.categoryList.map((element, index) => {
                                return <option key={index} value={element.group}>{element.group}</option>;
                                })}
                            </select>
                        </td>
                        <td><label htmlFor="groups">Category Item:</label>
                            <select
                                id="items"
                                name="item"
                                onChange={this.handleInput}
                                value={this.state.item}
                            >
                                <option value="" selected disabled hidden>category item</option>
                                {this.props.categoryList.map((element, index) => {
                                return <option key={index} value={element.item}>{element.item}</option>;
                                })}
                            </select>
                        </td>    
                        <td><input type="number" name="value" value={this.state.value} onChange={this.handleInput}/></td>
                        <td><label htmlFor="frequency">Frequency:</label>
                            <select
                                id="frequencies"
                                name="frequency"
                                onChange={this.handleInput}
                                value={this.state.frequency}
                                >
                                <option value="" selected disabled hidden>frequency</option>
                                <option value="Single Time">Single Time</option>
                                <option value="Installment">Installment</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Year">Year</option>
                                <option value="Weekdays">Weekdays</option>
                                <option value="Weekends">Weekends</option>
                                <option value="By 2 Months">By 2 Months</option>
                                <option value="By 3 Months">By 3 Months</option>
                                <option value="By 4 Months">By 4 Months</option>
                                <option value="By 6 Months">By 6 Months</option>
                            </select>
                        </td>
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
                        <td>{this.props.item}</td>
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