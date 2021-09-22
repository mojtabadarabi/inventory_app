import React from 'react'
import style from './accountMenu.module.css'
import avatar from '../Navbar/img.png'
import DropDownMenu from './DropDownMenu'

function AccountMenu({className,isOpenMenu,setOpenMenu}) {
    return (
        <DropDownMenu className={className} isOpenMenu={isOpenMenu} setOpenMenu={setOpenMenu}>
             <li className={style.underLine}>
                    <div className={style.infoContainer}>
                        <span>مجتبی دارابی</span>
                        <span>mj.darabi113@gmail.com</span>
                    </div>
                    <img src={avatar} alt="avatar" className={style.avatar}/>
                </li>
                <li className={style.exitBtn}>
                    <div className={style.infoContainer}>
                        <button className={style.button}>خروج</button>
                    </div>
                    
                </li>
        </DropDownMenu>
    )
}

export default AccountMenu
