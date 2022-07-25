import { Label } from "@windmill/react-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import NewRABForm from "./NewRABFrom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DocumentTextIcon } from "@heroicons/react/outline";
import { projectBudgetSelector } from "../../reducer/ProjectBudgetSlice";
import TableDataLong from "../../components/Projectbudget/Workspace/TableDataLong";
import RecentProjectBudgetCard from "../../components/Projectbudget/Workspace/RecentProjectBudgetCard";
import { clearProjectBudgetSelected } from "../../reducer/ProjectBudgetSelectedSlice";
import { useLocation } from "react-router-dom";

export default function Workspace() {
  const [modalNewRab, setModalNewRab] = useState(false);
  const projectBudget = useSelector(projectBudgetSelector.selectAll);

  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(clearProjectBudgetSelected())
  }, [location])

  return (
    <>
      <div className="grid grid-flow-row gap-4">
        <div className="grid grid-flow-col grid-cols-8 pb-2 gap-4 items-end">
          <div className="flex border col-span-1 p-2 h-52 rounded-md bg-white text-center items-center justify-center text-gray-300 hover:text-black hover:shadow-inner cursor-pointer duration-150 ease-in-out">
            <button
              onClick={() => setModalNewRab(!modalNewRab)}
              className="font-semibold"
            >
              <FontAwesomeIcon icon={faPlusCircle} size="3x" />
              <Label className="pt-1 text-gray-500">Tambah Baru</Label>
            </button>
          </div>
          <div className="col-span-7">
            <p className="text-xs font-bold mb-1">Terakhir Diperbarui</p>
            <div className="grid grid-cols-7 gap-2 relative overflow-x-auto scrollbar-hide">
            {projectBudget.map((item, idx) => {
              return <RecentProjectBudgetCard key={idx} dataProjectBudget={item} />
            })}
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl">
          <div className="flex items-center text-sm font-semibold justify-between">
            <div className="flex px-4 items-center">
              <div className="p-1.5 bg-black rounded-full">
                <DocumentTextIcon className="h-4 w-4 text-white" />
              </div>
              <h4 className="pl-3">DOKUMEN RANCANGAN ANGGARAN BIAYA</h4>
            </div>
            <div className="flex border mr-2 items-center rounded-md hover:border-gray-400 duration-150">
              <div className="text-center w-10 mx-1 border-r">
                <FontAwesomeIcon icon={faSearch} size="xs" />
              </div>
              <input
                placeholder="Cari dokumen ..."
                className="w-full rounded-r-md p-2 text-sm font-medium"
              />
            </div>
          </div>
          <div className=" mt-3 p-2 rounded-lg shadow-inner">
            <ul className="relative h-80 overflow-y-scroll">
              {projectBudget.length !== 0 ? projectBudget.map((item, idx) => {
                return <TableDataLong key={idx} dataProjectBudget={item} />;
              }) : <p className="text-center font-semibold text-sm">Tidak Ada Data</p>}
            </ul>
          </div>
        </div>
      </div>
      {modalNewRab && (
        <NewRABForm setModalNewRab={setModalNewRab} modalNewRab={modalNewRab} />
      )}
    </>
  );
}
