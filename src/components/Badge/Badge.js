import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Badge({ status }) {
  const statusValidation = status.toLowerCase();
  let color;
  let animate;
  if (statusValidation === "completed") {
    color = "green";
    animate = "animate-pulse"
  } else if (statusValidation === "paused") {
    color = "red";
    animate = "animate-pulse"
  } else {
    color = "gray";
    animate = ""
  }
  return (
    <>
      <div className="flex py-1 items-center space-x-2">
          <FontAwesomeIcon className={animate} color={color} size="xs" icon={faCircle} />
        <label className="text-xs font-semibold text-gray-500">{status}</label>
      </div>
    </>
  );
}
