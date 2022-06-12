import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setNotification } from "../../reducer/NotificationSlice";

export default function Notification () {
    const dispatch = useDispatch()
    
    
    return(
        <Toaster postion="top-right" />
    )
}