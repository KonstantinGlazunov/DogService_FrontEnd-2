import { useState, FormEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createKennel } from './kennelsSlice';

export default function KennelCreate(): JSX.Element {
	const [name, setName] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [webSite, setWebSite] = useState<string>('');
	const [country, setCountry] = useState<string>('');
	const [kennelCity, setKennelCity] = useState<string>('');
	const [postCode, setPostCode] = useState<string>('');
	const [address, setAddress] = useState<string>('');
	const [telephoneNumber, setTelephoneNumber] = useState<string>('');
	const [error, setError] = useState<string>('');

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
		if (kennelCity.trim() === '') {
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
				createKennel({
					name,
					description,
					webSite,
					country,
					kennelCity,
					postCode,
					address,
					telephoneNumber,
				})
			);
		}
	}

	return (
		<div>
			<h1>Add new kennel</h1>
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
					placeholder="kennelCity"
					value={kennelCity}
					onChange={(e) => setKennelCity(e.target.value)}
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
				<button type="submit">Create new kennel</button>
			</form>
		</div>
	);
}
