import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from './api';

import DogsittersState from './types/DogsittersState';

const initialState: DogsittersState = {
	dogsitters: [],
	error: '',
};

export const loadDogsitters = createAsyncThunk('dogsitters/loadDogsitters', () => api.getAll());

export const loadDogsitter = createAsyncThunk('dogsitters/loadDogsitter', (id: number) =>
	api.getById(id)
);


export const loadDogsittersByCityAndSize = createAsyncThunk(
	//ACTION
	'dogsitters/loadDogsittersByCityAndSize', //type
	({ city, size, zip }: { city: string; size: string; zip: string }) =>
		api.getByCityAndSize(city, size, zip) //payload
);
export const deleteDogsitterById = createAsyncThunk(
	//ACTION
	'dogsitters/deleteDogsitterById', //type
	(id: number) => {
		api.deleteDogsitterByID(id); // API для удаления из базы данных
		return id; //  Возвращаем id для использования в reducer
	}
);

//на каждый асинк делаем минимум по одному кейсу
export const dogsittersSlice = createSlice({
	name: 'dogsitters',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadDogsitters.fulfilled, (state, action) => {
				state.dogsitters = action.payload;
			})
			.addCase(loadDogsittersByCityAndSize.fulfilled, (state, action) => {
				state.dogsitters = action.payload;
			})
			.addCase(deleteDogsitterById.fulfilled, (state, action) => {
				state.dogsitters = state.dogsitters.filter((dogSitter) => dogSitter.id !== action.payload);
			})
      .addCase(loadDogsitter.fulfilled, (state, action) => {
				state.dogsitters = [action.payload];
			})
      ;
	},
});

export default dogsittersSlice.reducer;
