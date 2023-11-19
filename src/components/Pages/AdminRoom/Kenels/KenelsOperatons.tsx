/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import styles from '../Admin.module.css';
import ButtonsClinic from '../Clinics/ButtonsClinic';


const KenelsOperatons = (): JSX.Element => {
	return (
		<div className={styles.cont}>
			<h1>Perationen mit Kliniken</h1>
			<ButtonsClinic />
		</div>
	);
};
export default KenelsOperatons;
