import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';


function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="/anasayfa" >
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="Kendi Logo"
          />
          {' '}ÇAĞAN GRUP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/anasayfa" style={{ fontWeight:'bold', color: 'white' }}>Ana Sayfa</Nav.Link>
            <Nav.Link href="/kurumsal" style={{ fontWeight:'bold',color: 'white'}}>Kurumsal</Nav.Link>
            <Nav.Link href="/subelerimiz" style={{ fontWeight:'bold',color: 'white'}}>Şubelerimiz</Nav.Link>
            <Nav.Link href="/urunler" style={{ fontWeight:'bold',color: 'white'}}>Ürünler</Nav.Link>
            <Nav.Link href="/iletisim" style={{ fontWeight:'bold',color: 'white'}}>İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;