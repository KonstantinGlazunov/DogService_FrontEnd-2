/* eslint-disable react/react-in-jsx-scope */

import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import DogsittersList from './DogsittersList';
import { loadDogsitter, loadDogsitters } from '../../../../features/dogsitters/dogsittersSlice';

import s from './DogsittersList.module.css';

export default function ButtonsUsers(): JSX.Element {
	const [toggleStart, setToggleStart] = useState(false);
	const [inputValue, setInputValue] = useState<string>('');
	const [error, setError] = useState<string>(''); // new error condition
	const dispatch = useAppDispatch();
	
	function handleGetAllSittersButton(): void {
		dispatch(loadDogsitters());
		setToggleStart(true);
	}
	
	function processInput(inputValue: string):string {
		const digitRegex = /^\d{1,5}$/; // 5 digit limit
		if (digitRegex.test(inputValue)) {
			return inputValue ;
		} else {
			setError('Bitte geben Sie nur Zahlen');
			return '';
		}
	}



	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		//push-button function

		const id: number =  parseInt(processInput(inputValue),10);
		if (!isNaN(id)) {
			dispatch(loadDogsitter(id));
		} else {
			// Обработка случая, когда преобразование не удалось
			console.error('Invalid input value, cannot convert to a number.');
		}
		
		dispatch(
			loadDogsitter(id)
		);
		e.preventDefault(); //so it doesn't go to the next page.
		setToggleStart(true);
		}

	

	return (
		<div className={s.container}>
			<section id={s.mainSection}>
				<div className={s.allSitters}>
					<button onClick={handleGetAllSittersButton} className="btn btn-primary">
						Get all sitters
					</button>
				</div>

				{/* form begin */}
				<form className={s.searchSitters} onSubmit={handleSubmit}>
					<div className={s.selectDate}>
							<input
								type="text"
								className={`form-control ${error ? 'is-invalid' : ''}`}
								placeholder=" id"
								name="plz-or-city"
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								required
							/>
							{error && <div className="invalid-feedback">{error}</div>}
						
					</div>

					<div className={s.applySelect}>
						<button type="submit" className="btn btn-primary">
							Get sitter
						</button>
					</div>
				</form>
				{/*end form*/}
			</section>
			{/* SITTER LIST */}
			{toggleStart && <DogsittersList />}
			{/* Other content dogSitters page */}
		</div>
	);
}
