import React from 'react'
import style from './accountMenu.module.css'
import DropDownMenu from './DropDownMenu'

function Notification({className,isOpenMenu,setOpenMenu}) {
    return (
        <DropDownMenu className={className} notificationStyle={'notification'} isOpenMenu={isOpenMenu} setOpenMenu={setOpenMenu}>
             <li className={style.underLine} >
                    <div className={style.infoContainer}>
                        <span style={{fontWeight:"200"}}> اعلان شماره 1</span>
                        <span style={{fontWeight:"200"}}>متن اعلان در اینجا قرار گرفته میشود پس از آن اطلاع داشته باشید </span>
                    </div>
                </li>
             <li className={style.underLine} >
                    <div className={style.infoContainer}>
                        <span style={{fontWeight:"200"}}> اعلان شماره 2</span>
                        <span style={{fontWeight:"200"}}>متن اعلان در اینجا قرار گرفته میشود پس از آن اطلاع داشته باشید </span>
                    </div>
                </li>
             <li className={style.underLine} >
                    <div className={style.infoContainer}>
                        <span style={{fontWeight:"200"}}> اعلان شماره 3</span>
                        <span style={{fontWeight:"200"}}>متن اعلان در اینجا قرار گرفته میشود پس از آن اطلاع داشته باشید </span>
                    </div>
                </li>
        </DropDownMenu>
    )
}

export default Notification
