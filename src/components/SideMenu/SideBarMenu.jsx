import React from 'react'
import style from './SideBarMenu.module.css'
import { FaCreativeCommonsNd } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaBlind } from "react-icons/fa";
import { FaCommentsDollar } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { Link } from 'react-router-dom';


function SideBarMenu() {
    return (
        <nav className={style.sideMenu}>
            <ul>
                <Link to='/' className={style.button}>
                    <li >
                        <FaCreativeCommonsNd className={style.icon}/>
                        داشبورد
                    </li>
                </Link>
                <Link to='/products' className={style.button}>
                    <li >
                        <FaProductHunt className={style.icon}/>
                        محصولات
                    </li>
                </Link>
                <Link to='/search' className={style.button}>
                    <li >
                        <FaInbox className={style.icon}/>
                        جستجو
                    </li>
                </Link>
                <Link to='/search' className={style.button}>
                    <li >
                    <FaCommentsDollar className={style.icon}/>
                    مشتری ها
                    </li>
                </Link>
                <Link to='/search' className={style.button}>
                    <li >
                    <FaBlind className={style.icon}/>
                    راهنمای سامانه 
                    </li>
                </Link>
                <Link to='/search' className={style.button}>
                    <li >
                    <FaCog className={style.icon}/>
                    تنظیمات
                    </li>
                </Link>
               
            </ul>
        </nav>
    )
}

export default SideBarMenu
