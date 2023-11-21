import UserAll from './UserAll';

export default interface UsersState {
	users: UserAll[];
	error?: string;
}
