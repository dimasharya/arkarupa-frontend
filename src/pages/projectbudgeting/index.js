import React, { useEffect, useState } from "react";
import Workspace from "./Workspace";
import CategoryManagement from "./CategoryManagement";
import ItemManagement from "./Itemmanagement";
import MaterialManagement from "./MaterialManagement";
import { useLocation, useParams } from "react-router-dom";
import BudgetDocuments from "./BudgetDocument";
import { useDispatch } from "react-redux";
import { loadProjectBudget } from "../../reducer/ProjectBudgetSlice";
import { loadItem } from "../../reducer/ItemManagementSlice";

function ProjectBudgeting() {

  const {projectId} = useParams()
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
     dispatch(loadProjectBudget())
     dispatch(loadItem())
  }, [location])
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
          {projectId ? <BudgetDocuments /> : <Workspace />}
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
