import React from 'react'
import NavBar from '../Navbar/NavBar'
import SideBarMenu from '../SideMenu/SideBarMenu'
import style from './layout.module.css'

function Layout({children}) {
    return (
        <div>
            <NavBar/>
            <div className={style.container}>
                {children}
                <SideBarMenu/>
            </div>
        </div>
    )
}

export default Layout
