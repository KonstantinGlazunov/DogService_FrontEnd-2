/* eslint-disable prettier/prettier */
import { useAppSelector } from '../../app/hooks';
import { selectClinics } from './selector';
import Clinic from './types/Clinic';

export default function ClinicsList(): JSX.Element {
	interface ClinicsListProps {
		clinics: Clinic[];
	}
	const clinics = useAppSelector(selectClinics);

	return (
		<div>
			<h1>Clinics list</h1>
			<ul>
				{clinics.map((clinic) => (
					<li key={String(clinic.id)}>
						<div>{clinic.name}</div>
						<div>{clinic.description}</div>
						<div>{clinic.webSite}</div>
						<div>{clinic.country}</div>
						<div>{clinic.city}</div>
						<div>{clinic.postCode}</div>
						<div>{clinic.address}</div>
						<div>{clinic.telephoneNumber}</div>
					</li>
				))}
			</ul>
		</div>
	);
}
