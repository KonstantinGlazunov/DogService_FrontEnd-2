import { useState, FormEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { loadKennelsByCity } from './kennelsSlice';
import s from '../../components/Pages/Kennel/Kennels.module.css';

export default function FindKennelForm(): JSX.Element {
	const [city, setCity] = useState<string>('');
	const dispatch = useAppDispatch();
	function search(e: FormEvent): void {
		e.preventDefault();
		dispatch(loadKennelsByCity(city));
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
					</select>
				</div>
				<div className={s.applySelect}>
					<button className={s.btn} type="submit">
						Find kennels
					</button>
				</div>
			</form>
		</div>
	);
}
