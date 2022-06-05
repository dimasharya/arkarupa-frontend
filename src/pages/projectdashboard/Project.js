import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "windmill-react-ui-kit";
import ProgressBar from "../../components/Progresbar/Progresbar";
import Tim from "../../components/Project/Tim";
import Table, {
  DisplayBadgeStatus,
  DisplayProgressBarSmall,
} from "../../components/Table/Table";
import { HeroPlusOutline, ChevronLeft } from "../../icons";

export default function Project() {
  const dataTim = [
    {
      nama: "Albert Suyono",
      role: "Site Manager",
      pic: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82",
    },
    {
      nama: "William Kartawijaya",
      role: "Supervisor",
      pic: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82",
    },
    {
      nama: "Suhadi Mustakim",
      role: "Supervisor",
      pic: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82",
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

  const columns = React.useMemo(
    () => [
      {
        Header: "Kode Pekerjaan",
        accessor: "kode_pekerjaan",
      },
      {
        Header: "Item Pekerjaan",
        accessor: "item_pekerjaan",
      },
      {
        Header: "Tanggal Pelaksanaan",
        accessor: "tanggal_pelaksanaan",
      },
      {
        Header: "Pelaksana",
        accessor: "pelaksana",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: DisplayBadgeStatus,
      },
      {
        Header: "Progress",
        accessor: "progress",
        Cell: DisplayProgressBarSmall,
      },
    ],
    []
  );
  return (
    <>
      <div className="flex gap-4 items-center my-2">
        <Link to="/app/project">
          <Button size="small" icon={ChevronLeft} layout="link" />
        </Link>
        <label className="text-base font-bold">Proyek</label>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 grid-flow-col gap-4">
          <div className="col-span-2 p-6 border border-gray-100 rounded-md bg-gradient-to-tr from-teal-200 to-lime-200">
            <div className="grid grid-cols-6 gap-4">
              <div className="pl-2 col-span-3">
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
          <div className="col-span-2 py-4 px-6 rounded-md text-white bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-black font-semibold leading-none px-2">
                  Penjadwalan
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
        <div className="grid grid-cols-7 gap-4">
          <div className=" col-span-5 p-6 bg-white rounded-lg border">
            <div className="flex flex-col">
              <h5 className="font-semibold mb-4 leading-none text-gray-900 dark:text-white">
                Pekerjaan
              </h5>
              <Table columns={columns} data={data} />
            </div>
          </div>
          <Tim dataTim={dataTim} />
        </div>
      </div>
    </>
  );
}
