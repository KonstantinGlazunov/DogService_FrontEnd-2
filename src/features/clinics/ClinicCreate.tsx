/* eslint-disable react/react-in-jsx-scope */
import { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createClinic } from './clinicsSlice';
import s from '../Features.module.css';

export default function ClinicCreate({
	setShowCreateForm,
}: {
	setShowCreateForm: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
	const [name, setName] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [webSite, setWebSite] = useState<string>('');
	const [country, setCountry] = useState<string>('');
	const [clinicCity, setClinicCity] = useState<string>('');
	const [postCode, setPostCode] = useState<string>('');
	const [address, setAddress] = useState<string>('');
	const [telephoneNumber, setTelephoneNumber] = useState<string>('');
	const [error, setError] = useState<string>('');
	const [successMessage, setSuccessMessage] = useState('');

	const dispatch = useAppDispatch();

	function validateInputs(): boolean {
		if (name.trim() === '') {
			setError('Name could not be empty');
			return false;
		}
		if (description.trim() === '') {
			setError('Description could not be empty');
			return false;
		}
		if (webSite.trim() === '') {
			setError('Website could not be empty');
			return false;
		}
		if (country.trim() === '') {
			setError('Country could not be empty');
			return false;
		}
		if (clinicCity.trim() === '') {
			setError('City could not be empty');
			return false;
		}
		if (postCode.trim() === '') {
			setError('Post code could not be empty');
			return false;
		}
		if (address.trim() === '') {
			setError('Address could not be empty');
			return false;
		}
		if (telephoneNumber.trim() === '') {
			setError('Telephone number could not be empty');
			return false;
		}
		return true;
	}
	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		if (validateInputs()) {
			dispatch(
				createClinic({
					name,
					description,
					webSite,
					country,
					clinicCity,
					postCode,
					address,
					telephoneNumber,
				})
			).then(() => {
				setSuccessMessage('Clinic was successfully created');
				setName('');
				setDescription('');
				setWebSite('');
				setCountry('');
				setClinicCity('');
				setPostCode('');
				setAddress('');
				setTelephoneNumber('');
				setShowCreateForm(false);
			});
		}
	}

	useEffect(() => {
		if (successMessage) {
			const timer = setTimeout(() => {
				setSuccessMessage('');
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [successMessage]);

	return (
		<div className={s.addedNew}>
			<h1>Add new clinic</h1>
			<form onSubmit={handleSubmit}>
				{error && <p>{error}</p>}
				<input
					type="text"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<input
					type="text"
					placeholder="webSite"
					value={webSite}
					onChange={(e) => setWebSite(e.target.value)}
				/>
				<input
					type="text"
					placeholder="country"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
				/>
				<input
					type="text"
					placeholder="clinicCity"
					value={clinicCity}
					onChange={(e) => setClinicCity(e.target.value)}
				/>
				<input
					type="text"
					placeholder="postCode"
					value={postCode}
					onChange={(e) => setPostCode(e.target.value)}
				/>
				<input
					type="text"
					placeholder="address"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
				<input
					type="text"
					placeholder="telephoneNumber"
					value={telephoneNumber}
					onChange={(e) => setTelephoneNumber(e.target.value)}
				/>
				<button type="submit">Create new clinic</button>
				<div> {successMessage} </div>
			</form>
		</div>
	);
}
