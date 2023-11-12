import { RootState } from '../../app/store';
import Kennel from './types/Kennel';

export const selectKennels = (state: RootState): Kennel[] => state.kennels.kennels;
export const selectError = (state: RootState): string | undefined => state.kennels.error;
