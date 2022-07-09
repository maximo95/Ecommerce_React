import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo_para_html_cafe from '../assets/logo_para_html_cafe.png';
import CartWidget from './CartWidget';
import Categories from './Categories';
import './NavBar.css';

function NavBar () {

    return (
    <>
    {/*<nav className='navegador'>
    <Link to = '/'> <img src={logo_para_html_cafe} alt="logo del ecommerce" className='imagenLogo' /></Link>
    <Link to= '/inicio'>Inicio</Link>
    <Categories/>
    <Link to = '/contacto'>Contacto</Link>
    <div className='NumeroCarrito'>
    <CartWidget/>
    </div>
    </nav>*/}
        <Navbar className='navegador' expand="lg" sticky="top">
            <Container>
            <Nav>
                <Navbar.Brand as={Link} to="/">
                <img src={logo_para_html_cafe} alt="logo del ecommerce" className='imagenLogo' />
                {' '} Cofee Store
                </Navbar.Brand>
            </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link   as={Link} to="/">Inicio</Nav.Link>
                    <Categories />
                    <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>  
                </Nav>
                <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default NavBar