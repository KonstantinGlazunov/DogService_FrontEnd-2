/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectClinics } from './selector';
import { deleteClinic, loadClinics } from './clinicsSlice';
import s from '../../components/Pages/Clinics/Clinics.module.css';
import ClinicEditForm from './ClinicEditForm';

export default function ClinicsList(): JSX.Element {
	const clinics = useAppSelector(selectClinics);
	const dispatch = useAppDispatch();
	// const [showList, setShowList] = useState(false);
	const [page, setPage] = useState(1);
	const itemsPerPage = 9;

	const handleClick = (): void => {
		dispatch(loadClinics());
		// setShowList(true);
	};


	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = page * itemsPerPage;
	const currentClinics = clinics.slice(startIndex, endIndex);


	return (
		<div className={s.clinicContainer}>
			<div className={s.btnList}>
				<button type="submit" onClick={handleClick} className={s.btn}>
					Show clinic list
				</button>
			</div>
			{/* {showList} */}
			<ul className={s.clinicsList}>
				{currentClinics.map((clinic) => (
					<li key={String(clinic.id)} className={s.kennelItem}>
						<div className={s.dogName}>{clinic.name}</div>
						<div>{clinic.description}</div>
						<div>{clinic.webSite}</div>
						<div>{clinic.country}</div>
						<div>{clinic.clinicCity}</div>
						<div>{clinic.postCode}</div>
						<div>{clinic.address}</div>
						<div>{clinic.telephoneNumber}</div>
						{/* <button type="button" onClick={() => dispatch(deleteClinic(clinic.id))}>
							Delete
						</button>
						<ClinicEditForm clinicId={clinic.id} />
						</button> */}
					</li>
				))}
			</ul>
			<div className={s.pagination}>
				{Array.from({ length: Math.ceil(clinics.length / itemsPerPage) }).map((_, index) => (
					<button key={index} onClick={() => setPage(index + 1)}>
						{index + 1}
					</button>
				))}
			</div>
		</div>
	);
}
