import { useState, FormEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { loadKennelsByCity } from './kennelsSlice';

export default function FindKennelForm(): JSX.Element {
	const [city, setCity] = useState<string>('');
	const dispatch = useAppDispatch();
	function search(e: FormEvent): void {
		e.preventDefault();
		dispatch(loadKennelsByCity(city));
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
				<button type="submit">Find kennels</button>
			</form>
		</div>
	);
}
