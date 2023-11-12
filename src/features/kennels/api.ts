import KennelDto from './KennelDto';
import Kennel from './types/Kennel';

export async function getAll(): Promise<Kennel[]> {
	const res = await fetch('http://localhost:8080/api/kennels');
	return res.json();
}

export async function getByCity(city: string): Promise<Kennel[]> {
	const res = await fetch(`http://localhost:8080/api/kennels/byCities?city=${city}`);
	return res.json();
}

export async function deleteKennel(id: number): Promise<Kennel> {
	const res = await fetch(`http://localhost:8080/api/kennels/${id}`, {
		method: 'DELETE',
	});
	return res.json();
}

export async function createKennel(kennel: KennelDto): Promise<Kennel> {
	const res = await fetch(`http://localhost:8080/api/kennels`, {
		method: 'POST',
		body: JSON.stringify(kennel),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return res.json();
}
