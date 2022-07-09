import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from './components/Cart';
import CartContext from "./context/CartContext";
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import './App.css';
import Contact from './components/Contact';



function App() {
  return (
    <>
 <CartContext>
      <BrowserRouter>
     
      <NavBar/>

      <Routes>

        {/*Todos los productos que se van a mostrar en el inicio */}
        <Route path="/" element ={<ItemListContainer/>}/>
        <Route path="/inicio" element ={<ItemListContainer/>}/>

        {/*Todos los productos de una categoria puntual segun el id proporcionado*/}
        <Route path="/categoria/:id" element ={<ItemListContainer/>}/>

        {/*Un producto puntual seg{un el id} */}
        <Route path="/item/:id" element ={<ItemDetailContainer/>}/>

        <Route path = "/cart" element = {<Cart/>}/>

        <Route path="/checkout" element={<Checkout/>} />

        <Route path = "/contact" element = {<Contact/>}/>

      </Routes>

      <Footer/>

      </BrowserRouter>

  </CartContext>
    </>
  );
}

export default App;
