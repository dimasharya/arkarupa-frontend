import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducer/AuthSlice";
import NotificationSlice from "./reducer/NotificationSlice";
import ProjectBudgetSelectedSlice from "./reducer/ProjectBudgetSelectedSlice";
import ProjectBudgetSlice from "./reducer/ProjectBudgetSlice";
import ProjectSelectedSlice from "./reducer/ProjectSelectedSlice";
import ProjectSlice from "./reducer/ProjectSlice";

export const store = configureStore({
    reducer:{
        auth: AuthSlice,
        notification: NotificationSlice,
        userproject: ProjectSlice,
        projectselected: ProjectSelectedSlice,
        projectbudget: ProjectBudgetSlice,
        projectbudgetselected: ProjectBudgetSelectedSlice
    },
    devTools: true
})