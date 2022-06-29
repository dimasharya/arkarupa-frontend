import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const NotificationSlice = createSlice({
  name: "notification",
  initialState: {
    type: "",
    message: ""
  },
  reducers: {
    setNotification: (state, action) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
      if (action.payload.type === "error") {
        toast.error(action.payload.message);
      }
      if (action.payload.type === "success") {
        toast.success(action.payload.message);
      }
    },
    clearNotification: (state, action) => {
      state.type = ""
      state.message = ""
    },
  },
});

export const notificationSelector = (state) => state.notification;
const { reducer, actions } = NotificationSlice;
export const { setNotification, clearNotification } = actions;
export default reducer;
