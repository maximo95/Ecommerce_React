import './NavBar.css';
import logo_para_html_cafe from  '../assets/logo_para_html_cafe.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import Categories from './Categories';

function Navbar () {
    return (
    <>
    <nav className='navegador'>
    <Link to = '/'> <img src={logo_para_html_cafe} alt="logo del ecommerce" className='imagenLogo' /></Link>
    <Link to= '/inicio'>Inicio</Link>
    <Categories/>
    <Link to = '/contacto'>Contacto</Link>
    <div className='NumeroCarrito'>
    <CartWidget/>
    </div>
    </nav>
    </>
    )
}

export default Navbar