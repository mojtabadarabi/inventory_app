import { useState } from "react";
import Layout from "./components/Layout/Layout";
const { default: MaingPage } = require("./components/MainPage/MaingPage");

function App() {

  const [products, setproducts] = useState([])
  const [prodcutsGroup, setprodcutsGroup] = useState([])
  return (
    <Layout>
      <MaingPage products={products} setproducts={setproducts} prodcutsGroup={prodcutsGroup} setprodcutsGroup={setprodcutsGroup}/>
    </Layout>
  );
}

export default App;
