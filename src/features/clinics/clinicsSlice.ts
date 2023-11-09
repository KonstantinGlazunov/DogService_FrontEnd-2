import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ClinicState from './types/ClinicsStates';
import * as api from './api';

const initialState: ClinicState = {
	clinics: [],
};

export const loadClinics = createAsyncThunk('clinics/loadClinics', () => api.getAll());

export const clinicsSlice = createSlice({
	name: 'clinics',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadClinics.fulfilled, (state, action) => {
			state.clinics = action.payload;
		});
	},
});

export default clinicsSlice.reducer;
