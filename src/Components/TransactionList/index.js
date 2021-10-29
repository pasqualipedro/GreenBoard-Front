import React, { Component } from 'react'
import TransactionListItem from '../TransactionListItem';

class TransactionList extends Component {
    
    
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Input Date</th>
                            <th>End Date</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Category Name</th>
                            <th>Category Item</th>
                            <th>Value</th>
                            <th>Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.transactionList.map( (element, index) => {
                            return (
                                <tr key={index} >
                                    <TransactionListItem {...element} updatedTransactionList={this.props.updatedTransactionList} categoryList={this.props.categoryList} />                                
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TransactionList;
