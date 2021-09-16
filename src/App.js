const { default: NavBar } = require("./components/Navbar/NavBar");
const { default: SideBarMenu } = require("./components/SideMenu/SideBarMenu");
const { default: MaingPage } = require("./components/MainPage/MaingPage");

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div style={{flexDirection:"row",display:"flex",width:"100%",height:"89vh"}}>
        <MaingPage/>
        <SideBarMenu/>
      </div>
    </div>
  );
}

export default App;
