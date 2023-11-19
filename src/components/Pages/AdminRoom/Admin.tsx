import React from 'react'
import styles from './Admin.module.css';
import ClinicsOperatons from './Clinics/ClinicsOperatons';
import KenelsOperatons from './Kenels/KenelsOperatons';
import UsersOperatons from './Users/UsersOperatons';

const Admin = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.admin_flex}>
				<UsersOperatons />
				<ClinicsOperatons />
				<KenelsOperatons />
			</div>
		</div>
	);
};
export default Admin;
