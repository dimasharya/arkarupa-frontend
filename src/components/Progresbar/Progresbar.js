import React from "react";

export default function ProgressBar(props) {
  const progress = props.progress+"%"
  return (
    <>
      <div className="relative">
        <div className="flex mb-1 justify-end">
          <label className="text-xs font-semibold inline-block text-gray-600">
              {progress}
            </label>
        </div>
        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
          <div
          style={{width: (progress)}}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
      </div>
    </>
  );
}
