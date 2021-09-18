import { useState } from "react";
import Layout from "./components/Layout/Layout";
import { ToastContainer } from 'react-toastify';
const { default: MaingPage } = require("./components/MainPage/MaingPage");
  
function App() {

  const [products, setproducts] = useState([])
  const [prodcutsGroup, setprodcutsGroup] = useState([])
  return (
    <Layout>
      <MaingPage products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup}/>
      <ToastContainer />

    </Layout>
  );
}

export default App;
