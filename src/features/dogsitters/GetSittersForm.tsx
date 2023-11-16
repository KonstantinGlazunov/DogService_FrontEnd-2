/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import { FormEvent, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import DogsittersList from './DogsittersList';
import { loadDogsittersByCityAndSize } from './dogsittersSlice';

export default function GetSittersForm(): JSX.Element {
	const [toggleStart, setToggleStart] = useState(false);
	const [inputValue, setInputValue] = useState<string>('');
	const [size, setSize] = useState<string>('');
	const dispatch = useAppDispatch();

	function processInput(inputValue: string) {
		if (/^\d+$/.test(inputValue)) { //проверяем не цифра ли? 
			return { zip: inputValue, city: '' };
		} else {
			return { zip: '', city: inputValue };
		}
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		const processedInput = processInput(inputValue);
		const { zip: processedZip, city: processedCity } = processedInput;
console.log("ZIP: ", processedZip);
console.log("CITY: ", processedCity);
		dispatch(loadDogsittersByCityAndSize({ city: processedCity, size, zip: processedZip }));
		e.preventDefault(); //что б не перерходила на следующую страницу
		setToggleStart(true);
	}

	return (
		<div>
			<form className="auth-form" onSubmit={handleSubmit}>
				<h2>Find a dogsitter</h2>
				<h4>Where to look?</h4>
				<input
					type="text"
					className={`form-control`}
					placeholder="PLZ oder ORT"
					name="plz-or-city"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
		
				<h4>My dog's size</h4>
				<select name="size" id="size" value={size} onChange={(e) => setSize(e.target.value)}>
					<option value=" ">-</option>
					<option value="A_MINI">A_MINI</option>
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

		</div>
	);
}


