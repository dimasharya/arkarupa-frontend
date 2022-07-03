import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "@windmill/react-ui";
import ProjectInfoCard from "../../components/Cards/ProjectManager/ProjectInfoCard";
import TaskCardBerlangsung from "../../components/Cards/ProjectManager/TaskCardBerlangsung";
import TaskCardDijadwalkan from "../../components/Cards/ProjectManager/TaskCardDijadwalkan";
import TaskCardSelesai from "../../components/Cards/ProjectManager/TaskCardSelesai";
import Tim from "../../components/Project/Tim";
import NewPekerjaanForm from "./ProjectManager/NewPekerjaanForm";
import EditPekerjaanForm from "./ProjectManager/EditPekerjaanForm";
import { CollectionIcon } from "@heroicons/react/outline";
// import Table, {
//   DisplayBadgeStatus,
//   DisplayProgressBarSmall,
// } from "../../components/Table/Table";
import { HeroPlusOutline, ChevronLeft } from "../../icons";
import {
  loadPekerjaan,
  loadProjectSelected,
  projectSelectedSelectorPekerjaan,
  projectSelectedSelectorTeam,
} from "../../reducer/ProjectSelectedSlice";
import NewTeamForm from "./ProjectManager/NewTeamForm";
import KurvaS from "./KurvaS";
import BadgeTaskStatus from "../../components/Badge/BadgeTaskStatus";
import ProgressbarSmall from "../../components/Progresbar/ProgressbarSmall";
import moment from "moment";

export default function Project() {
  const [modalNewPekerjaan, setModalNewPekerjaan] = useState(false);
  const [modalNewTeam, setModalNewTeam] = useState(false);
  const [modalEditPekerjaan, setModalEditPekerjaan] = useState(false);

  const tabs = ["jadwal", "progres", "kurva s"];
  const [tabActive, setTabactive] = useState(tabs[0]);

  let { projectId } = useParams();
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(loadProjectSelected({ id: projectId }));
    dispatch(loadPekerjaan({ id_proyek: projectId }));
  }, [location]);

  const Team = useSelector(projectSelectedSelectorTeam.selectAll);

  const DataPekerjaan = useSelector(projectSelectedSelectorPekerjaan.selectAll);

  const [dataEdit, setDataEdit] = useState("");

  const editPekerjaan = (data) => {
    setModalEditPekerjaan(!modalEditPekerjaan);
    setDataEdit(data);
  };

  return (
    <>
      <div className="flex gap-4 items-center my-2">
        <Link to="/app/pm/project">
          <Button size="small" icon={ChevronLeft} layout="link" />
        </Link>
        <label className="text-base font-bold">Proyek</label>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-4 grid-flow-col gap-4">
          <ProjectInfoCard />
          <div className="col-span-1 py-4 px-6 rounded-md text-white bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
            <h2 className="font-semibold mb-4">Data Proyek</h2>
            <div className="grid grid-cols-2 gap-2">
              <button className="flex bg-white text-sm text-left rounded-lg items-center">
                <div className="rounded-md p-2 bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-black font-semibold leading-none px-2">
                  Anggaran Biaya
                </span>
              </button>
              <button className="flex bg-white text-sm text-left rounded-lg items-center">
                <div className="rounded-md p-2 bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    />
                  </svg>
                </div>
                <span className="text-black font-semibold leading-none px-2">
                  Berkas Kontrak
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-flow-row-dense gap-4">
          <div className=" col-span-3 p-6 bg-white rounded-lg border">
            <div className="flex justify-between pb-3 mb-3 px-2 items-center gap-2">
              <div className="flex flex-row gap-4 items-center">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 w-7 h-7 rounded-full bg-black">
                    <CollectionIcon className="h-4 w-4 text-white" />
                  </div>
                  <h5 className="font-semibold leading-none text-gray-900 dark:text-white">
                    Pekerjaan
                  </h5>
                </div>
                <ul className="inline-flex gap-4 text-xs cursor-pointer">
                  {tabs.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className={
                          (tabActive === item
                            ? "py-2 px-4 border-gray-200 bg-gray-100 rounded-lg text-black"
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
              <div className={tabActive === "jadwal" ? "block" : "hidden"}>
                <Button
                  onClick={() => setModalNewPekerjaan(!modalNewPekerjaan)}
                  iconLeft={HeroPlusOutline}
                  layout="primary"
                  size="small"
                >
                  Tambah Pekerjaan
                </Button>
              </div>
            </div>
            <div className={tabActive === "jadwal" ? "block" : "hidden"}>
              <div className="grid grid-cols-3 gap-6 px-2">
                <div className="grid">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="rounded-full bg-orange-400 w-3 h-3" />
                    <h2 className="text-sm font-bold">Semua Pekerjaan</h2>
                  </div>
                  <div className="flex gap-2 flex-col relative overflow-y-auto h-96 scrollbar-hide">
                    {DataPekerjaan.length !== 0 ? (
                      DataPekerjaan.map((item, idx) => {
                        return (
                          <TaskCardDijadwalkan
                            key={idx}
                            dataTask={item}
                            editPekerjaan={editPekerjaan}
                          />
                        );
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
            <div className={tabActive === "progres" ? "block" : "hidden"}>
              {DataPekerjaan.length !== 0 ? (
                <>
                  <div className="flex p-3 rounded-t-md border w-full text-center items-center">
                    <p className="text-xs font-bold w-2/6">PEKERJAAN</p>
                    <p className="text-xs font-bold w-1/6">TANGGAL MULAI</p>
                    <p className="text-xs font-bold w-1/6">TANGGAL SELESAI</p>
                    <p className="text-xs font-bold w-1/6">PROGRESS</p>
                    <p className="text-xs font-bold w-1/6">STATUS</p>
                  </div>
                  <ul className="relative scrollbar-hide overflow-y-scroll rounded-b-md border-l border-r border-b px-3 h-96">
                    {DataPekerjaan.map((item, idx) => {
                      const progress = Math.ceil((parseFloat(item.volume_sekarang.replace(",", ".")) / parseFloat(item.volume.replace(",", ".")))*100)
                      return (
                        <li key={idx} className="flex flex-row items-center py-3 border-b">
                          <div className="flex items-center pl-2 w-2/6 gap-5">
                            <CollectionIcon className="h-4 w-4 text-black" />
                            <p className="text-sm font-bold truncate">
                              {item.nama_pekerjaan}
                            </p>
                          </div>
                          <p className="text-sm w-1/6">{moment(item.tanggal_mulai).format("LL")}</p>
                          <p className="text-sm w-1/6">{moment(item.tanggal_mulai).format("LL")}</p>
                          <div className="flex justify-center w-1/6">
                            <ProgressbarSmall progress={progress} />
                          </div>
                          <div className="flex justify-center w-1/6">
                            <BadgeTaskStatus status={item.status} />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <p className="text-sm text-center font-bold">Belum Ada Progres</p>
              )}
            </div>
            <div className={tabActive === "kurva s" ? "block" : "hidden"}>
              <KurvaS projectId={projectId} />
            </div>
          </div>
          {Tim.length !== 0 ? (
            <Tim
              projectId={projectId}
              dataTim={Team}
              modalNewTeam={modalNewTeam}
              setModalNewTeam={setModalNewTeam}
            />
          ) : (
            ""
          )}
          {/* <button onClick={cekData} >cek data</button> */}
        </div>
      </div>
      {modalNewPekerjaan && (
        <NewPekerjaanForm
          modalNewPekerjaan={modalNewPekerjaan}
          setModalNewPekerjaan={setModalNewPekerjaan}
        />
      )}
      {modalEditPekerjaan && (
        <EditPekerjaanForm
          modalEditPekerjaan={modalEditPekerjaan}
          setModalEditPekerjaan={setModalEditPekerjaan}
          dataPekerjaan={dataEdit}
        />
      )}
      {modalNewTeam && (
        <NewTeamForm
          projectId={projectId}
          modalNewTeam={modalNewTeam}
          setModalNewTeam={setModalNewTeam}
        />
      )}
    </>
  );
}
