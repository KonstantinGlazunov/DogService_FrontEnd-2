import UserAll from './types/UserAll';
// import UserDto from './types/UserDto';

export async function getAll(): Promise<UserAll[]> {
	const res = await fetch('https://walrus-app-ie6jv.ondigitalocean.app/api/users/allUsers');
	return res.json();
}
