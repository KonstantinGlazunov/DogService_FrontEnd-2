/* eslint-disable react/react-in-jsx-scope */

import { useAppSelector } from '../../app/hooks';
import { selectDogsitters } from './selectors';
import s from './css/DogsittersList.module.css';
import { useState } from 'react';

export default function DogsittersList(): JSX.Element {
	const dogsitters = useAppSelector(selectDogsitters);
	const itemsPerPage = 2;
	const [currentPage, setCurrentPage] = useState<number>(1);

	const totalPages = Math.ceil(dogsitters.length / itemsPerPage);
	const indexOfLastDogSitter = currentPage * itemsPerPage;
	const indexOfFirstDogSitter = indexOfLastDogSitter - itemsPerPage;
	const currentDogSitters = dogsitters.slice(indexOfFirstDogSitter, indexOfLastDogSitter);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};

	if (dogsitters.length === 0) {
		return (
			<div className={s.dogsittersListContainer}>
				<div className={s.dogsitterItem}>
					<a className={s.dogsittersListTitle}>
						Leider keine Hundesitter gefunden, versuchen Sie die nächstgelegene Stadt einzugeben
						oder plz
					</a>
				</div>
			</div>
		);
	}
	return (
		<div className={s.dogsittersListContainer}>
			<h4 className={s.dogsittersListTitle}>Wir sind bereit, uns um Ihren Hund zu kümmern</h4>
			<ul className={s.dogsitterList}>
				{currentDogSitters.map((dogsitter) => (
					<li key={dogsitter.id} className={s.dogsitterItem}>
						{/*нужно сделать динамическую ссылку на страницу DogSiter*/}
						<div className={s.dogsitterData}>
							<div className={s.dogsitterName}>
								{dogsitter.firstName} {dogsitter.lastName.charAt(0)}.{''}
							</div>
							<div className={s.dogsitterInfo}>
								{dogsitter.city} {dogsitter.zip}
							</div>
							<div className={s.dogsitterInfo}>{dogsitter.email}</div>
						</div>
					</li>
				))}
			</ul>
			<div className={s.pagination}>
				<button
					className={s.paginationButton}
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Prev.
				</button>
				<span className={s.paginationPage}>{currentPage}</span>
				<button
					className={s.paginationButton}
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</div>
	);
}
