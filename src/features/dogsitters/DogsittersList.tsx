/* eslint-disable react/react-in-jsx-scope */
//import { useEffect } from "react";
import { useAppSelector } from '../../app/hooks';
import { selectDogsitters } from './selectors';
//import { loadDogsitters } from "./dogsittersSlice";
import s from './css/DogsittersList.module.css';

export default function DogsittersList() {
	const dogsitters = useAppSelector(selectDogsitters);

	return (
		<div className={s.dogsittersListContainer}>
			<h4 className={s.dogsittersListTitle}>DogSittersList</h4>
			<ul className={s.dogsitterList}>
				{dogsitters.map((dogsitter) => (
					<li key={dogsitter.id} className={s.dogsitterItem}>
						{/*нужно сделать динамическую ссылку на страницу DogSiter*/}
              <div className={s.dogsitterData}>
						<div className={s.dogsitterName}>
							{dogsitter.firstName} {dogsitter.lastName.charAt(0)}.{''}
						</div>
						<div className={s.dogsitterInfo}>{dogsitter.city}</div>
						<div className={s.dogsitterInfo}>{dogsitter.zip}</div>
						<div className={s.dogsitterInfo}>{dogsitter.dogSize}</div>
        </div>
					</li>
				))}
			</ul>
		</div>
	);
}
