import React from 'react'
import NavBar from '../Navbar/NavBar'
import SideBarMenu from '../SideMenu/SideBarMenu'
import style from './layout.module.css'

function Layout({children,OpenSideMenu,setOpenSideMenu}) {
    return (
        <div className={style.container}>
            <NavBar setOpenSideMenu={setOpenSideMenu}/>
            <section className={style.section}>
                <article className={style.article} >
                    {children}

                </article>
                <SideBarMenu OpenSideMenu={OpenSideMenu}/>
            </section>
        </div>
    )
}

export default Layout
