import Dogsitter from './types/Dogsitter';

export async function getAll(): Promise<Dogsitter[]> {
	const res = await fetch('/api/dog-sitters');
	return res.json();
}

export async function getByCityAndSize(
	city: string,
	size: string,
	zip: string
): Promise<Dogsitter[]> {
	const queryParams: {
    city: string;
    'dog-size': string;
    zip: string;
    [key: string]: string; // Индексная сигнатура
} = {
    city: city || '',
    'dog-size': size || '',
    zip: zip || '',
};

	Object.keys(queryParams).forEach((key) => queryParams[key] === '' && delete queryParams[key]);
	const queryString = new URLSearchParams(queryParams).toString();
	const url = `/api/dog-sitters/search${queryString ? `?${queryString}` : ''}`;

	const res = await fetch(url);

	return res.json();
}
