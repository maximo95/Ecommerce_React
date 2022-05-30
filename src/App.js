import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";


function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer Greeting={"Bienvenidos a mi Ecommerce"}/>
    </>
  );
}

export default App;
