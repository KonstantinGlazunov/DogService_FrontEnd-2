import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectKennels } from './selectors';
import { loadKennels, deleteKennel } from './kennelsSlice';
import s from '../../components/Pages/Kennel/Kennels.module.css';

export default function KennelsList(): JSX.Element {
	const kennels = useAppSelector(selectKennels);
	const dispatch = useAppDispatch();
	const [showList, setShowList] = useState(false);

	const handleClick = (): void => {
		dispatch(loadKennels());
		setShowList(true);
	};
	useEffect(() => {
		dispatch(loadKennels());
	}, [dispatch]);

	return (
		<div className={s.kennelContainer}>
			<div className={s.btnList}>
				<button type="submit" onClick={handleClick} className={s.btn}>
					Swow kennels list
				</button>
			</div>
			{showList}
			<ul className={s.kennelsList}>
				{kennels.map((kennel) => (
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
					</li>
				))}
			</ul>
		</div>
	);
}
