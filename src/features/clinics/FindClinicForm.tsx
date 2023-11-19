/* eslint-disable react/react-in-jsx-scope */
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { loadClinicsByCity } from './clinicsSlice';
import s from '../../components/Pages/Clinics/Clinics.module.css';

export default function FindClinicForm(): JSX.Element {
	const [city, setCity] = useState<string>('');
	const dispatch = useAppDispatch();

	function search(e: FormEvent): void {
		e.preventDefault();
		dispatch(loadClinicsByCity(city));
	}
	return (
		<div className={s.selectDate}>
			<form onSubmit={search}>
				<div className={s.selectplz}>
					<p>City</p>
					<select value={city} onChange={(e) => setCity(e.target.value)}>
						<option value="" disabled>
							City
						</option>
						<option value="Berlin">Berlin</option>
						<option value="Hamburg">Hamburg</option>
						<option value="Dresden">Dresden</option>
					</select>
				</div>
				<div className={s.applySelect}>
					<button className={s.btn} type="submit">
						Find clinics
					</button>
				</div>
			</form>
		</div>
	);
}
