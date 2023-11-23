/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import styles from '../Admin.module.css';
//import ButtonsClinic from '../Clinics/ButtonsClinic';
import ButtonsKennel from './ButtonsKennel';


const KenelsOperatons = (): JSX.Element => {
	return (
		<div className={styles.cont}>
			<h1>Perationen mit Kliniken</h1>
			<ButtonsKennel/>
		</div>
	);
};
export default KenelsOperatons;
