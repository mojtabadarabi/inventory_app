import React from 'react'
import style from './pageHeader.module.css'
const persianDate = require('persian-date');

function PageHeader() {
    const date=new persianDate(new Date()).toLocale('fa').format("l")
    const day=new persianDate(new Date()).toLocale('fa').format("dddd")
    const month=new persianDate(new Date()).toLocale('fa').format("MMMM")
    console.log(date);
    return (
        <header className={style.header}>
            <span >خوش آمدید</span>
            <span style={{opacity:".6"}}>
                <span>{day} </span>
                <span>{month} </span>
                <span>{date} </span>  
            </span>
        </header>
    )
}

export default PageHeader
