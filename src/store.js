import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducer/AuthSlice";
import NotificationSlice from "./reducer/NotificationSlice";

export const store = configureStore({
    reducer:{
        auth: AuthSlice,
        notification: NotificationSlice,
    },
    devTools: true
})