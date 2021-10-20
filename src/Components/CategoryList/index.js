import React, { Component } from 'react'
import CategoryListItem from '../CategoryListItem';

class CategoryList extends Component {
    
    
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Label</th>
                            <th>Budget</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map( (element, index) => {
                            return (
                                <tr key={index} >
                                    <CategoryListItem {...element} updateList={this.props.updateList} />                                
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CategoryList;
