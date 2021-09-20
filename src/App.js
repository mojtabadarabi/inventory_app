import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Layout from "./components/Layout/Layout";
import Products from "./components/Products/Products";
import SearchBox from "./components/SearchBox/SearchBox";
const { default: MaingPage } = require("./components/MainPage/MaingPage");
  
function App() {

  const [products, setproducts] = useState([])
  const [prodcutsGroup, setprodcutsGroup] = useState([])
  const [searchBox, setsearchBox] = useState(false)
  const [searchResaultList, setsearchResaultList] = useState([])
  useEffect(() => {
    const localProductsList=JSON.parse(localStorage.getItem('products'))
    const localProductsGroupList=JSON.parse(localStorage.getItem('productsGroup'))
    if (!!localProductsList&&localProductsGroupList) {
      setproducts(localProductsList)
      setprodcutsGroup(localProductsGroupList)
    }
}, [])
function removeProdcutsHandler(product) {
  const filteredList = products.filter(p=>p.id!==product.id)
  setproducts(filteredList)
  localStorage.setItem('products',JSON.stringify(filteredList))
}
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact render={()=><MaingPage products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup} searchBox={searchBox} setsearchBox={setsearchBox} />}/>
          <Route path='/search' render={()=><SearchBox products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} searchResaultList={searchResaultList} setsearchResaultList={setsearchResaultList}/>}/>
          <Route path='/products' render={()=>(<Products products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup} removeProdcutsHandler={removeProdcutsHandler}/>)}/>
          

        </Switch>
        <ToastContainer />

      </Layout>
    
    </BrowserRouter>
  );
}

export default App;
