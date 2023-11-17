/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */

//import s from '../.Admin.module.css';

import styles from '../Admin.module.css';
import Buttons from '../Buttons';

const UsersOperatons = (): JSX.Element => {
	return (
		<div className={styles.cont}>
			<h1>Операции с юзерами</h1>
			<Buttons />
		</div>
	);
};
export default UsersOperatons;
