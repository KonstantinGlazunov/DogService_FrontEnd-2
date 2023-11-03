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

export const dogsittersSlice = createSlice({
  name: "dogsitters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadDogsitters.fulfilled, (state, action) => {
      state.dogsitters = action.payload
    })
  },
})

export default dogsittersSlice.reducer
