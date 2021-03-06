import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "@windmill/react-ui";
import ProjectInfoCard from "../../components/Cards/Supervisor/ProjectInfoCard";
import TaskCardBerlangsung from "../../components/Cards/Supervisor/TaskCardBerlangsung";
import TaskCardDijadwalkan from "../../components/Cards/Supervisor/TaskCardDijadwalkan";
import TaskCardSelesai from "../../components/Cards/Supervisor/TaskCardSelesai";
import { ChevronLeft } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import {
  loadPekerjaanSpv,
  loadProjectSelected,
  projectSelectedSelectorPekerjaan,
} from "../../reducer/ProjectSelectedSlice";
import { selectUser } from "../../reducer/AuthSlice";
import PermitToWorkForm from "../permittowork/PermitToWorkForm";

export default function ProjectSPV() {
  let { projectId } = useParams();
  const dispatch = useDispatch();

  const location = useLocation();

  const User = useSelector(selectUser)

  useEffect(() => {
    dispatch(loadProjectSelected({ id: projectId }));
    dispatch(loadPekerjaanSpv({ id_proyek: projectId, penanggung_jawab:  User._id}));
  }, [location]);

  const DataPekerjaan = useSelector(projectSelectedSelectorPekerjaan.selectAll);

  const [dataPermitBaru, setDataPermitBaru] = useState("")

  const [modalPermitBaru, setModalPermitBaru] = useState(false)

  const permitBaru = (props) => {
    setDataPermitBaru(props)
    setModalPermitBaru(!modalPermitBaru)
  }

  return (
    <>
      <div className="flex gap-4 items-center my-2">
        <Link to="/app/spv/project">
          <Button size="small" icon={ChevronLeft} layout="link" />
        </Link>
        <label className="text-base font-bold">Proyek</label>
      </div>
      <div className="flex flex-col gap-4">
        <ProjectInfoCard />
        <div className="grid ">
          <div className="p-6 bg-white rounded-lg border">
            <div className="flex pb-3 mb-3 px-2 items-center gap-2">
              <div className="p-1.5 w-7 h-7 rounded-full bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h5 className="font-semibold leading-none text-gray-900 dark:text-white">
                Pekerjaan
              </h5>
            </div>
            <div className="grid grid-cols-3 gap-6 px-2">
              <div className="grid">
                <div className="flex items-center gap-2 mb-3">
                  <div className="rounded-full bg-orange-400 w-3 h-3" />
                  <h2 className="text-sm font-bold">Dijadwalkan</h2>
                </div>
                <div className="flex gap-2 flex-col relative overflow-y-auto h-96 scrollbar-hide">
                  {DataPekerjaan.length !== 0 ? (
                    DataPekerjaan.map((item, idx) => {
                      if(item.status === "Dijadwalkan"){
                        return <TaskCardDijadwalkan permitBaru={permitBaru} key={idx} dataTask={item} />;
                      }
                    })
                  ) : (
                    <p className="text-center text-xs">Tidak Ada Data</p>
                  )}
                </div>
              </div>
              <div className="grid">
                <div className="flex items-center gap-2 mb-3">
                  <div className="rounded-full bg-blue-400 w-3 h-3" />
                  <h2 className="text-sm font-bold">Berlangsung</h2>
                </div>
                <div className="flex gap-2 flex-col relative overflow-y-auto h-96 scrollbar-hide">
                  {DataPekerjaan.length !== 0 ? (
                    DataPekerjaan.map((item, idx) => {
                      if (
                        item.status === "Dimulai" ||
                        item.status === "Dijeda"
                      ) {
                        return (
                          <TaskCardBerlangsung key={idx} dataTask={item} />
                        );
                      }
                    })
                  ) : (
                    <p className="text-center text-xs">Tidak Ada Data</p>
                  )}
                </div>
              </div>
              <div className="grid">
                <div className="flex items-center gap-2 mb-3">
                  <div className="rounded-full bg-green-400 w-3 h-3" />
                  <h2 className="text-sm font-bold">Selesai</h2>
                </div>
                <div className="flex gap-2 flex-col relative overflow-y-auto h-96 scrollbar-hide">
                  {DataPekerjaan.length !== 0 ? (
                    DataPekerjaan.map((item, idx) => {
                      if (item.status === "Selesai") {
                        return <TaskCardSelesai key={idx} dataTask={item} />;
                      }
                    })
                  ) : (
                    <p className="text-center text-xs">Tidak Ada Data</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalPermitBaru && (<PermitToWorkForm dataPermitBaru={dataPermitBaru} setModalPermitBaru={setModalPermitBaru} modalPermitBaru={modalPermitBaru} />)}
    </>
  );
}
