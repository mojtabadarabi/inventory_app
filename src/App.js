import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import Layout from "./components/Layout/Layout";
import Products from "./components/Products/Products";
import SearchBox from "./components/SearchBox/SearchBox";
import 'react-toastify/dist/ReactToastify.css';
const persianDate = require('persian-date');
const { default: MaingPage } = require("./components/MainPage/MaingPage");
  
function App() {

  const [products, setproducts] = useState([])
  const [prodcutsGroup, setprodcutsGroup] = useState([])
  const [searchBox, setsearchBox] = useState(false)
  const [searchResaultList, setsearchResaultList] = useState([])
  const [OpenSideMenu, setOpenSideMenu] = useState(true)

  const [prodcutName, setprodcutName] = useState('')
  const [productCompany, setproductCompany] = useState('')
  const [inventory, setinventory] = useState(1)
  const [productGrouping, setproductGrouping] = useState('')

  useEffect(() => {
    const localProductsList=JSON.parse(localStorage.getItem('products'))
    const localProductsGroupList=JSON.parse(localStorage.getItem('productsGroup'))
    if (!!localProductsList&&localProductsGroupList) {
      setproducts(localProductsList)
      setprodcutsGroup(localProductsGroupList)
    }
}, [])


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


function changeProductHandler(product) {
  setprodcutName(product.name)
  setproductCompany(product.company)
  setinventory(product.inventory)
  setproductGrouping(product.grouping)
  removeProdcutsHandler(product)
}
function removeProdcutsHandler(product) {
  const filteredList = products.filter(p=>p.id!==product.id)
  setproducts(filteredList)
  localStorage.setItem('products',JSON.stringify(filteredList))

}

  return (
    <BrowserRouter>
      <Layout OpenSideMenu={OpenSideMenu} setOpenSideMenu={setOpenSideMenu}>
        <Switch>
          <Route path='/' exact render={()=><MaingPage products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup} searchBox={searchBox} setsearchBox={setsearchBox} />}/>
          <Route path='/search' render={()=><SearchBox products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} searchResaultList={searchResaultList} setsearchResaultList={setsearchResaultList}/>}/>
          <Route path='/products' render={()=>(<Products prodcutName={prodcutName} setprodcutName={setprodcutName} productCompany={productCompany} setproductCompany={setproductCompany} inventory={inventory} setinventory={setinventory} productGrouping={productGrouping} setproductGrouping={setproductGrouping} submitAddProductHandler={submitAddProductHandler} products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup} removeProdcutsHandler={removeProdcutsHandler} changeProductHandler={changeProductHandler} />)}/>
           

        </Switch>
        <ToastContainer />

      </Layout>
    
    </BrowserRouter>
  );
}

export default App;
