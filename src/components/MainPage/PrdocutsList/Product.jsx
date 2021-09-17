import React from 'react'

function Product({product}) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.company}</td>
            <td>{product.inventory}</td>
            <td>{product.grouping}</td>
            <td>
                <input type='checkbox'/>
            </td>
        </tr>
    )
}

export default Product
