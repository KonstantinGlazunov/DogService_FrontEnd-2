
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import contactsReducer from "../components/Pages/Contacts/contactSlice"
import dogsittersSlice from "../features/dogsitters/dogsittersSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    contacts: contactsReducer,
    loadDogsitters: dogsittersSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
