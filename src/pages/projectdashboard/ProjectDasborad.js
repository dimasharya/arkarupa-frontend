import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "@windmill/react-ui";
import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/Cards/ProjectCard";
import { PlusCircle } from "../../icons";
import Moment from "react-moment";
import 'moment/locale/id';

function ProjectDasborad() {
  const act = [
    {
      person: "Sentot Wibisono",
      text: "memperbarui item pekerjaan Pembesian Pondasi Dasar pada BSD Botanical Park project",
      date: "Wed Oct 13 2021 06:35:27 GMT+0700",
    },
    {
      person: "James Kristiawan",
      text: "memperbarui item pekerjaan  Pembesian Pondasi Dasar pada BSD Botanical Park project",
      date: "Wed Oct 13 2021 05:35:27 GMT+0700",
    },
    {
      person: "Ibnu Sina",
      text: "memperbarui item pekerjaan  Pembesian Pondasi Dasar pada BSD Botanical Park project",
      date: "Wed Oct 13 2021 03:35:27 GMT+0700",
    },
    {
      person: "Amalia Azzara",
      text: "memperbarui item pekerjaan Pembesian Pondasi Dasar pada BSD Botanical Park project",
      date: "Wed Oct 13 2021 06:46:27 GMT+0700",
    },
    {
      person: "Sentot Wibisono",
      text: "memperbarui item pekerjaan Pembesian Pondasi Dasar pada BSD Botanical Park project",
      date: "Oct 01 2021 06:35:27 GMT+0700",
    },
  ];

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

  const [activity, setActivity] = useState(act);
  const [project, setProject] = useState(dataProject);

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
      <div className="grid gap-4 grid-cols-3">
        <div className="border rounded-lg py-4 px-6 bg-white text-black">
          <h4 className="text-sm font-bold">Data Proyek</h4>
          <div className="flex flex-row py-4 divide-x text-center">
            <div className="px-4">
              <h6 className="text-xs font-semibold text-gray-500">
                Total Proyek
              </h6>
              <h2 className="text-2xl font-black">45</h2>
            </div>
            <div className="px-4">
              <h6 className="text-xs font-semibold text-gray-500">
                Proyek Berjalan
              </h6>
              <h2 className="text-2xl font-black">5</h2>
            </div>
            <div className="px-4">
              <h6 className="text-xs font-semibold text-gray-500">
                Proyek Selesai
              </h6>
              <h2 className="text-2xl font-black">36</h2>
            </div>
          </div>
          <Button size="small" iconLeft={PlusCircle} layout="primary">
            <span className="text-xs">Buat Proyek Baru</span>
          </Button>
        </div>
        <div className="border col-span-2 rounded-lg bg-green-700"></div>
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
      <div className="flex">
        <div className="border bg-white rounded-lg w-full h-full py-4 px-6">
          <h4 className="text-sm font-black">Aktivitas Terakhir</h4>
          <div className="my-4 px-4 overflow-y-auto overscroll-y-contain h-60">
            <ul>
              <div className="text-xs font-bold text-gray-500 mb-1">Hari ini</div>
              {activity.map((item, idx) => {
                return (
                  <li key={idx}>
                    <div className="flex mx-2 my-4 gap-6">
                      <div
                        className="relative rounded-full inline-block w-8 h-8 align-midle"
                        aria-hidden="true"
                      >
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="">
                        <h4 className="text-sm font-semibold">
                          <span className="font-black">{item.person}</span>{" "}
                          {item.text}
                        </h4>
                        <h6 className="text-xs font-semibold text-gray-500">
                          <Moment locale="id" fromNow>{item.date}</Moment>
                        </h6>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDasborad;
