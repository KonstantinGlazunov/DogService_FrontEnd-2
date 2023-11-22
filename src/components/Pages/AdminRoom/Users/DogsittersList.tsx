/* eslint-disable react/react-in-jsx-scope */

import {  useAppDispatch, useAppSelector } from '../../../../app/hooks' 
import { selectDogsitters } from '../../../../features/dogsitters/selectors';
import s from './DogsittersList.module.css';
import { useState } from 'react';
import { deleteDogsitterById } from '../../../../features/dogsitters/dogsittersSlice';

export default function DogsittersList(): JSX.Element {
	const dogsitters = useAppSelector(selectDogsitters);
	const itemsPerPage = 3;
	const [currentPage, setCurrentPage] = useState<number>(1);

	const dispatch = useAppDispatch();

	const totalPages = Math.ceil(dogsitters.length / itemsPerPage);
	const indexOfLastDogSitter = currentPage * itemsPerPage;
	const indexOfFirstDogSitter = indexOfLastDogSitter - itemsPerPage;
	const currentDogSitters = dogsitters.slice(indexOfFirstDogSitter, indexOfLastDogSitter);
	
	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
	};

	function handleDelete (id:number):void {
		const result = window.confirm('Вы уверены, что хотите удалить данного догситтера?');
		if (result) {
	dispatch(deleteDogsitterById(id));
	setToggleStart(false)
		}}

	if (dogsitters.length === 0) {
		return (
			<div className={s.dogsittersListContainer}>
				<div className={s.dogsitterItem}>
					<a className={s.dogsittersListTitle}>
						Leider keine Hundesitter gefunden
					</a>
				</div>
			</div>
		);
	}
	return (
		<div className={s.dogsittersListContainer}>
			<a className={s.dogsittersListTitle}>ID | FirstName | LastName | userName City | PlZ | Size | mail  </a>
			<ul className={s.dogsitterList}>
				{currentDogSitters.map((dogsitter) => (
					<li key={dogsitter.id} className={s.dogsitterItem}>
						
						<div className={s.dogsitterData}>
					
							<div className={s.dogsitterInfo}>
							{dogsitter.id} {dogsitter.firstName} {dogsitter.lastName} {dogsitter.userName}
								{dogsitter.city} {dogsitter.zip}  {dogsitter.dogSize}  {dogsitter.email}  
								<button onClick={()=>handleDelete(dogsitter.id)} className={s.paginationButton}>delete</button>
					
							</div>
						
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



