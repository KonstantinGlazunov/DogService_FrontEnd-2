/* eslint-disable react/react-in-jsx-scope */
import { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { updateKennel } from './kennelsSlice';

export default function KennelEditForm(props: { kennelId: number }): JSX.Element {
	const { kennelId } = props;
	const [name, setName] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [webSite, setWebSite] = useState<string>('');
	const [country, setCountry] = useState<string>('');
	const [kennelCity, setKennelCity] = useState<string>('');
	const [postCode, setPostCode] = useState<string>('');
	const [address, setAddress] = useState<string>('');
	const [telephoneNumber, setTelephoneNumber] = useState<string>('');
	const dispatch = useAppDispatch();
	const [error, setError] = useState<string>('');
	const [successMessage, setSuccessMessage] = useState('');
	const [showForm, setShowForm] = useState(false);

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
				updateKennel({
					id: kennelId,
					kennel: {
						name,
						description,
						webSite,
						country,
						kennelCity,
						postCode,
						address,
						telephoneNumber,
					},
				})
			).then(() => {
				setSuccessMessage('Kennel was successfully updated');
				setName('');
				setDescription('');
				setWebSite('');
				setCountry('');
				setKennelCity('');
				setPostCode('');
				setAddress('');
				setTelephoneNumber('');
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

	const handleClickUpdate = (): void => {
		setShowForm(!showForm);
	};

	return (
		<div>
			<button type="submit" onClick={handleClickUpdate}>
				{showForm ? 'Schließen' : 'Actualisieren'}
			</button>
			{showForm && (
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
					<button type="submit">Änderungen speichern</button>
					<div> {successMessage} </div>
				</form>
			)}
		</div>
	);
}
