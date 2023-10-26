import { NavBar } from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./main";
import { CartWidget } from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



export const App = () => {
  return (
    <>
      <h2>Mi Tienda</h2>
      <NavBar/>
      <ItemListContainer/>
    </>
    
  );
};
