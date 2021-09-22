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
                        <th scope="col">محصول</th>
                        <th scope="col">شرکت</th>
                        <th scope="col">موجودی</th>
                        <th scope="col">تاریخ ثبت</th>
                        <th scope="col">دسته بندی</th>
                        <th scope="col"></th>
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
