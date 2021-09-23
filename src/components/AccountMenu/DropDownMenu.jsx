import React, {  useRef } from 'react'
import style from './accountMenu.module.css'

export default function DropDownMenu({children,className,notificationStyle,isOpenMenu,setOpenMenu}) {
    const ref = useRef()
    // useEffect(() => {
    //   function checkIfClickedOutside(e) {
        
    //     if (isOpenMenu && ref.current && !ref.current.contains(e.target)) {
    //       ref.current.className+='hideMenu';
    //       setOpenMenu(prevState=>!prevState)
    //     }
    //   }
    //   document.addEventListener("mousedown", checkIfClickedOutside)
      
    //   return () => {
    //     document.removeEventListener("mousedown", checkIfClickedOutside)
    //   }
    // }, [isOpenMenu])

    return (
        <div ref={ref} className={`${style.menuContainer} ${style[className]} ${style[notificationStyle]}`}>
            <ul>
                {children}
            </ul>
        </div>
    )
}
