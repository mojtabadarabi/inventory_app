import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './products.module.css';
const persianDate = require('persian-date');

function AddProducts({products,setproducts,prodcutsGroup,setprodcutsGroup}) {

    const [prodcutName, setprodcutName] = useState('')
    const [productCompany, setproductCompany] = useState('')
    const [inventory, setinventory] = useState(1)
    const [productGrouping, setproductGrouping] = useState('')

    function submitAddProductHandler(e) {
        e.preventDefault()
        const product = {
            id:Math.ceil(Math.random()*1000),
            name:prodcutName,
            company:productCompany,
            inventory:inventory,
            grouping:productGrouping,
            date:new persianDate(new Date()).toLocale('fa').format("L")
        }
        console.log(product);
            if (prodcutName!==''&&prodcutName!==' '&&productCompany!==''&&productCompany!==' '&&inventory>0&&productGrouping!==''&&productGrouping!==' ') {
                setproducts([...products,product])
                localStorage.setItem('products',JSON.stringify([...products,product]))
                toast.success('محصول با موفقیت ثبت شد', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                setprodcutName('')
                setproductCompany('')
                setinventory(1)
                setproductGrouping('')
               
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

    return (
        <form name='form' className={style.addForm} onSubmit={(e)=>submitAddProductHandler(e)}>
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
