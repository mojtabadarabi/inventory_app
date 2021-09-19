import React from 'react'
import ProductsList from '../MainPage/PrdocutsList/ProductsList'
import AddProducts from './AddProducts'
import AddProductsGroup from './AddProductsGroup'
import EdditProducts from './EdditProducts'
import ProductsGroup from './ProductsGroup'

function Products({products,setproducts,prodcutsGroup,setprodcutsGroup}) {
    return (
    <EdditProducts>
        <AddProducts products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup}/>
        <AddProductsGroup prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup}/>
        <ProductsGroup prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup}/>
        <ProductsList products={products} />
      </EdditProducts>
    )
}

export default Products
