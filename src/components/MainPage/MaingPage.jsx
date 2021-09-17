import React from 'react'
import style from './MainPage.module.css'
import PageHeader from './PageHeader/PageHeader'
import ProductsList from './PrdocutsList/ProductsList'

function MaingPage() {
    return (
        <section className={style.section}>
            <PageHeader/>
            <ProductsList/>
        </section>
    )
}

export default MaingPage
