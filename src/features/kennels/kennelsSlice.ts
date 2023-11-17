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

export const updateKennel = createAsyncThunk(
	'kennels/updateKennel',
	({ kennel, id }: { kennel: KennelDto; id: number }) => api.updateKennel(kennel, id)
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
			})
			.addCase(updateKennel.fulfilled, (state, action) => {
				state.kennels.map((kennel) => (kennel.id === action.payload.id ? action.payload : kennel));
			});
	},
});

export default kennelsSlice.reducer;
