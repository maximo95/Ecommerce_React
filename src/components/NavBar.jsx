import './NavBar.css'
import logo_para_html_cafe from  '../assets/logo_para_html_cafe.png'
import CartWidget from './CartWidget'

function Navbar () {
    return (
    <>
    <nav className='navegador'>
    <div>
    <img src={logo_para_html_cafe} alt="logo del ecommerce" className='imagenLogo' />
    </div>
    <div >
    <a href="#">Inicio</a>
    <a href="#">Sobre nosotros</a>
    <a href="#" className='linkNav'>Contacto</a>
    <CartWidget/>
    </div>
    </nav>
    </>
    )
}

export default Navbar