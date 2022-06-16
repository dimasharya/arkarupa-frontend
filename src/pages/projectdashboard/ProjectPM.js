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
// import Table, {
//   DisplayBadgeStatus,
//   DisplayProgressBarSmall,
// } from "../../components/Table/Table";
import { HeroPlusOutline, ChevronLeft } from "../../icons";
import {
  loadProjectSelected,
  projectSelectedSelector,
  projectSelectedSelectorTeam,
} from "../../reducer/ProjectSelectedSlice";
import NewTeamForm from "./ProjectManager/NewTeamForm";

export default function Project() {
  const [modalNewPekerjaan, setModalNewPekerjaan] = useState(false);
  const [modalNewTeam, setModalNewTeam] = useState(false);

  let { projectId } = useParams();
  const dispatch = useDispatch();

  const location = useLocation()

  useEffect(() => {
    dispatch(loadProjectSelected({ id: projectId }));
  }, [location]);

  const Proyek = useSelector(projectSelectedSelector.selectAll);
  const Team = useSelector(projectSelectedSelectorTeam.selectAll);

  const dataDijadwalkan = [
    {
      id: "xxxx",
      kode_pekerjaan: "BBG000001",
      nama_pekerjaan: "Galian Tanah 60 CM",
      volume: 245,
      satuan: "m3",
      tanggal_mulai_rencana: "2022-06-06",
      tanggal_selesai_rencana: "2022-06-10",
      tanggal_mulai: "2022-06-06",
      tanggal_selesai: "2022-06-10",
      status: "Dijadwalkan",
      penanggung_jawab: "Sentot Wibisono",
      progress: "40",
      permit_to_work: "null",
    },
    {
      id: "xxxx",
      kode_pekerjaan: "BBG000001",
      nama_pekerjaan: "Galian Tanah 60 CM",
      volume: 245,
      satuan: "m3",
      tanggal_mulai_rencana: "2022-06-06",
      tanggal_selesai_rencana: "2022-06-10",
      tanggal_mulai: "2022-06-06",
      tanggal_selesai: "2022-06-10",
      status: "Dijadwalkan",
      penanggung_jawab: "Sentot Wibisono",
      progress: "40",
      permit_to_work: "null",
    },
    {
      id: "xxxx",
      kode_pekerjaan: "BBG000001",
      nama_pekerjaan: "Galian Tanah 60 CM",
      volume: 245,
      satuan: "m3",
      tanggal_mulai_rencana: "2022-06-06",
      tanggal_selesai_rencana: "2022-06-10",
      tanggal_mulai: "2022-06-06",
      tanggal_selesai: "2022-06-10",
      status: "Dijadwalkan",
      penanggung_jawab: "Sentot Wibisono",
      progress: "40",
      permit_to_work: "null",
    },
  ];
  const dataBerlangsung = [
    {
      id: "xxxx",
      kode_pekerjaan: "BBG000001",
      nama_pekerjaan: "Galian Tanah 60 CM",
      volume: 245,
      satuan: "m3",
      tanggal_mulai_rencana: "2022-06-06",
      tanggal_selesai_rencana: "2022-06-10",
      tanggal_mulai: "2022-06-06",
      tanggal_selesai: "2022-06-10",
      status: "Dimulai",
      penanggung_jawab: "Sentot Wibisono",
      progress: "40",
      permit_to_work: "null",
    },
    {
      id: "xxxx",
      kode_pekerjaan: "BBG000001",
      nama_pekerjaan: "Galian Tanah 60 CM",
      volume: 245,
      satuan: "m3",
      tanggal_mulai_rencana: "2022-06-06",
      tanggal_selesai_rencana: "2022-06-10",
      tanggal_mulai: "2022-06-06",
      tanggal_selesai: "2022-06-10",
      status: "Dimulai",
      penanggung_jawab: "Sentot Wibisono",
      progress: "40",
      permit_to_work: "null",
    },
    {
      id: "xxxx",
      kode_pekerjaan: "BBG000001",
      nama_pekerjaan: "Galian Tanah 60 CM",
      volume: 245,
      satuan: "m3",
      tanggal_mulai_rencana: "2022-06-06",
      tanggal_selesai_rencana: "2022-06-10",
      tanggal_mulai: "2022-06-06",
      tanggal_selesai: "2022-06-10",
      status: "Dimulai",
      penanggung_jawab: "Sentot Wibisono",
      progress: "40",
      permit_to_work: "null",
    },
  ];
  const dataSelesai = [
    {
      id: "xxxx",
      kode_pekerjaan: "BBG000001",
      nama_pekerjaan: "Galian Tanah 60 CM",
      volume: 245,
      satuan: "m3",
      tanggal_mulai_rencana: "2022-06-06",
      tanggal_selesai_rencana: "2022-06-10",
      tanggal_mulai: "2022-06-06",
      tanggal_selesai: "2022-06-10",
      status: "Selesai",
      penanggung_jawab: "Sentot Wibisono",
      progress: "100",
      permit_to_work: "null",
    },
  ];

  const [data, setData] = useState([
    {
      kode_pekerjaan: "BBG00001",
      item_pekerjaan: "Galian Tanah 50 CM",
      tanggal_pelaksanaan: "2022-06-10",
      pelaksana: "Albert Suyono",
      status: "Dijadwalkan",
      progress: "30",
    },
  ]);

  // function cekData () {
  //   Proyek.map(item => {
  //     console.log(item);
  //   })
  // }
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
          {Proyek.length !== 0 ? (
            <ProjectInfoCard dataProyek={Proyek[0]} />
          ) : (
            ""
          )}
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
        <div className="grid grid-cols-8 gap-4">
          <div className=" col-span-6 p-6 bg-white rounded-lg border">
            <div className="flex justify-between pb-3 mb-3 px-2 items-center gap-2">
              <div className="flex items-center gap-2">
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
              <Button
                onClick={() => setModalNewPekerjaan(!modalNewPekerjaan)}
                iconLeft={HeroPlusOutline}
                layout="primary"
                size="small"
              >
                Tambah Pekerjaan
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 px-2">
              <div className="grid">
                <div className="flex items-center gap-2 mb-3">
                  <div className="rounded-full bg-orange-400 w-3 h-3" />
                  <h2 className="text-sm font-bold">Semua Pekerjaan</h2>
                </div>
                <div className="flex gap-2 flex-col relative overflow-y-auto h-96 scrollbar-hide">
                  {dataDijadwalkan.map((item, idx) => {
                    if (dataDijadwalkan.length !== 0) {
                      return <TaskCardDijadwalkan key={idx} dataTask={item} />;
                    } else {
                      return (
                        <>
                          <p className="text-center text-xs">Tidak Ada Data</p>
                        </>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="grid">
                <div className="flex items-center gap-2 mb-3">
                  <div className="rounded-full bg-blue-400 w-3 h-3" />
                  <h2 className="text-sm font-bold">Berlangsung</h2>
                </div>
                <div className="flex gap-2 flex-col relative overflow-y-auto h-96 scrollbar-hide">
                  {dataBerlangsung.map((item, idx) => {
                    if (dataBerlangsung.length !== 0) {
                      return <TaskCardBerlangsung key={idx} dataTask={item} />;
                    } else {
                      return (
                        <>
                          <p className="text-center text-xs">Tidak Ada Data</p>
                        </>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="grid">
                <div className="flex items-center gap-2 mb-3">
                  <div className="rounded-full bg-green-400 w-3 h-3" />
                  <h2 className="text-sm font-bold">Selesai</h2>
                </div>
                <div className="flex gap-2 flex-col relative overflow-y-auto h-96 scrollbar-hide">
                  {dataSelesai.map((item, idx) => {
                    if (dataSelesai.length !== 0) {
                      return <TaskCardSelesai key={idx} dataTask={item} />;
                    } else {
                      return (
                        <>
                          <p className="text-center text-xs">Tidak Ada Data</p>
                        </>
                      );
                    }
                  })}
                </div>
              </div>
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
