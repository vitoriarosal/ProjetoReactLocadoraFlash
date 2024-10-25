import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

// Estilos inspirados nos anos 2000
const headerStyle = {
  background: 'linear-gradient(90deg, #4e54c8, #8f94fb)', // Gradiente vibrante
  fontSize: '16px',
  padding: '20px 0',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Sombras para dar destaque
  borderBottom: '3px solid #ffc107', // Linha vibrante embaixo do header
  fontFamily: "'Press Start 2P', cursive" // Fonte retrô dos anos 2000
};

const navLinkStyle = {
  color: "#fff",
  fontSize: "14px",
  marginLeft: "20px",
  textDecoration: "none",
  transition: "color 0.3s",
};

const Header = () => {
  return (
    <>
      <Navbar expand="lg" style={headerStyle} className="mb-4">
        <Container>
          <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }}>
            {/* Link da imagem da pipoca */}
            <Link href="/" passHref>
              <Image
                src="https://images.vexels.com/media/users/3/151999/isolated/preview/ef9bf8f8b4adb58f9597823a298283c4-iacute-cone-de-pipoca-doce-by-vexels.png"
                alt="Logo de Pipoca"
                width={50}
                height={50}
                className="me-2"
                style={{ cursor: 'pointer' }}
              />
            </Link>

            {/* Link do texto "Locadora FlashBack" */}
            <Link href="/inicial" passHref>
              <span style={{ color: "#fff", fontSize: "18px", cursor: 'pointer' }}>Locadora FlashBack</span>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="me-auto">
              <Nav.Link as={Link} href="/clientes" style={navLinkStyle}>Clientes</Nav.Link>
              <Nav.Link as={Link} href="/filmes" style={navLinkStyle}>Filmes</Nav.Link>
              <Nav.Link as={Link} href="/locacoes" style={navLinkStyle}>Locações</Nav.Link>
              <Nav.Link as={Link} href="/funcionarios" style={navLinkStyle}>Funcionários</Nav.Link>
              <Nav.Link as={Link} href="/fornecedores" style={navLinkStyle}>Fornecedores</Nav.Link>
              <Nav.Link as={Link} href="/dashboard" style={navLinkStyle}>Mais locados</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
