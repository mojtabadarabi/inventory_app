import React from 'react'
import style from './SideBarMenu.module.css'
import { FaCreativeCommonsNd } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaBlind } from "react-icons/fa";
import { FaCommentsDollar } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";


function SideBarMenu() {
    return (
        <nav className={style.sideMenu}>
            <ul>
                <li >
                    <button className={style.button}>
                    <FaCreativeCommonsNd className={style.icon}/>
                    داشبورد
                    </button>
                </li>
                <li >
                    <button className={style.button}>
                    <FaInbox className={style.icon}/>
                    صندوق
                    </button>
                </li>
                <li >
                    <button className={style.button}>
                    <FaProductHunt className={style.icon}/>
                    محصولات
                    </button>
                </li>
                <li >
                    <button className={style.button}>
                    <FaCommentsDollar className={style.icon}/>
                    مشتری ها
                    </button>
                </li>
                <li >
                    <button className={style.button}>
                    <FaBlind className={style.icon}/>
                    راهنمای سامانه 
                    </button>
                </li>
                <li >
                    <button className={style.button}>
                    <FaCog className={style.icon}/>
                    تنظیمات
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default SideBarMenu
