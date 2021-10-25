import React, { useState } from "react";

export default function Texttabs() {
  const label = ["Overview", "Item Management", "Price Management"];
  const [tabActive, setTabactive] = useState("Overview");
  const [tabData, setTabdata] = useState("Overview");
  return (
    <>
      <div className="flex-row">
        <div className="w-full mb-4 mx-2">
          <ul className="inline-flex gap-4 text-xs cursor-pointer">
            {label.map((item, idx) => {
              return (
                <li key={idx}>
                  <a
                    className={
                      (tabActive === item
                        ? "py-2 px-4 border-b-2 border-black text-black"
                        : "py-2 px-4  text-gray-500") +
                      " font-bold transition duration-500 ease-in-out"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setTabactive(item);
                      setTabdata(item);
                    }}
                    role="tablist"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex">
          <div className="">{tabData}</div>
        </div>
      </div>
    </>
  );
}
