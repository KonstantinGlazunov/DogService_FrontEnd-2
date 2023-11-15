import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectClinics } from './selector';
import { deleteClinic, loadClinics } from './clinicsSlice';
import s from '../../components/Pages/Clinics/Clinics.module.css';

export default function ClinicsList(): JSX.Element {
	const clinics = useAppSelector(selectClinics);
	const dispatch = useAppDispatch();
	const [showList, setShowList] = useState(false);

	const handleClick = (): void => {
		dispatch(loadClinics());
		setShowList(true);
	};

	useEffect(() => {
		dispatch(loadClinics());
	}, [dispatch]);

	return (
		<div className={s.clinicContainer}>
			<div className={s.btnList}>
				<button type="submit" onClick={handleClick} className={s.btn}>
					Show clinic list
				</button>
			</div>
			{showList}
			<ul className={s.clinicsList}>
				{clinics.map((clinic) => (
					<li key={String(clinic.id)} className={s.kennelItem}>
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
