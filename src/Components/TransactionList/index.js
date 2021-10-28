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
                            <th>Type</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Value</th>
                            <th>Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.transactionList.map( (element, index) => {
                            return (
                                <tr key={index} >
                                    <TransactionListItem {...element} updatedTransactionList={this.props.updatedTransactionList} />                                
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
