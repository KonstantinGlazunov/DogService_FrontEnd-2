import UserAll from './types/UserAll';
import UserDto from './types/UserDto';
// import UserDto from './types/UserDto';

export async function getAll(): Promise<UserAll[]> {
	const res = await fetch('https://walrus-app-ie6jv.ondigitalocean.app/api/users/allUsers');
	return res.json();
}

export async function addDogSitter(dogLoverId: number, dogSitter: UserDto): Promise<UserAll> {
	const res = await fetch(
		'https://walrus-app-ie6jv.ondigitalocean.app/api/registerUser/${dogLoverId}/dogSitters',
		{
			method: 'POST',
			body: JSON.stringify(dogSitter),
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
	return res.json();
}
