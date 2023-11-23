/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectClinics } from './selector';
import { deleteClinic, loadClinics } from './clinicsSlice';
import ClinicEditForm from './ClinicEditForm';
import s from '../Features.module.css';
import { useNavigate } from 'react-router-dom';

interface UsersListProps {
  onClose: () => void;
}


export default function ClinicsListForAdmin({ onClose }: UsersListProps): JSX.Element {
	const clinics = useAppSelector(selectClinics);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [isListOpen, setIsListOpen] = useState(false);
	// const [showList, setShowList] = useState(false);
	const [page, setPage] = useState(1);
	const itemsPerPage = 9;

	const handleClick = (): void => {
		dispatch(loadClinics());
		setIsListOpen(!isListOpen);
		// setShowList(true);
	};

	const handleClickClosed = (): void => {
    setIsListOpen(false);
    onClose();
  };
	// const handleClickClosed = (): void => {
	// 	// setIsListOpen(false);
	// 	navigate('/Admin');
	// 	console.log('test');
	// };

	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = page * itemsPerPage;
	const currentClinics = clinics.slice(startIndex, endIndex);

	useEffect(() => {
		setIsListOpen(false);
	}, [page]);

	return (
		<div className={`${s.liContainer}  ${isListOpen ? s.background : s.closed}`}>
			<div className={s.btnforlist}>
				<div className={s.btnList}>
					<button type="submit" onClick={handleClick} className={s.btn}>
						{isListOpen ? 'Скрыть список клиник' : 'Показать список клиник'}
					</button>
				</div>
				<div className={s.closeBtn}>
					<button type="submit" onClick={handleClickClosed}>
						Закрыть
					</button>
				</div>
			</div>
			{/* {showList} */}
			{isListOpen && (
				<ul className={s.lList}>
					{currentClinics.map((clinic) => (
						<li key={String(clinic.id)} className={s.liItem}>
							<div className={s.dogName}>{clinic.name}</div>
							<div>{clinic.description}</div>
							<div>{clinic.webSite}</div>
							<div>{clinic.country}</div>
							<div>{clinic.clinicCity}</div>
							<div>{clinic.postCode}</div>
							<div>{clinic.address}</div>
							<div>{clinic.telephoneNumber}</div>
							<button type="button" onClick={() => dispatch(deleteClinic(clinic.id))}>
								Удалить
							</button>
							<ClinicEditForm clinicId={clinic.id} />
						</li>
					))}
				</ul>
			)}
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
