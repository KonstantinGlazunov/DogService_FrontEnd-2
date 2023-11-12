import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectKennels } from './selectors';
import { loadKennels, deleteKennel } from './kennelsSlice';

export default function KennelsList(): JSX.Element {
	const kennels = useAppSelector(selectKennels);
	const dispatch = useAppDispatch();
	const [showList, setShowList] = useState(false);

	const handleClick = (): void => {
		dispatch(loadKennels());
		setShowList(true);
	};

	return (
		<div>
			<button type="submit" onClick={handleClick}>
				Show all kennels
			</button>
			{showList}
			<ul>
				{kennels.map((kennel) => (
					<li key={String(kennel.id)}>
						<div>{kennel.name}</div>
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
