import Clinic from './Clinic';

export default interface ClinicStates {
	clinics: Clinic[];
	error?: string;
}
