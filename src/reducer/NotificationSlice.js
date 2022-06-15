import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// export const setNotification = (data) => {
//   // if (data.type === "error") {
//   //   return toast.error(data.message);
//   // }
//   // if (data.type === "success") {
//   //   return toast.success(data.message);
//   // }
//   return
// };

const NotificationSlice = createSlice({
  name: "notification",
  initialState: {},
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
      return { notification: "" };
    },
  },
});
// const { reducer, actions } = NotificationSlice;
// export const { setNotification, clearNotification } = actions;
// export default reducer;

export const notification = (state) => state.notification;
const { reducer, actions } = NotificationSlice;
export const { setNotification } = actions;
export default reducer;
