import UserAll from './types/UserAll';
import UserDto from './types/UserDto';
// import UserDto from './types/UserDto';

export async function getAll(): Promise<UserAll[]> {
	const res = await fetch('/api/users/allUsers');
	return res.json();
}

export async function addDogSitter(dogLoverId: number, dogSitter: UserDto): Promise<UserAll> {
	const res = await fetch('/api/registerUser/${dogLoverId}/dogSitters', {
		method: 'POST',
		body: JSON.stringify(dogSitter),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return res.json();
}
