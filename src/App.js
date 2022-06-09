import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer";



function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer Greeting={"Bienvenidos a mi Ecommerce"} stock = {7} minimo ={1}/>
    <ItemDetailContainer/>
    </>
  );
}

export default App;
