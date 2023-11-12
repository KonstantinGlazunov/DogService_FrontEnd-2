import Kennel from './Kennel';

export default interface KennelStates {
	kennels: Kennel[];
	error?: string;
}
