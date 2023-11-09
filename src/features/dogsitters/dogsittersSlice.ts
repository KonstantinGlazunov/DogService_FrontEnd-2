import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import * as api from "./api"
import DogsittersState from "./types/DogsittersState"

const initialState: DogsittersState = {
  dogsitters: [],
  error: "",
}

export const loadDogsitters = createAsyncThunk(
  "dogsitters/loadDogsitters",
  () => api.getAll(),
)

export const loadDogsittersByCity = createAsyncThunk(
  //ACTION
  "dogsitters/loadDogsittersByCity", //type
  ({ city }: { city: string; }) => api.getByCity(city), //payload
)
//на каждый асинк делаем минимум по одному кейсу
export const dogsittersSlice = createSlice({
  name: "dogsitters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadDogsitters.fulfilled, (state, action) => {
        state.dogsitters = action.payload
      })
      .addCase(loadDogsittersByCity.fulfilled, (state, action) => {
        state.dogsitters = action.payload
      })
  },
})

export default dogsittersSlice.reducer
