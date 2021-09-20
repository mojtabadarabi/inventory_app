import React from 'react'
import style from './SideBarMenu.module.css'
import { FaCreativeCommonsNd } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaBlind } from "react-icons/fa";
import { FaCommentsDollar } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

function SideBarMenu({location,OpenSideMenu}) {
    const {pathname}=location
    return (
        <nav className={`${style.sideMenu} ${!OpenSideMenu&&style.sideMenuHide}`}>
            <ul >
                <Link  to='/' className={`${style.button} ${pathname==='/'&&style.active}`}>
                    <li >
                        <FaCreativeCommonsNd  className={style.icon}/>
                        <span className={style.spanContainer}>{OpenSideMenu?'داشبورد':null}</span>
                    </li>
                </Link>
                <Link to='/products' className={`${style.button} ${pathname==='/products'&&style.active}`}>
                    <li >
                        <FaProductHunt className={style.icon}/>
                        <span className={style.spanContainer}>{OpenSideMenu?'محصولات':null}</span>
                    </li>
                </Link>
                <Link to='/search' className={`${style.button} ${pathname==='/search'&&style.active}`}>
                    <li >
                        <FaInbox className={style.icon}/>
                        <span className={style.spanContainer}>{OpenSideMenu?'جستجو':null}</span>
                    </li>
                </Link>
                <Link to='/customer' className={`${style.button} ${pathname==='/customer'&&style.active}`} >
                    <li >
                    <FaCommentsDollar className={style.icon}/>
                    <span className={style.spanContainer}>{OpenSideMenu?'مشتری ها':null}</span>
                    </li>
                </Link>
                <Link to='/help' className={`${style.button} ${pathname==='/help'&&style.active}`}>
                    <li >
                    <FaBlind className={style.icon}/>
                    <span className={style.spanContainer}>{OpenSideMenu?'راهنمای سامانه':null}</span>
                    </li>
                </Link>
                <Link to='/setting' className={`${style.button} ${pathname==='/setting'&&style.active}`}>
                    <li >
                    <FaCog className={style.icon}/>
                    <span className={style.spanContainer}>{OpenSideMenu?'تنظیمات':null}</span>
                    </li>
                </Link>
               
            </ul>
        </nav>
    )
}

export default withRouter(SideBarMenu)
