import { RootState } from '../../app/store';
import Clinic from './types/Clinic';

export const selectClinics = (state: RootState): Clinic[] => state.clinics.clinics;
export const selectError = (state: RootState): string | undefined => state.clinics.error;
