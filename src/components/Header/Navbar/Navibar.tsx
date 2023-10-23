
import { Button, Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Authorization from '../Authorization/Autorization';

function Navibar() : JSX.Element{
	return (
		<>
		<Navbar className={styles.backgraund}  expand="lg">
			<Container className={styles.cont}>
				<Navbar.Brand as={Link} to="/" className={styles.logo}><h1>Dogs Services</h1></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/" >Home</Nav.Link>
						<Nav.Link as={Link} to="/about">About</Nav.Link>
						<Nav.Link as={Link} to="/contact">Contact</Nav.Link>           
					</Nav>
					<Authorization />
				</Navbar.Collapse>
			</Container>
		</Navbar>
		</>
	);
}

export default Navibar;
