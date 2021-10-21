import React, { useEffect, useState } from "react";
import Moment from "react-moment"

export default function Clock() {
    const [clock, setClock] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleString())
        })
    }, [])
    return (
        <>
        <div className="text-black font-bold text-xs">{<Moment format="ddd, MMM DD HH:mm A">{clock}</Moment>}</div>
        </>
    )
};
