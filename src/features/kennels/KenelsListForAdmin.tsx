/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectKennels } from './selectors';
import { loadKennels, deleteKennel } from './kennelsSlice';
import s from '../../components/Pages/Kennel/Kennels.module.css';
import KennelEditForm from './KennelEditForm';

export default function KennelsListForAdmin(): JSX.Element {
	const kennels = useAppSelector(selectKennels);
	const dispatch = useAppDispatch();
	// const [showList, setShowList] = useState(false);

	const [page, setPage] = useState(1);
	const itemsPerPage = 9;

	const handleClick = (): void => {
		dispatch(loadKennels());
	};

	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = page * itemsPerPage;
	const currentKennels = kennels.slice(startIndex, endIndex);

	return (
		<div className={s.kennelContainer}>
			<div className={s.btnList}>
				<button type="submit" onClick={handleClick} className={s.btn}>
					Swow kennels list
				</button>
			</div>
			{/* {showList} */}
			<ul className={s.kennelsList}>
				{currentKennels.map((kennel) => (
					<li key={String(kennel.id)} className={s.kennelItem}>
						<div className={s.dogName}>{kennel.name}</div>
						<div>{kennel.description}</div>
						<div>{kennel.webSite}</div>
						<div>{kennel.country}</div>
						<div>{kennel.kennelCity}</div>
						<div>{kennel.postCode}</div>
						<div>{kennel.address}</div>
						<div>{kennel.telephoneNumber}</div>
						<button type="button" onClick={() => dispatch(deleteKennel(kennel.id))}>
							Delete
						</button>
							<KennelEditForm kennelId={kennel.id} />
					</li>
			))}
		</ul><div className={s.pagination}>
				{Array.from({ length: Math.ceil(kennels.length / itemsPerPage) }).map((_, index) => (
					<button key={index} onClick={() => setPage(index + 1)}>
						{index + 1}
					</button>
				))}
			</div>
		</div>
	);
}
