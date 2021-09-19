import React from 'react'
import AddProducts from '../Products/AddProducts'
import AddProductsGroup from '../Products/AddProductsGroup'
import EdditProducts from '../Products/EdditProducts'
import style from './MainPage.module.css'
import PageHeader from './PageHeader/PageHeader'
import ProductsList from './PrdocutsList/ProductsList'

function MaingPage({products,setproducts,prodcutsGroup,setprodcutsGroup,searchBox,setsearchBox}) {
    return (
        <section className={style.section}>

            <PageHeader/>

        </section>
    )
}

export default MaingPage
