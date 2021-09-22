import React from 'react'
import ProductsList from '../MainPage/PrdocutsList/ProductsList'
import AddProducts from './AddProducts'
import AddProductsGroup from './AddProductsGroup'
import EdditProducts from './EdditProducts'
import ProductsGroup from './ProductsGroup'

function Products({setproducts,prodcutName,setprodcutName,productCompany,setproductCompany,inventory,setinventory,productGrouping,setproductGrouping,submitAddProductHandler,products,prodcutsGroup,setprodcutsGroup,removeProdcutsHandler,changeProductHandler}) {
    return (
    <EdditProducts>
        <AddProducts prodcutName={prodcutName} setprodcutName={setprodcutName} productCompany={productCompany} setproductCompany={setproductCompany} inventory={inventory} setinventory={setinventory} productGrouping={productGrouping} setproductGrouping={setproductGrouping} products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup} submitAddProductHandler={submitAddProductHandler} />
        <AddProductsGroup prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup}/>
        <ProductsGroup prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup}/>
        <ProductsList products={products} removeProdcutsHandler={removeProdcutsHandler} changeProductHandler={changeProductHandler}/>
      </EdditProducts>
    )
}

export default Products
