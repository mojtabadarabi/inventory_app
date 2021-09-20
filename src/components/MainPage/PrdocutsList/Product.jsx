import React from 'react'
import style from './ProductsList.module.css'

function Product({product,removeProdcutsHandler}) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.company}</td>
            <td>{product.inventory}</td>
            <td>{product.date}</td>
            <td>{product.grouping}</td>
            <td>
                <button  className={`${style.button} ${style.changeBtn}`}>ویرایش</button>
                <button onClick={()=>removeProdcutsHandler(product)} className={`${style.button} ${style.removeBtn}`}>حذف</button>
            </td>
        </tr>
    )
}

export default Product
