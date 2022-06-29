import { createSlice } from "@reduxjs/toolkit";

const ValidationMessageSlice = createSlice({
  name: "validationmessage",
  initialState: {
    type: "",
    message: ""
  },
  reducers: {
    setMessage: (state, action) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    clearMessage: (state, action) => {
        state.type = ""
        state.message = ""
    },
  },
});
// const { reducer, actions } = NotificationSlice;
// export const { setNotification, clearNotification } = actions;
// export default reducer;

export const validationMessageSelector = (state) => state.validationmessage;
const { reducer, actions } = ValidationMessageSlice;
export const { setMessage, clearMessage } = actions;
export default reducer;
