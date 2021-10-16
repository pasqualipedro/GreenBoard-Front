import React, { Component } from 'react'
import api from '../../Api/api.config';
import Button from '../Button';

class CategoryList extends Component {
    
    handleDelete = async (id) => {
        console.log(id)
        try {
            await api.categoryDelete(id)
            this.props.updateList()
        } catch (error) {
            console.log(error)
        }
    }


    handleUpdate = async (id) => {
        try {
            await api.categoryUptade(id)
            this.props.updateList()
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                    {this.props.list.map((element, index) => {
                        return (
                            <tr>
                                <td>
                                    <h4>{element.name}</h4>
                                </td>
                                <td>
                                    <h4>{element.description}</h4>
                                </td>
                                <td>
                                    <Button text = "Delete" action = {() => {this.handleDelete(element._id)}}/>
                                </td>
                                <td>
                                    <Button text = "Update" action = {() => {this.handleUpdate(element._id)}}/>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default CategoryList