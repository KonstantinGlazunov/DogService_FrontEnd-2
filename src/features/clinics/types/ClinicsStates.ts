import Clinic from './Clinic';

export default interface ClinicState {
	clinics: Clinic[];
	error?: string;
}
