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
                    <FaCreativeCommonsNd/>
                    <a href="#">داشبورد</a>
                </li>
                <li >
                    <FaInbox/>
                    <a href="#">صندوق</a>
                </li>
                <li >
                    <FaProductHunt/>
                    <a href="#">محصولات</a>
                </li>
                <li >
                    <FaCommentsDollar/>
                    <a href="#">مشتری ها</a>
                </li>
                <li >
                    <FaBlind/>
                    <a href="#">راهنمای سامانه </a>
                </li>
                <li >
                    <FaCog/>
                    <a href="#">تنظیمات</a>
                </li>
               
                
            </ul>
        </nav>
    )
}

export default SideBarMenu
