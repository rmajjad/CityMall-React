import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to='/' className='text-decoration-none text-dark fw-bold pe-5 fs-3'>City Mall</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        
                        <Link to= '/products' className='text-decoration-none text-dark fw-bold pe-5'>Products</Link>
                        <Link to= '/resturant' className='text-decoration-none text-dark fw-bold'>Resturant</Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;