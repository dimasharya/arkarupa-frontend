import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {};

export const setNotification = (data) => {
  if (data.type === "error") {
    toast.error(data.message);
  }
  if (data.type === "success") {
    toast.success(data.message);
  }
};

const NotificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification,
    clearNotification: (state, action) => {
      return { notification: "" };
    },
  },
});
// const { reducer, actions } = NotificationSlice;
// export const { setNotification, clearNotification } = actions;
// export default reducer;

export default NotificationSlice.reducer;
