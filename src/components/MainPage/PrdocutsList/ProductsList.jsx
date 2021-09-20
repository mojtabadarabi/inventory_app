import React from 'react'
import Product from './Product'
import style from './ProductsList.module.css'

function ProductsList({products,removeProdcutsHandler}) {

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
                        <td>تاریخ ثبت</td>
                        <td>دسته بندی</td>
                        <td></td>
                    </tr>
                    
                </thead>
                <tbody>
                        {
                            products.length===0?(
                                <tr>
                                    <td colSpan="5">
                                        محصولی وجود ندارد
                                    </td>
                                </tr>
                            ):(
                                products.map(product=>(
                                    <Product key={product.id} product={product} removeProdcutsHandler={removeProdcutsHandler}/>
                                ))
                            )
                                
                            
                                
                        }
                            
                        
                </tbody>
                            
                        
                    
            </table>
        </article>
    )
}

export default ProductsList
