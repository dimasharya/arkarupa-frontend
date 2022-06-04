import moment from "moment";
import "moment/locale/id"
import React, { useEffect, useState } from "react";
import Moment from "react-moment"

export default function Clock() {
    const [clock, setClock] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = moment().format();
            setClock(date)
        })
    }, [])
    return (
        <>
        <div className="text-black font-bold text-xs">{<Moment format="dddd, DD MMM HH:mm" locale="id">{clock}</Moment>}</div>
        </>
    )
};
