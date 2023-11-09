import Clinic from './types/Clinic';

export async function getAll(): Promise<Clinic[]> {
	const res = await fetch('http://localhost:8080/api/clinics');
	return res.json();
}
