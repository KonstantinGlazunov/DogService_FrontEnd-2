/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/default */
import React from 'react';
import ClinicsList from '../../../features/clinics/ClinicsList';

const Clinics = (): JSX.Element => {
	return (
		<div>
			<div>
				<h1>Clinics</h1>
				<ClinicsList />
			</div>
		</div>
	);
};
export default Clinics;
