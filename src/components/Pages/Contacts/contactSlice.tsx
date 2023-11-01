import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  message: "",
  loading: false,
  buttonMessage: "Send message"
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    updateContact: (state, action) => {
      return { ...state, ...action.payload };
    },
    sendContactMessage: (state) => {
      return state;
    },
  },
});

export const { updateContact, sendContactMessage } = contactsSlice.actions;

export default contactsSlice.reducer;
