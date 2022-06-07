import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "windmill-react-ui-kit";
import ProjectInfoCard from "../../components/Cards/SiteManager/ProjectInfoCard";
import TaskCardBerlangsung from "../../components/Cards/SiteManager/TaskCardBerlangsung";
import TaskCardDijadwalkan from "../../components/Cards/SiteManager/TaskCardDijadwalkan";
import TaskCardSelesai from "../../components/Cards/SiteManager/TaskCardSelesai";
import { ChevronLeft } from "../../icons";

export default function ProjectSM() {
    const dataProyek = {
        nama_proyek: "BSD Botanical Garden",
        pemilik: "PT. Bukit Serpong Damai",
        kategori: "Area Publik",
        alamat: "Jl. Telaga Golf Raya, Lengkong Gudang, Kec. Serpong, Kota Tangerang Selatan, Banten",
        progress: 20,
        pekerjaan: {
            total_pekerjaan: 120,
            pekerjaan_berlangsung: 10,
            pekerjaan_selesai: 4
        }
    }

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
      penanggung_jawab: "",
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
        <ProjectInfoCard dataProyek={dataProyek} />
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
        </div>
      </div>
    </>
  );
}
