import './NavBar.css';
import logo_para_html_cafe from  '../assets/logo_para_html_cafe.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
    <>
    <nav className='navegador'>
    <div>
    <Link to = '/'> <img src={logo_para_html_cafe} alt="logo del ecommerce" className='imagenLogo' /></Link>
    </div>
    <div >
    <Link to= '/inicio'>Inicio</Link>
    <Link to= 'categoria/cafeteras'>Cafeteras</Link>
    {/*<a href="#">Inicio</a>
    <a href="#">Sobre nosotros</a>
    <a href="#" className='linkNav'>Contacto</a>*/}
    <Link to = 'categoria/granos'>Granos</Link>
    <Link to = '/contacto'>Contacto</Link>
    
    <CartWidget/>
    </div>
    </nav>
    </>
    )
}

export default Navbar