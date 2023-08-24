import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './component.css';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="LandingPageNavBar">
      <Container>
        <Navbar.Brand href="#home" className='text-white font-semibold pt-2 pb-2 ml-5 mr-5'>Blogr</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Product" id="product-dropwdown" className='font-semibold pt-2 pb-2 ml-5 mr-5'>
            <NavDropdown.Item href="#overview/1.1">Overview</NavDropdown.Item>
                <NavDropdown.Item href="#pricing/1.2">Pricing</NavDropdown.Item>
                <NavDropdown.Item href="#marketplace/1.3">Marketplace</NavDropdown.Item>
                <NavDropdown.Item href="#features/1.4">Features</NavDropdown.Item>
                <NavDropdown.Item href="#integrations/1.5">Integrations</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company" id="company-dropdown" className='font-semibold pt-2 pb-2 ml-5 mr-5'>
                <NavDropdown.Item href="#about/2.1">About</NavDropdown.Item>
                <NavDropdown.Item href="#team/2.2">Team</NavDropdown.Item>
                <NavDropdown.Item href="#blog/2.3">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#careers/2.4">Careers</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Connect" id="connect-dropwdown" className='font-semibold pt-2 pb-2 ml-5 mr-5'>
                <NavDropdown.Item href="#contact/3.1">Contact</NavDropdown.Item>
                <NavDropdown.Item href="#newsletter/3.2">Newsletter</NavDropdown.Item>
                <NavDropdown.Item href="#linkedin/3.3">LinkedIn</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#login">
                <button className='font-semibold pt-2 pb-2 pr-5 pl-5 mt-0' id='LandingPageLoginBtn'>LogIn</button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#signup">
                <button  className='font-semibold ml-5 rounded-full pt-2 pb-2 pr-7 pl-7 mt-0' id='LandingPageSignUpBtn'>SignUp</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;