import React, { useState } from 'react'
import { toast } from 'react-toastify'
import style from './products.module.css'

function AddProductsGroup({prodcutsGroup,setprodcutsGroup}) {
    const [newGroup, setnewGroup] = useState('')

    function submitNewGroupHandler(e) {
        e.preventDefault()
        const exist =prodcutsGroup.findIndex(group=>group===newGroup)
        if (!!exist) {
            if (newGroup!==''&&newGroup!==' ') {
                setprodcutsGroup([...prodcutsGroup,newGroup])
                toast.success('گروه بندی با موفقیت ثبت شد', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                setnewGroup('')
            }
            else{
                toast.error('لطفا فیلد ها را با دقت پر کنید', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
            
        }
        else{
            toast.error('گروه بندی وجود دارد', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }
    return (
        <form name='form' className={style.addForm} onSubmit={(e)=>submitNewGroupHandler(e)}>
            <label htmlFor="form">  افزودن گروه بندی جدید</label>
            <input type="text" placeholder='گروه محصول' value={newGroup} onChange={(e)=>setnewGroup(e.target.value)} className={style.inputTxt}/>
            <button type="submit" className={style.button} >افزودن گروه</button>
        </form>
    )
}

export default AddProductsGroup
