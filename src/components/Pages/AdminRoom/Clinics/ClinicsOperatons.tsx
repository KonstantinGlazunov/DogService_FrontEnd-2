import React from 'react'
import styles from '../Admin.module.css';
import ButtonsClinic from './ButtonsClinic';

const ClinicsOperatons = (): JSX.Element => {
	return (
		<div className={styles.cont}>
			<h1>Операции с клиниками</h1>
			<ButtonsClinic />
		</div>
	);
};
export default ClinicsOperatons;
