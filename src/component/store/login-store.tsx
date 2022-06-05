import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  modalOpened: false,
};

const loginSlice = createSlice({
  name: "loginReducer",
  initialState: initialAuthState,
  reducers: {
    loggedIn: (state) => {
      state.isAuthenticated = true;
    },
    loggedOut: (state) => {
      state.isAuthenticated = false;
    },
    modalOpen: (state) => {
      state.modalOpened = true;
    },
    modalClose: (state) => {
      state.modalOpened = false;
    },
  },
});

export const { loggedIn, loggedOut, modalOpen, modalClose } =
  loginSlice.actions;

export default loginSlice;

