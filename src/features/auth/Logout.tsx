/* eslint-disable prettier/prettier */
import { useCallback } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout } from '../../features/auth/authSlice';
import { selectUser } from '../../features/auth/selectors';
//import UserName from '../../features/auth/UserName';
import styles from './Logout.module.css';
import { Nav } from 'react-bootstrap';
const block: string = styles.qwertyblock;

const Logout = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const user = useAppSelector(selectUser);

	const handleLogout = useCallback(
		async (event: React.MouseEvent) => {
			event.preventDefault();
			const dispatchResult = await dispatch(logout());
			// if (logout.fulfilled.match(dispatchResult)) {
			// navigate('/auth/login');
			navigate('/');
			// }
		},
		[dispatch, navigate]
	);

	return (
		<div className={block}>
			<Nav>
				<Button variant="primary" className="mr-2" onClick={handleLogout}>
					Log Out
				</Button>
			</Nav>
		</div>
	);
};
export default Logout;
