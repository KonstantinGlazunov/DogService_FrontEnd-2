import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthState from './types/AuthState';
import Credentials from './types/Credentials';
import * as api from './api';
import RegisterData from './types/RegisterData';

const initialState: AuthState = {
	authChecked: false,
	user: undefined,
	loginFormError: undefined,
	registerFormError: undefined,
};

export const getUser = createAsyncThunk('api/users/my/profile', () => api.user());

export const login = createAsyncThunk('login', async (credentials: Credentials) => {
	if (!credentials.email.trim() || !credentials.password.trim()) {
		throw new Error('Не все поля заполнены');
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	return api.login(credentials);
});

// eslint-disable-next-line @typescript-eslint/require-await
export const registerUser = createAsyncThunk('api/register', async (data: RegisterData) => {
	// if (data.password !== data.passwordRepeat) {
	// 	throw new Error('Пароли не совпадают');
	// }
	// if (!data.email.trim() || !data.password.trim()) {
	// 	throw new Error('Не все поля заполнены');
	// }

	return api.registerUser(data);
});

export const registerSetter = createAsyncThunk('api/register', async (data: RegisterData) => {
	// if (data.password !== data.passwordRepeat) {
	// 	throw new Error('Пароли не совпадают');
	// }
	// if (!data.email.trim() || !data.password.trim()) {
	// 	throw new Error('Не все поля заполнены');
	// }
	// eslint-disable-next-line import/namespace, @typescript-eslint/no-unsafe-call
	return api.registerSetter(data);
});

export const logout = createAsyncThunk('logout', api.logout);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// 332 редьюсер для очистки ошибки
		resetLoginFormError: (state) => {
			state.loginFormError = undefined;
		},
		resetRegisterFormError: (state) => {
			state.registerFormError = undefined;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.fulfilled, (state, action) => {
				state.authChecked = true;
				state.user = action.payload;
			})
			.addCase(getUser.rejected, (state) => {
				state.authChecked = true;
			})
			.addCase(login.fulfilled, (state) => {
				state.loginFormError = undefined;
			})
			// 332 так изменяется стэйт если вернулась ошибка
			.addCase(login.rejected, (state, action) => {
				state.loginFormError = action.error.message;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = undefined;
				state.authChecked = true;
			})
			// .addCase(registerSetter.fulfilled, (state, action) => {
			// 	state.user = action.payload;
			// 	state.registerFormError = undefined;
			// })
			// .addCase(registerSetter.rejected, (state, action) => {
			// 	state.registerFormError = action.error.message;
			// })
			.addCase(registerUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.registerFormError = undefined;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.registerFormError = action.error.message;
			});
	},
});

export const { resetLoginFormError, resetRegisterFormError } = authSlice.actions;

export default authSlice.reducer;
