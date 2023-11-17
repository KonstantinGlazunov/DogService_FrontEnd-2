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

export const updateClinic = createAsyncThunk(
	'clinics/updateClinic',
	({ clinic, id }: { clinic: ClinicDto; id: number }) => api.updateClinic(clinic, id)
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
			.addCase(updateClinic.fulfilled, (state, action) => {
				state.clinics.map((clinic) => (clinic.id === action.payload.id ? action.payload : clinic));
			})
			.addCase(createClinic.fulfilled, (state, action) => {
				state.clinics.push(action.payload);
			});
	},
});

export default clinicsSlice.reducer;
