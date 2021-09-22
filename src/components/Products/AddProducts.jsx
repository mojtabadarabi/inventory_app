import React from 'react';
import style from './products.module.css';

function AddProducts({prodcutName,setprodcutName,productCompany,setproductCompany,inventory,setinventory,productGrouping,setproductGrouping,submitAddProductHandler,prodcutsGroup}) {


    return (
        <form name='form' className={`${style.addForm} ${style.addProducts}`} onSubmit={(e)=>submitAddProductHandler(e)}>
            <label htmlFor="form">  افزودن محصول جدید</label>
            <div>
                <input type="text" value={prodcutName} onChange={(e)=>setprodcutName(e.target.value)} placeholder='نام محصول' className={style.inputTxt}/>
                <input type="text" value={productCompany} onChange={(e)=>setproductCompany(e.target.value)} placeholder='شرکت محصول' className={style.inputTxt}/>
                <input type="number" value={inventory} onChange={(e)=>setinventory(e.target.value)} placeholder='موجودی محصول' className={style.inputTxt}/>
                <select className={style.inputTxt} type="text" value={productGrouping} onChange={(e)=>setproductGrouping(e.target.value)}>
                    <option value="default" hidden>  گروه محصول</option>
                    {
                        prodcutsGroup.map((group,index)=>(
                            <option key={index} value={group}>{group}</option>
                        ))
                    }
                    
                </select>
            </div>
            <button type="submit" className={style.button}>افزودن محصول</button>
        </form>
    )
}

export default AddProducts
