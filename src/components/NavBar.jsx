import './NavBar.css';
import logo_para_html_cafe from  '../assets/logo_para_html_cafe.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
    <>
    <nav className='navegador'>
    <Link to = '/'> <img src={logo_para_html_cafe} alt="logo del ecommerce" className='imagenLogo' /></Link>
    <Link to= '/inicio'>Inicio</Link>
    <Link to= 'categoria/cafeteras'>Cafeteras</Link>
    <Link to = 'categoria/granos'>Granos</Link>
    <Link to = '/contacto'>Contacto</Link>
    <div className='NumeroCarrito'>
    <CartWidget/>
    </div>
    </nav>
    </>
    )
}

export default Navbar