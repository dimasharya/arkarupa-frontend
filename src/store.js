import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducer/AuthSlice";
import ItemManagementSlice from "./reducer/ItemManagementSlice";
import NotificationSlice from "./reducer/NotificationSlice";
import PermitToWorkSlice from "./reducer/PermitToWorkSlice";
import ProjectBudgetSelectedSlice from "./reducer/ProjectBudgetSelectedSlice";
import ProjectBudgetSlice from "./reducer/ProjectBudgetSlice";
import ProjectSelectedSlice from "./reducer/ProjectSelectedSlice";
import ProjectSlice from "./reducer/ProjectSlice";
import UserManagementSlice from "./reducer/UserManagementSlice";
import ValidationMessageSlice from "./reducer/ValidationMessageSlice"

export const store = configureStore({
    reducer:{
        auth: AuthSlice,
        notification: NotificationSlice,
        userproject: ProjectSlice,
        projectselected: ProjectSelectedSlice,
        projectbudget: ProjectBudgetSlice,
        projectbudgetselected: ProjectBudgetSelectedSlice,
        itemmanagement: ItemManagementSlice,
        permittowork: PermitToWorkSlice,
        usermanagement: UserManagementSlice,
        validationmessage: ValidationMessageSlice
    },
    devTools: true
})