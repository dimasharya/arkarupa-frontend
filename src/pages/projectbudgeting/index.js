import React, { useState, useEffect } from "react";
import Workspace from "../projectbudgeting/Workspace";
import Itemmanagement from "./Itemmanagement";

function ProjectBudgeting() {

  // Tabs Handler

  const tabs = ["workspace", "item management", "material management", "category"];
  const [tabActive, setTabactive] = useState(tabs[0]);

  return (
    <>
      <div className="flex-row">
        <div className="mb-4 mx-2">
          <ul className="inline-flex gap-4 text-xs cursor-pointer">
            {tabs.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className={
                    (tabActive === item
                      ? "py-2 px-4 border-b-2 border-black text-black"
                      : "py-2 px-4  text-gray-500") +
                    " font-bold transition duration-500 ease-in-out"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setTabactive(item);
                  }}
                  role="tablist"
                >
                  {item.toUpperCase()}
                </li>
              );
            })}
          </ul>
        </div>
          <div
            className={tabActive === "workspace" ? "block" : "hidden"}
            id="Overview"
          >
            <Workspace />
          </div>
          <div className={tabActive === "item management" ? "block" : "hidden" }>
            <Itemmanagement />
          </div>
        </div>
    </>
  );
}

export default ProjectBudgeting;
