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
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((element, index) => {
                            return (
                                <tr>
                                    <CategoryListItem {...element} updateList={this.props.updateList} keys={index} />                                
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
