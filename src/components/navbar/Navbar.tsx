/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import { useCallback } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout } from '../../features/auth/authSlice';
import { selectUser } from '../../features/auth/selectors';
import Navin from './NavIn';
// eslint-disable-next-line import/no-unresolved
import Navout from './Navout';
import Admin from '../Pages/AdminRoom/Admin';

function aaa(): void {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const navigate = useNavigate();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const user = useAppSelector(selectUser);

	if (user?.role === 'Admin') {
		navigate('/admin');
	}
}

function Navbar(): JSX.Element {
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
		<>
			{!user?.role ? <Navin /> : <Navout />}

			{/* {user?.role ? (
				user.role === 'ADMIN' ? (
					<>
						<Navout />
						<Admin />
					</>
				) : (
					<Navin />
				)
			) : (
				<Navin />
			)} */}
		</>

		// <nav>
		// 	{!user ? (
		// 		<>
		// 			<NavLink to="/auth/login">Войти</NavLink>
		// 			<NavLink to="/auth/register">Регистрация</NavLink>
		// 			{/* <NavLink to="/auth/confirm">Конфирм</NavLink> */}
		// 		</>
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

export default Navbar;
