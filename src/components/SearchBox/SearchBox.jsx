import React, { useState } from 'react'
import { toast } from 'react-toastify'
import ProductsList from '../MainPage/PrdocutsList/ProductsList'
import style from './searchBox.module.css'

function SearchBox({products,prodcutsGroup,searchResaultList,setsearchResaultList}) {

    const [prodcutName, setprodcutName] = useState('')
    const [productCompany, setproductCompany] = useState('')
    const [productGrouping, setproductGrouping] = useState('')

    function submitSearchProductHandler(e) {
        e.preventDefault()
        if (((prodcutName!=='')&&(prodcutName!==' '))||((productCompany!=='')&&(productCompany!==' '))||((productGrouping!=='')&&(productGrouping!==' '))) {
            const resaultArray=products.filter((p) =>  (!!prodcutName?p.name ===prodcutName:true)&&(!!productCompany?p.company === productCompany:true)&& (!!productGrouping?p.grouping ===productGrouping:true));
            
            setsearchResaultList(resaultArray)
            
        }
        else{
            toast.error('لطفا حداقل یک فیلد وارد کنید', {
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
        <React.Fragment>
            <form name='form' className={`${style.addForm} ${style.searchForm}`} onSubmit={(e)=>submitSearchProductHandler(e)}>
                <label htmlFor="form">  جستجوی محصول   </label>
                <input type="text" value={prodcutName} onChange={(e)=>setprodcutName(e.target.value)} placeholder='نام محصول' className={style.inputTxt}/>
                <input type="text" value={productCompany} onChange={(e)=>setproductCompany(e.target.value)} placeholder='شرکت محصول' className={style.inputTxt}/>
                <select className={style.inputTxt} type="text" value={productGrouping} onChange={(e)=>setproductGrouping(e.target.value)}>
                    <option value="default" hidden>  گروه محصول</option>
                    {
                        prodcutsGroup.map((group,index)=>(
                            <option key={index} value={group}>{group}</option>
                        ))
                    }
                      
                </select>
                <button type="submit" className={style.button}>جستجوی محصول</button>
            </form>
            <ProductsList products={searchResaultList} />

        </React.Fragment>
    )
}

export default SearchBox
