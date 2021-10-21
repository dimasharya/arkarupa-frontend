import React from "react"
import { Avatar, Button } from "@windmill/react-ui";
import { ArrowCircleRight } from "../../icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "react-tooltip";
import ProgressBar from "../Progresbar/Progresbar";
import Badge from "../Badge/Badge";

function ProjectCard ({name, category, loc, owner, team, pm, progress, status, date}) {
    return (
        <div className="overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 w-80 py-4 px-8 bg-white shadow-md rounded-3xl">
          <div className="my-2">
            <h2 className="block text-lg font-black truncate ...">
              {name}
            </h2>
            <label className="text-xs font-semibold text-gray-500">
              {category}
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
            <div className="flex flex-col">
              <h6 className="text-xs font-semibold text-gray-500">
                Location
              </h6>
              <p className="text-xs font-bold leading-tight">
                {loc}
              </p>
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
                Owner
              </label>
              <div className="text-xs font-bold">{owner}</div>
            </div>
          </div>
          {/* <div className="flex text-xs font-semibold text-gray-500 mt-2 pb-1">
            <label className="w-10/12">Team</label>
            <label className="text-center w-2/12">PM</label>
          </div>
          <div className="flex mb-1">
            <div className="w-10/12">
              <button className="rounded-full" data-tip data-for="btn-1">
                <div
                  className="relative rounded-full inline-block w-9 h-9 align-midle border-2 border-white"
                  aria-hidden="true"
                >
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </button>
              <Tooltip id="btn-1" place="top" effect="solid">
                Sentod Wibisono
              </Tooltip>
              <button className="rounded-full">
                <div
                  className="relative rounded-full inline-block w-9 h-9 align-midle -ml-2 border-2 border-white"
                  aria-hidden="true"
                >
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </button>
              <button className="rounded-full">
                <div
                  className="relative rounded-full inline-block w-9 h-9 align-midle -ml-2 border-2 border-white"
                  aria-hidden="true"
                >
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </button>
              <button className="rounded-full">
                <div
                  className="relative rounded-full inline-block w-9 h-9 align-midle -ml-2 border-2 border-white"
                  aria-hidden="true"
                >
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </button>
              <button className="rounded-full">
                <div
                  className="relative rounded-full inline-block w-9 h-9 align-midle -ml-2 border-2 border-white"
                  aria-hidden="true"
                >
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </button>
            </div>
            <div className="text-center w-2/12">
              <button className="rounded-full">
                <div
                  className="relative rounded-full inline-block w-9 h-9 align-midle border-2 border-white"
                  aria-hidden="true"
                >
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </button>
            </div>
          </div> */}
          <ProgressBar progress={progress} />
          <div className="flex justify-between items-center">
            <Badge status={status} />
            <Button icon={ArrowCircleRight} layout="link" />
          </div>
        </div>
    )
}

export default ProjectCard;