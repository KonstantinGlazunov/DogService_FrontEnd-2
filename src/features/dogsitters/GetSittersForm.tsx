/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import { FormEvent, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import DogsittersList from './DogsittersList';
import { loadDogsittersByCityAndSize } from './dogsittersSlice';

export default function GetSittersForm(): JSX.Element {
	const [toggleStart, setToggleStart] = useState(false); //возвращает массив - деструктуризация
	const [toggleEmpty, setToggleEmpty] = useState(false);
	const [city, setCity] = useState<string>('Berlin');
	const [zip, setZip] = useState<string>('35619');
	const [size, setSize] = useState<string>('SMALL');
	const dispatch = useAppDispatch();

	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		dispatch(loadDogsittersByCityAndSize({ city, size, zip }));
		e.preventDefault(); //что б не перерходила на следующую страницу
		setToggleStart(true);
	}

	//useAppSelector получить массив собак, если пустой то тогл2 меняем на труе.

	return (
		<div>
			<form className="auth-form" onSubmit={handleSubmit}>
				<h2>Find a dogsitter</h2>
				<h4>Where to look?</h4>
				<input
					type="text"
					className={`form-control`}
					placeholder="Your city"
					name="city"
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<input
					type="text"
					className={`form-control`}
					placeholder="Zip"
					name="zip"
					value={zip}
					onChange={(e) => setZip(e.target.value)}
				/>
				<h4>My dog's size</h4>
				<select name="size" id="size" value={size} onChange={(e) => setSize(e.target.value)}>
					<option value="A_MINI">up to 5 kg</option>
					<option value="B_SMALL">up to 10 kg</option>
					<option value="C_MIDDLE"> middle 10-20 kg</option>
					<option value="D_BIG">big 20-40 kg</option>
					<option value="E_GREAT">over 40 kg</option>
				</select>
				<button type="submit" className="btn btn-primary">
					Find dogsitters
				</button>
			</form>
			{toggleStart && <DogsittersList />}
			{/* toggle2 && div - no dogSitters */}
		</div>
	);
}
