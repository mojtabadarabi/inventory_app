import { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import { ToastContainer } from 'react-toastify';
import { Route, Switch, withRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ProductsList from "./components/MainPage/PrdocutsList/ProductsList";
import SearchBox from "./components/SearchBox/SearchBox";
import EdditProducts from "./components/Products/EdditProducts";
import AddProducts from "./components/Products/AddProducts";
import AddProductsGroup from "./components/Products/AddProductsGroup";
import Products from "./components/Products/Products";
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
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact render={()=><MaingPage products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup} searchBox={searchBox} setsearchBox={setsearchBox} />}/>
          <Route path='/search' render={()=><SearchBox products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} searchResaultList={searchResaultList} setsearchResaultList={setsearchResaultList}/>}/>
          <Route path='/products' render={()=>(<Products products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup} />)}/>
          

        </Switch>
        <ToastContainer />

      </Layout>
    
    </BrowserRouter>
  );
}

export default App;
