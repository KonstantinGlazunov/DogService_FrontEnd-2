import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectClinics } from './selector';
import { deleteClinic, loadClinics } from './clinicsSlice';

export default function ClinicsList(): JSX.Element {
	const clinics = useAppSelector(selectClinics);
	const dispatch = useAppDispatch();
	const [showList, setShowList] = useState(false);

	const handleClick = (): void => {
		dispatch(loadClinics());
		setShowList(true);
	};

	return (
		<div>
			<button type="submit" onClick={handleClick}>
				Show all clinics
			</button>
			<ul>
				{clinics.map((clinic) => (
					<li key={String(clinic.id)}>
						<div>{clinic.name}</div>
						<div>{clinic.description}</div>
						<div>{clinic.webSite}</div>
						<div>{clinic.country}</div>
						<div>{clinic.clinicCity}</div>
						<div>{clinic.postCode}</div>
						<div>{clinic.address}</div>
						<div>{clinic.telephoneNumber}</div>
						<button type="button" onClick={() => dispatch(deleteClinic(clinic.id))}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
