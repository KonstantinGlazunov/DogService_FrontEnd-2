import Clinic from './types/Clinic';
import ClinicDto from './types/ClinicDto';

export async function getAll(): Promise<Clinic[]> {
	const res = await fetch('https://walrus-app-ie6jv.ondigitalocean.app/api/clinics');
	return res.json();
}

export async function getByCity(city: string): Promise<Clinic[]> {
	const res = await fetch(
		`https://walrus-app-ie6jv.ondigitalocean.app/api/clinics/byCities?city=${city}`
	);
	return res.json();
}

export async function deleteClinic(id: number): Promise<Clinic> {
	const res = await fetch(`https://walrus-app-ie6jv.ondigitalocean.app/api/clinics/${id}`, {
		method: 'DELETE',
	});
	return res.json();
}

export async function createClinic(clinic: ClinicDto): Promise<Clinic> {
	const res = await fetch(`https://walrus-app-ie6jv.ondigitalocean.app/api/clinics`, {
		method: 'POST',
		body: JSON.stringify(clinic),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return res.json();
}
