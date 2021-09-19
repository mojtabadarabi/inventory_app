import React, { useState } from 'react'
import style from './ProductsList.module.css'
import Product from './Product'
import SearchBox from '../../SearchBox/SearchBox'

function ProductsList({products}) {
    
    return (
        <article className={style.container}>
            <div className={style.tableHeader}>
                <span>
                جدول محصولات موجود
                </span>
                
            </div>
            
            <table className={style.table} >
                <thead>
                    <tr>
                        <td>محصول</td>
                        <td>شرکت</td>
                        <td>موجودی</td>
                        <td>دسته بندی</td>
                        <td>حذف</td>
                    </tr>
                </thead>
                <tbody>
                    {   
                        products.map(product=>(
                            <Product key={product.id} product={product}/>
                        ))
                    }
                </tbody>
            </table>
        </article>
    )
}

export default ProductsList
