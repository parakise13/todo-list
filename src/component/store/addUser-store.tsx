import { createSlice } from "@reduxjs/toolkit";

const addUserSlice = createSlice({
  name: "userRecuder",
  initialState: { userName: "" },
  reducers: {
    addUserName: (state, action) => {
      state.userName = action.payload;
      localStorage.setItem("userName", state.userName);
    },
    removeUserName: () => {
      localStorage.removeItem("userName");
    },
  },
});

export const { addUserName, removeUserName } = addUserSlice.actions;
export default addUserSlice;