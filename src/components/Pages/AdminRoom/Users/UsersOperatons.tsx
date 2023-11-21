//import s from '../.Admin.module.css';
import React from 'react'
import styles from '../Admin.module.css';
import ButtonsUsers from './ButtonsUsers';
// import Buttons from '../Buttons';

const UsersOperatons = (): JSX.Element => {
	return (
		<div className={styles.cont}>
			<h1>Операции с юзерами</h1>
			<ButtonsUsers />
		</div>
	);
};
export default UsersOperatons;
