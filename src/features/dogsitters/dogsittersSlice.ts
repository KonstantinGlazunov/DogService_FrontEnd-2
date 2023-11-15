import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import * as api from "./api"
import { build } from "vite"
import DogsittersState from "./types/DogsittersState"


const initialState: DogsittersState = {
  dogsitters: [],
  error: "",
}

export const loadDogsitters = createAsyncThunk(
  "dogsitters/loadDogsitters",
  () => api.getAll(),
)

export const loadDogsittersByCityAndSize = createAsyncThunk( //ACTION
  "dogsitters/loadDogsittersByCityAndSize", //type
  ({city,size,zip}:{city:string, size:string, zip: string}) => api.getByCityAndSize(city, size, zip) //payload
)
//на каждый асинк делаем минимум по одному кейсу 
export const dogsittersSlice = createSlice({
  name: "dogsitters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loadDogsitters.fulfilled, (state, action) => {
    console.log("LOAD DOGSITTERS", action.payload);
    
      state.dogsitters = action.payload
      
    })
    .addCase(loadDogsittersByCityAndSize.fulfilled, (state, action) => {
console.log("ACTION PAYLOAD: ", action.payload);

      state.dogsitters = action.payload
    })
  },
})

export default dogsittersSlice.reducer
