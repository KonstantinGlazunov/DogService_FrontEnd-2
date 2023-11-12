import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { loadClinicsByCity } from './clinicsSlice';

export default function FindClinicForm(): JSX.Element {
	const [city, setCity] = useState<string>('');
	const dispatch = useAppDispatch();

	function search(e: FormEvent): void {
		e.preventDefault();
		dispatch(loadClinicsByCity(city));
	}
	return (
		<div>
			<form onSubmit={search}>
				<input
					type="text"
					name="city"
					placeholder="Enter city"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<button type="submit">Find clinics</button>
			</form>
		</div>
	);
}
