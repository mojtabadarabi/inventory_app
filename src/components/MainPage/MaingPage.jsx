import React from 'react'
import AddProducts from '../Products/AddProducts'
import AddProductsGroup from '../Products/AddProductsGroup'
import EdditProducts from '../Products/EdditProducts'
import style from './MainPage.module.css'
import PageHeader from './PageHeader/PageHeader'
import ProductsList from './PrdocutsList/ProductsList'

function MaingPage({products,setproducts,prodcutsGroup,setprodcutsGroup}) {
    return (
        <section className={style.section}>

            <PageHeader/>
            <EdditProducts>
                <AddProducts products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup}/>
                <AddProductsGroup prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup}/>
            </EdditProducts>
            <ProductsList products={products} setproducts={setproducts}/>
        </section>
    )
}

export default MaingPage
