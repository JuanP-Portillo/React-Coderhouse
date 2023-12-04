//--> Components
import NavBarComponent from "./components/NavbarComponent/NavbarComponent";
import ItemListContainer from "./components/ItemListContainer/ItemsListContainer";


//--> Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";



const App = () => {
  console.log("Rendering App component");

  return (
    <div className = "mainDiv" style={{width: '100vw', height: '100vh'}}>
      <div className="me-navBar-style">
        {console.log("Rendering NavBarComponent")}
        <NavBarComponent />
      </div>
      <div className="me-itemListContainer-style">
        {console.log("Rendering ItemListContainer")}
        <ItemListContainer greeting={"Buenas buenas!"} />
      </div>
    </div>
  );
};


export default App;
