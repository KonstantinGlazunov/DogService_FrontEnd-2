import { RootState } from "../../app/store";
import Dogsitter from "./types/Dogsitter";


export const selectDogsitters = (state:RootState): Dogsitter[]=>state.loadDogsitters.dogsitters; 
export const selectError = (state:RootState): string | undefined =>state.loadDogsitters.error;