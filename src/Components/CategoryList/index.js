import React, { Component } from 'react'
import api from '../../Api/api.config';
import Button from '../Button';
import CategoryListItem from '../CategoryListItem';

class CategoryList extends Component {
    
    

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Budget</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                    {this.props.list.map((element, index) => {
                        return (
                            <tr>
                                <CategoryListItem {...element} updateList = {this.props.updateList}/>                                
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default CategoryList