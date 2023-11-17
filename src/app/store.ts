/* eslint-disable prettier/prettier */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import tasksSlice from '../features/tasks/tasksSlice';
import contactSlice from '../components/Pages/Contacts/contactSlice';
import clinicsReducer from '../features/clinics/clinicsSlice';
import kennelsReducer from '../features/kennels/kennelsSlice';
import dogsittersSlice from '../features/dogsitters/dogsittersSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		tasks: tasksSlice,
		contacts: contactSlice,
		clinics: clinicsReducer,
		kennels: kennelsReducer,
		loadDogsitters: dogsittersSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
