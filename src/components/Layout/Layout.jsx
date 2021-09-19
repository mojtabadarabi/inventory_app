import React from 'react'
import NavBar from '../Navbar/NavBar'
import SideBarMenu from '../SideMenu/SideBarMenu'
import style from './layout.module.css'

function Layout({children}) {
    return (
        <div className={style.container}>
            <NavBar/>
            <section className={style.section}>
                <article className={style.article}>
                    {children}

                </article>
                <SideBarMenu/>
            </section>
        </div>
    )
}

export default Layout
