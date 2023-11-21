import { RootState } from '../../app/store';
import UserOne from './types/UserDto';

export const selectUsers = (state: RootState): UserOne[] => state.users.users;
