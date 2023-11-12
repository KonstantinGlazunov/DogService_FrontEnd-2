import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ClinicState from './types/ClinicsState';
import * as api from './api';
import ClinicDto from './types/ClinicDto';

const initialState: ClinicState = {
	clinics: [],
};

export const loadClinics = createAsyncThunk('clinics/loadClinics', () => api.getAll());

export const loadClinicsByCity = createAsyncThunk('clinics/loadClinicsByCity', (city: string) =>
	api.getByCity(city)
);

export const deleteClinic = createAsyncThunk('clinics/deleteClinic', (id: number) =>
	api.deleteClinic(id)
);

export const createClinic = createAsyncThunk('clinics/createClinic', (clinic: ClinicDto) =>
	api.createClinic(clinic)
);

export const clinicsSlice = createSlice({
	name: 'clinics',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadClinics.fulfilled, (state, action) => {
				state.clinics = action.payload;
			})
			.addCase(loadClinicsByCity.fulfilled, (state, action) => {
				state.clinics = action.payload;
			})
			.addCase(deleteClinic.fulfilled, (state, action) => {
				state.clinics = state.clinics.filter((clinic) => clinic.id !== action.payload.id);
			})
			.addCase(createClinic.fulfilled, (state, action) => {
				state.clinics.push(action.payload);
			});
	},
});

export default clinicsSlice.reducer;
