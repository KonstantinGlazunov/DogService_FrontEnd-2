/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { useCallback } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout } from '../../features/auth/authSlice';
import { selectUser } from '../../features/auth/selectors';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logout from '../../features/auth/Logout';
import styles from './Navbar.module.css';
import Username from './Username';

function Navout(): JSX.Element {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const user = useAppSelector(selectUser);

	const handleLogout = useCallback(
		async (event: React.MouseEvent) => {
			event.preventDefault();
			const dispatchResult = await dispatch(logout());
			if (logout.fulfilled.match(dispatchResult)) {
				// navigate('/auth/login');
				navigate('/');
			}
		},
		[dispatch, navigate]
	);
	const container = {
		margin: 0,
	};

	return (
		<Navbar className={styles.backgraund} expand="lg">
			<Container className={styles.cont}>
				<Navbar.Brand as={Link} to="/" className={styles.logo}>
					<h1>Dogs Services</h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							Heim
						</Nav.Link>
						<Nav.Link as={Link} to="/clinics">
							Clinics
						</Nav.Link>
						<Nav.Link as={Link} to="/kennels">
							Kennels
						</Nav.Link>
						<Nav.Link as={Link} to="/about">
							Um
						</Nav.Link>
						<Nav.Link as={Link} to="/contact">
							Kontakt
						</Nav.Link>
					</Nav>
					<Username />
					<Logout />
				</Navbar.Collapse>
			</Container>
		</Navbar>

		// <>
		// 	<NavLink to="/auth/login">Войти</NavLink>
		// 	<NavLink to="/auth/register">Регистрация</NavLink>
		// 	<NavLink to="/auth/confirm">Конфирм </NavLink>
		// 	<NavLink to="" onClick={handleLogout}>
		// 		Выйти
		// 	</NavLink>
		// </>
	);
}

export default Navout;
