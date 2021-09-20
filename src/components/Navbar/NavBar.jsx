import React from 'react'
import style from './NavBar.module.css'
import avatar from './img.png'
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function NavBar({setOpenSideMenu}) {
    return (
        <nav className={style.navbar}>
            <div className={style.container}>
                <img alt='avatar' src={avatar} className={style.avatar}/>
                <button className={style.button}>
                     کاربر  <FaAngleDoubleDown className={style.icon}/>
                </button>
                <div className={style.divider}></div>
                
                <button className={`${style.button} ${style.positionRelative}`} >
                    <span className={style.badge}>3</span>
                    <FaBell className={style.icon}/>
                </button>
            </div>
            
            <div className={style.container}>
                <form className={style.container}>
                    <button type="submit" className={style.button}>
                        <FaSearch className={style.icon}/>
                    </button>
                    <input className={style.inputText} type="text" placeholder='جستجو در انبار'/>
                </form>
                <a href='/' className={`${style.button} ${style.marginY}`} >
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
