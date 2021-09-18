import React, { useState } from 'react'
import { toast } from 'react-toastify'
import style from './products.module.css'

function AddProductsGroup({prodcutsGroup,setprodcutsGroup}) {
    const [newGroup, setnewGroup] = useState('')

    function submitNewGroupHandler(e) {
        e.preventDefault()
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
            alert('لطفا فیلد گروه بندی را پر کنید')
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
