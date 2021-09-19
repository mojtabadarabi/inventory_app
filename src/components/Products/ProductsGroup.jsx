import React from 'react'
import style from './products.module.css'
import { BsFillBackspaceReverseFill } from "react-icons/bs";

function ProductsGroup({prodcutsGroup,setprodcutsGroup}) {
    function removeGroupHandler(group) {
        const filteredGroup = prodcutsGroup.filter(groupListName=>groupListName!==group)
        setprodcutsGroup(filteredGroup)
    }
    return (
        <div>
            {
                prodcutsGroup.map((group,index)=>(
                    <span className={style.groupTags} key={index}>
                        {group}
                        <button onClick={()=>removeGroupHandler(group)} className={`${style.button} ${style.tagBtn}`}>
                            <BsFillBackspaceReverseFill/>
                        </button>
                    </span>
                ))
            }
        </div>
    )
}

export default ProductsGroup
