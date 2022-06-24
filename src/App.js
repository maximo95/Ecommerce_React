import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import Cart from './components/Cart';
import CartContext from "./context/CartContext";



function App() {
  return (
    <>
 <CartContext>
      <BrowserRouter>
     
      <Navbar/>

      <Routes>

        {/*Todos los productos que se van a mostrar en el inicio */}
        <Route path="/" element ={<ItemListContainer/>}/>
        <Route path="/inicio" element ={<ItemListContainer/>}/>

        {/*Todos los productos de una categoria puntual segun el id proporcionado*/}
        <Route path="/categoria/:id" element ={<ItemListContainer/>}/>

        {/*Un producto puntual seg{un el id} */}
        <Route path="/item/:id" element ={<ItemDetailContainer/>}/>
        {/*<Navbar/>
        <ItemListContainer Greeting={"Bienvenidos a mi Ecommerce"} stock = {7} minimo ={1}/>
      <ItemDetailContainer/>*/}

        <Route path = "/cart" element = {<Cart/>}/>

      </Routes>

      </BrowserRouter>

  </CartContext>
    </>
  );
}

export default App;
