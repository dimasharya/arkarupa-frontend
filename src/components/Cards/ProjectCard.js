import React from "react";
import { Button } from "@windmill/react-ui";
import { ArrowCircleRight } from "../../icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "../Progresbar/Progresbar";
import Badge from "../Badge/Badge";
import { Link, Outlet } from "react-router-dom";

function ProjectCard({dataProyek}) {

  const {_id, nama_proyek, kategori, progress, alamat, pemilik} = dataProyek
  const status = "on progress"
  return (
    <>
      <div className="overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 w-80 py-4 px-8 bg-white border shadow-md rounded-3xl">
        <div className="my-2">
          <h2 className="block text-lg font-black truncate">{nama_proyek}</h2>
          <label className="text-xs font-semibold text-gray-500">
            {kategori}
          </label>
        </div>
        <div className="flex py-1 mt-2 items-center">
          <div className="w-12 text-center">
            <FontAwesomeIcon
              className="text-gray-500"
              icon={faMapMarkerAlt}
              size="1x"
            />
          </div>
          <div className="flex flex-col w-56">
            <h6 className="text-xs font-semibold text-gray-500">Lokasi</h6>
            <p className="text-xs font-bold leading-tight">{alamat}</p>
          </div>
        </div>
        <div className="flex py-1 mt-2 items-center">
          <div className="w-12 text-center">
            <FontAwesomeIcon
              className="text-gray-500"
              icon={faUserTie}
              size="1x"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-gray-500">
              Pemilik
            </label>
            <div className="text-xs font-bold">{pemilik}</div>
          </div>
        </div>
        <ProgressBar progress={progress} />
        <div className="flex justify-between items-center">
          <Badge status={status} />
          <Link to={_id}>
            <Button icon={ArrowCircleRight} layout="link" />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default ProjectCard;
