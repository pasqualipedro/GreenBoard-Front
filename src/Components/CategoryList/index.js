import React, { Component } from 'react'


class CategoryList extends Component{
    
    render(){
        return(
            <div>
                {this.props.list.map((element, index) => {
                   return(
                        <h1>{element.name}</h1>                
                   )
                })}
            </div>
        )
    }
}

export default CategoryList