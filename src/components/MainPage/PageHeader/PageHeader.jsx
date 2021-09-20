import React from 'react'
import style from './pageHeader.module.css'

function PageHeader() {
    return (
        <header className={style.header}>
            <span >خوش آمدید</span>
            <span style={{opacity:".6"}}>جمعه شهریور 1400/06/25   </span>
        </header>
    )
}

export default PageHeader
