import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import UsersState from './types/UserState';


const initialState: UsersState = {
  users: [],
};

export const loadUsers = createAsyncThunk(
  'users/loadUsers', async() => {
  const res = api.getAll();
  return res;
   });

export const usersSlice = createSlice( {
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    })
  }
}

)
export default usersSlice.reducer;