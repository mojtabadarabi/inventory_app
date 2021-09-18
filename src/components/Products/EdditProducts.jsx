import React from 'react'
import style from './products.module.css'

function EdditProducts({children}) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export default EdditProducts
