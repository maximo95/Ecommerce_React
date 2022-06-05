import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";


function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer Greeting={"Bienvenidos a mi Ecommerce"} stock = {7} minimo ={1}/>
    </>
  );
}

export default App;
