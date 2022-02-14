import React, { useState, useEffect } from "react";
import Workspace from "../projectbudgeting/Workspace";
import CategoryManagement from "./CategoryManagement";
import ItemManagement from "./ItemManagement";
import MaterialManagement from "./MaterialManagement";

function ProjectBudgeting() {
  // Tabs Handler

  const tabs = [
    "lembar kerja",
    "manajemen item pekerjaan",
    "manajemen material",
    "kategori",
  ];
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
                    " font-bold transition duration-500 ease-in-out hover:text-black"
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
        <div className={tabActive === "lembar kerja" ? "block" : "hidden"}>
          <Workspace />
        </div>
        <div
          className={
            tabActive === "manajemen item pekerjaan" ? "block" : "hidden"
          }
        >
          <ItemManagement />
        </div>
        <div
          className={tabActive === "manajemen material" ? "block" : "hidden"}
        >
          <MaterialManagement />
        </div>
        <div
          className={tabActive === "kategori" ? "block" : "hidden"}
        >
          <CategoryManagement />
        </div>
      </div>
    </>
  );
}

export default ProjectBudgeting;
