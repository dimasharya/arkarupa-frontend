import React from "react"
import { Avatar, Badge, Button } from "@windmill/react-ui";
import { ArrowCircleRight } from "../../icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "react-tooltip";

function ProjectCard ({name, category, loc, owner, team, pm, status, date}) {
    return (
        <div className="border py-5 px-7 bg-white shadow-md rounded-3xl">
          <div className="my-2">
            <label className="block text-xl mb-1 font-black truncate ...">
              {name}
            </label>
            <label className="text-sm font-semibold text-gray-500">
              {category}
            </label>
          </div>
          <div className="flex py-2 mt-2">
            <div className="p-2 ml-2 mr-4 items-center text-center">
              <FontAwesomeIcon
                className="text-gray-500"
                icon={faMapMarkerAlt}
                size="lg"
              />
            </div>
            <div className="w-11/12">
              <label className="block text-xs font-semibold text-gray-500">
                Location
              </label>
              <div className="text-sm font-bold leading-tight">
                {loc}
              </div>
            </div>
          </div>
          <div className="flex py-2">
            <div className="p-2 ml-2 mr-4 items-center text-center">
              <FontAwesomeIcon
                className="text-gray-500"
                icon={faUserTie}
                size="lg"
              />
            </div>
            <div className="w-11/12">
              <label className="block text-xs font-semibold text-gray-500">
                Owner
              </label>
              <div className="text-sm font-bold">{owner}</div>
            </div>
          </div>
          <div className="flex text-xs font-semibold text-gray-500 mt-4 pb-1">
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
          </div>
          <Badge className="block" type="warning">
            {status}
          </Badge>
          <div className="flex justify-between items-center mt-1 px-2">
            <label className="text-xs font-semibold text-gray-500">
              {date}
            </label>
            <Button icon={ArrowCircleRight} layout="link" />
          </div>
        </div>
    )
}

export default ProjectCard;