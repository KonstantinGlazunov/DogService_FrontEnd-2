/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { useCallback } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout } from '../../features/auth/authSlice';
import { selectUser } from '../../features/auth/selectors';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Register from '../../features/auth/Register';
import Login from '../../features/auth/Login';
import styles from './Navbar.module.css';

function Navin(): JSX.Element {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const user = useAppSelector(selectUser);

	const handleLogout = useCallback(
		async (event: React.MouseEvent) => {
			event.preventDefault();
			const dispatchResult = await dispatch(logout());
			if (logout.fulfilled.match(dispatchResult)) {
				navigate('/auth/login');
			}
		},
		[dispatch, navigate]
	);
	const container = {
		margin: 0,
	};

	return (
		// <nav>
		// 	{!user ? (
		// 	{!user ? (
		<>
			<Navbar className={styles.backgraund} expand="lg">
				<Container className={styles.cont}>
					<Navbar.Brand as={Link} to="/" className={styles.logo}>
						<h1>Dogs Services</h1>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/about">
								About
							</Nav.Link>
							<Nav.Link as={Link} to="/contact">
								Contact
							</Nav.Link>
						</Nav>
						<Login />
						<Register />
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* <NavLink to="/auth/login">Войти</NavLink>
			<NavLink to="/auth/register">Регистрация</NavLink> */}

			{/* <NavLink to="/auth/confirm">Конфирм</NavLink> */}
		</>
		// 	) : (
		// 		<>
		// 			<NavLink to="/auth/login">Войти</NavLink>
		// 			<NavLink to="/auth/register">Регистрация</NavLink>
		// 			<NavLink to="/auth/confirm">Конфирм </NavLink>
		// 			<NavLink to="" onClick={handleLogout}>
		// 				Выйти
		// 			</NavLink>
		// 			{user.email}
		// 		</>
		// 		// <UserName />
		// 	)}
		// </nav>

		// <nav>
		// 	{!user ? (
		// 		<>
		// 			<NavLink to="/auth/login">Войти</NavLink>
		// 			<NavLink to="/auth/register">Регистрация</NavLink>
		// 			{/* <NavLink to="/auth/confirm">Конфирм</NavLink> */}
		// 		</>
		// 	) : location.pathname === '/' ? (
		// 		user.role === 'ADMIN' ? (
		// 			<NavLink to="/admin/tasks">Задачи всех пользователей</NavLink>
		// 		) : (
		// 			<NavLink to="/tasks">Задачи текущего пользователя</NavLink>
		// 		)
		// 	) : (
		// 		<NavLink to="/" onClick={handleLogout}>
		// 			На главную
		// 		</NavLink>
		// 	)}

		// 	{user && (
		// 		<NavLink to="" onClick={handleLogout}>
		// 			Выйти
		// 		</NavLink>
		// 	)}
		// </nav>
	);
}

export default Navin;
