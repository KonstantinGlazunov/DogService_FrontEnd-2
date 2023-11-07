/* eslint-disable prettier/prettier */
import { useCallback } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/auth/selectors';
// eslint-disable-next-line import/no-unresolved
import styles from './Username.module.css';

function Username(): JSX.Element {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const user = useAppSelector(selectUser);

	return (
		// <>{!user ? <Navin /> : <Navout />}</>
		<div className={styles.username}>
			<h3>Hallo, {user?.userName}</h3>
		</div>
	);
}

export default Username;
