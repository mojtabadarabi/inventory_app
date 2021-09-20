import React from 'react';
import { BsFillBackspaceReverseFill } from "react-icons/bs";
import style from './products.module.css';

function ProductsGroup({prodcutsGroup,setprodcutsGroup}) {
    function removeGroupHandler(group) {
        const filteredGroup = prodcutsGroup.filter(groupListName=>groupListName!==group)
        setprodcutsGroup(filteredGroup)
        localStorage.setItem('productsGroup',JSON.stringify(filteredGroup))
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
