import React, { Component } from 'react'
import CategoryListItem from '../CategoryListItem';

class CategoryList extends Component {
    
    
    render() {
        return (
            <div style={
                {
                    height: 350,
                    overflowY: "scroll"
                }
            }>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Category Name</th>
                            <th>Item</th>
                            <th>Budget</th>
                        </tr>
                    </thead>
                        <tbody >
                            {this.props.categoryList.map( (element, index) => {
                                return (
                                    <tr key={index} >
                                        <CategoryListItem {...element} updatedCategoryList={this.props.updatedCategoryList} />                                
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
