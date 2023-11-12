import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import KennelState from './types/KennelState';
import * as api from './api';
import KennelDto from './KennelDto';

const initialState: KennelState = {
	kennels: [],
};

export const loadKennels = createAsyncThunk('kennels/loadKennels', () => api.getAll());

export const loadKennelsByCity = createAsyncThunk('kennels/loadKennelsByCity', (city: string) =>
	api.getByCity(city)
);

export const deleteKennel = createAsyncThunk('kennels/deleteKennel', (id: number) =>
	api.deleteKennel(id)
);

export const createKennel = createAsyncThunk('kennels/createKennel', (kennel: KennelDto) =>
	api.createKennel(kennel)
);

export const kennelsSlice = createSlice({
	name: 'kennels',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadKennels.fulfilled, (state, action) => {
				state.kennels = action.payload;
			})
			.addCase(loadKennelsByCity.fulfilled, (state, action) => {
				state.kennels = action.payload;
			})
			.addCase(deleteKennel.fulfilled, (state, action) => {
				state.kennels = state.kennels.filter((kennel) => kennel.id !== action.payload.id);
			});
	},
});

export default kennelsSlice.reducer;
