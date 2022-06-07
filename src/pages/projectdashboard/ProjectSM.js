import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "windmill-react-ui-kit";
import TaskCardBerlangsung from "../../components/Cards/SiteManager/TaskCardBerlangsung";
import TaskCardDijadwalkan from "../../components/Cards/SiteManager/TaskCardDijadwalkan";
import TaskCardSelesai from "../../components/Cards/SiteManager/TaskCardSelesai";
import ProgressBar from "../../components/Progresbar/Progresbar";
import { ChevronLeft } from "../../icons";

export default function ProjectSM() {
  const dataDijadwalkan = [
    {
      id: "xxxx",
      kode_pekerjaan: "BBG000001",
      nama_pekerjaan: "Galian Tanah 60 CM",
      volume: 245,
      satuan: "m3",
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
      tanggal_mulai: "2022-06-06",
      tanggal_selesai: "2022-06-10",
      status: "Selesai",
      penanggung_jawab: "Sentot Wibisono",
      progress: "100",
      permit_to_work: "null",
    },
  ];
  return (
    <>
      <div className="flex gap-4 items-center my-2">
        <Link to="/app/project">
          <Button size="small" icon={ChevronLeft} layout="link" />
        </Link>
        <label className="text-base font-bold">Proyek</label>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-flow-col gap-4">
          <div className=" p-6 border border-gray-100 rounded-md bg-gradient-to-tr from-teal-200 to-lime-200">
            <div className="grid grid-cols-9 gap-4">
              <div className="pl-2 col-span-6">
                <p className="text-2xl font-bold truncate">
                  BSD Botanical Garden
                </p>
                <h4 className="text-sm font-semibold mb-4">Area Publik</h4>
                <div className="flex py-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <p className="ml-2 text-sm font-semibold">
                    Bukit Serpong Damai
                  </p>
                </div>
                <div className="flex py-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="ml-2 text-sm font-semibold truncate">
                    Tanggerang
                  </p>
                </div>
                <div className="mr-4">
                  <ProgressBar progress="20" />
                </div>
              </div>
              <div className="col-span-3 grid grid-cols-3 gap-2">
                <div className="flex flex-col p-4 rounded-md bg-black text-white">
                  <div className="p-1 w-6 h-6 rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
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
                  <h3 className="mt-4 w-26 text-4xl font-bold">10</h3>
                  <h4 className="mt-2 text-sm leading-none font-bold">
                    Total Pekerjaan
                  </h4>
                </div>
                <div className="flex flex-col p-4 rounded-md  bg-black text-white">
                  <div className="p-1 w-6 h-6 rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 w-26 text-4xl font-bold">10</h3>
                  <h4 className="mt-2 text-sm leading-none font-bold">
                    Pekerjaan Berlangsung
                  </h4>
                </div>
                <div className="flex flex-col p-4 rounded-md  bg-black text-white">
                  <div className="p-1 w-6 h-6 rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 w-26 text-4xl font-bold">10</h3>
                  <h4 className="mt-2 text-sm leading-none font-bold">
                    Pekerjaan Selesai
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        </div>
      </div>
    </>
  );
}
