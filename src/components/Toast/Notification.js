import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "../../reducer/NotificationSlice";

export default function Notification () {
    const dispatch = useDispatch()
    const notifications = useSelector(notification)

    return(
        <>
        {/* {notifications && toast(notifications.message)} */}
        <Toaster postion="top-right" />
        </>
    )
}