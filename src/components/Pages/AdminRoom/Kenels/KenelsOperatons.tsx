/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */

import styles from '../Admin.module.css';
import Buttons from '../Buttons';

const KenelsOperatons = (): JSX.Element => {
	return (
		<div className={styles.cont}>
			<h1>Операции с питомниками</h1>
			<Buttons />
		</div>
	);
};
export default KenelsOperatons;
