import React, { useState } from 'react'
import style from './NavBar.module.css'
import avatar from './img.png'
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import AccountMenu from '../AccountMenu/AccountMenu';
import Notification from '../AccountMenu/Notification';
import DropDownMenu from '../AccountMenu/DropDownMenu';

function NavBar({setOpenSideMenu}) {
    const [showAccountMenu, setshowAccountMenu] = useState(false)
    const [showNotificationMenu, setshowNotificationMenu] = useState(false)
    return (
        <nav className={style.navbar}>
            <div className={style.container}>
                <button className={style.button} onClick={()=>setshowAccountMenu(prevState=>!prevState)}>

                <img alt='avatar' src={avatar} className={style.avatar}/>
                </button>
                <AccountMenu isOpenMenu={showAccountMenu} setOpenMenu={setshowAccountMenu} className={showAccountMenu?'openMenu':'hideMenu'}/>
                <Notification isOpenMenu={showNotificationMenu} setOpenMenu={setshowNotificationMenu} className={showNotificationMenu?'openMenu':'hideMenu'} left='left:"200px !important"' />
                <div className={style.divider}></div>
                
                <button className={`${style.button} ${style.positionRelative}`} onClick={()=>setshowNotificationMenu(prevState=>!prevState)} >
                    <span className={style.badge}>3</span>
                    <FaBell className={style.icon}/>
                </button>
            </div>
            
            <div className={style.container}>
               
                <a href='/' className={`${style.button} ${style.marginY} ${style.logo}`} >
                    <div className={style.logoContainer}>
                        <span className={style.companyName}>انبار دار </span>
                        <span className={style.companyDescription}>مدیریت انبار </span>
                    </div>
                </a>
                <button className={style.button} onClick={()=>setOpenSideMenu(prevState=>!prevState)}>
                    <FaBars className={style.icon}/>
                </button>
            </div>

        </nav>
    )
}

export default NavBar
