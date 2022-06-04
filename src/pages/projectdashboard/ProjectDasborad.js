import { Button } from "@windmill/react-ui";
import React, { useState } from "react";
import ProjectCard from "../../components/Cards/ProjectCard";
import { PlusCircle } from "../../icons";
import Moment from "react-moment";
import "moment/locale/id";
import NewProjectForm from "./NewProjectForm";

function ProjectDasborad() {
  const dataProject = [
    {
      name: "BSD City Botanical Park",
      category: "Area Publik",
      loc: "Sampora, Cisauk, Tanggerang, Banten",
      owner: "PT. Bukit Serpong Damai",
      team: "4",
      pm: "1",
      progress: 30,
      status: "On Progress",
      date: "20 July 2021",
    },
    {
      name: "Greenwood Mideterrania",
      category: "Perumahan",
      loc: "Widodomartani, Ngemplak, Sleman, Yogyakarta",
      owner: "PT. Barokah Jaya Realty",
      team: "4",
      pm: "1",
      progress: 80,
      status: "On Progress",
      date: "3 January 2021",
    },
    {
      name: "Mojopurno Eco Living",
      category: "Perumahan",
      loc: "Mojopurno, Wungu, Madiun",
      owner: "PT. Barokah Jaya Realty",
      team: "4",
      pm: "1",
      progress: 80,
      status: "On Progress",
      date: "3 January 2021",
    },
    {
      name: "Boulevard Hijau Raya",
      category: "Perumahan",
      loc: "Pejuang, Medan Satria, Kota Bekasi",
      owner: "PT. Barokah Jaya Realty",
      team: "4",
      pm: "1",
      progress: 80,
      status: "On Progress",
      date: "3 January 2021",
    },
  ];

  const [project, setProject] = useState(dataProject);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <div className="flex py-4 px-2">
        <div className="flex flex-auto justify-between items-center">
          <div className="flex gap-4 items-center">
            <label className="text-lg font-black">
              Project
              <span className="text-sm font-thin"> - Project Budget</span>
            </label>
          </div>
        </div>
      </div> */}
      <div className="grid gap-4 grid-flow-col rounded-lg grid-cols-5 bg-gradient-to-tr from-teal-200 to-lime-200">
        <div className="flex items-stretch col-span-3 py-6 px-10">
          <p className="self-center text-xl font-bold">
            Arkarupa Project Management App
          </p>
        </div>
        <div className="col-span-3 py-4 px-6 text-black">
          <div className="col-span-3 grid grid-cols-4 gap-2">
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
                Total Proyek
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
                Proyek Berlangsung
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
                Proyek Selesai
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 w-26 text-4xl font-bold">10</h3>
              <h4 className="mt-2 text-sm leading-none font-bold">Pekerja</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-4 rounded-lg shadow-md">
        <div className="flex px-8 py-6 justify-between items-center border-b shadow-sm">
          <p className="text-base font-bold">Proyek</p>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="small"
            iconLeft={PlusCircle}
            layout="outline"
          >
            <span className="text-xs">Tambah Proyek</span>
          </Button>
        </div>
        <div className="m-auto max-w-screen-xl">
          <ul className="flex my-2 p-4 flex-nowrap overflow-x-scroll overscroll-contain relative gap-6 scrollbar-hide">
            {project.map((item, idx) => {
              return (
                <li key={idx}>
                  <ProjectCard
                    name={item.name}
                    category={item.category}
                    loc={item.loc}
                    owner={item.owner}
                    team={item.team}
                    pm={item.pm}
                    progress={item.progress}
                    status={item.status}
                    date={item.date}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Modal */}
      {isOpen && <NewProjectForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default ProjectDasborad;
