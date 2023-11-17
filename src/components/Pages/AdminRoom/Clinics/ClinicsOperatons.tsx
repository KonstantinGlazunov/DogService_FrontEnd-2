/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import styles from '../Admin.module.css';
import Buttons from '../Buttons';

const ClinicsOperatons = (): JSX.Element => {
	return (
		<div className={styles.cont}>
			<h1>Операции с клиниками</h1>
			<Buttons />
		</div>
	);
};
export default ClinicsOperatons;
