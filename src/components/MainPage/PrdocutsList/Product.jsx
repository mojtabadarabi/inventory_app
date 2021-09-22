import React from 'react'
import style from './ProductsList.module.css'

function Product({product,removeProdcutsHandler}) {
    return (
        <tr>
            <td data-label='محصول'>{product.name}</td>
            <td data-label='شرکت'>{product.company}</td>
            <td data-label='موجودی'>{product.inventory}</td>
            <td data-label='تاریخ ثبت'>{product.date}</td>
            <td data-label='دسته بندی'>{product.grouping}</td>
            <td >
                <button  className={`${style.button} ${style.changeBtn}`}>ویرایش</button>
                <button onClick={()=>removeProdcutsHandler(product)} className={`${style.button} ${style.removeBtn}`}>حذف</button>
            </td>
        </tr>
    )
}

export default Product
