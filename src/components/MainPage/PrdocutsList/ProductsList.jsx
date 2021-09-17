import React, { useState } from 'react'
import style from './ProductsList.module.css'
import Product from './Product'

function ProductsList() {
    const [products, setproducts] = useState([
        {
            id:0,
            name:"ماست",
            company:"سون",
            grouping:'لبنیات',
            inventory:"5 بسته",

        },
        {
            id:1,
            name:"برنج",
            company:"طبیعت",
            grouping:'مواد غذایی',
            inventory:"60 کیلو",

        },
        {
            id:2,
            name:"کیک شکلاتی",
            company:"تافی",
            grouping:'کیک',
            inventory:"3بسته",

        },
        {
            id:3,
            name:"نوشابه انرژی زا",
            company:"night wolf",
            grouping:'نوشیدنی',
            inventory:"150 عدد",

        },
       
    ])
    return (
        <article className={style.container}>
            <div className={style.tableHeader}>
                <span>
                جدول محصولات موجود
                </span>
                <div>
                    <select defaultValue='default' className={style.filterList}>
                        <option value="default" hidden>دسته بندی در محصولات</option>
                        <option value="name" className={style.filterOption}>بر اساس نام</option>
                        <option value="company" className={style.filterOption}>بر اساس نام شزکت</option>
                        <option value="count" className={style.filterOption}>بر اساس تعداد موجودی</option>
                    </select>
                </div>
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