import React, { useEffect, useRef } from 'react'
import style from './accountMenu.module.css'

export default function DropDownMenu({children,className,notificationStyle,isOpenMenu,setOpenMenu}) {
    const ref = useRef()
    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (isOpenMenu && ref.current && !ref.current.contains(e.target)) {
            // setIsMenuOpen(false)
            console.log('out side!!!');
            ref.current.className+='hideMenu'
            setOpenMenu(prevState=>!prevState)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isOpenMenu])

    return (
        <div ref={ref} className={`${style.menuContainer} ${style[className]} ${style[notificationStyle]}`}>
            <ul>
                {children}
            </ul>
        </div>
    )
}
