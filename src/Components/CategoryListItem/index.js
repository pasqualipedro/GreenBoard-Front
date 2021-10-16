import React from "react"

const CategoryListItem = ({name,description,budget}) => {
    return(
        <>
        <h3>name:{name}</h3>
        <h3>description:{description}</h3>
        <h3>budget:{budget}</h3>
        </>
    )
}

export default CategoryListItem