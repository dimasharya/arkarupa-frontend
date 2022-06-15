import { Button } from "@windmill/react-ui";
import React, { useEffect, useState } from "react";
import ProjectCard from "../../components/Cards/ProjectCard";
import { PlusCircle } from "../../icons";
import "moment/locale/id";
import NewProjectForm from "./NewProjectForm";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../reducer/AuthSlice";
import { loadUserProject, projectSelectors, selectProject } from "../../reducer/ProjectSlice";
import {CollectionIcon, RefreshIcon, CheckIcon, UsersIcon, BriefcaseIcon} from "@heroicons/react/outline"

function ProjectDasborad() {

  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector(selectUser)
  const userProject = useSelector(projectSelectors.selectAll)
  const selectorProject = useSelector(selectProject)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUserProject({id: user._id}))
  }, [dispatch])

  function tonggleTambahProyek() {
    return(
      <Button
      onClick={() => setIsOpen(!isOpen)}
      size="small"
      iconLeft={PlusCircle}
      layout="outline"
    >
      <span className="text-xs">Tambah Proyek</span>
    </Button>
    )
  }

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
                <CollectionIcon className="h-4 w-4 text-black" />
              </div>
              <h3 className="mt-4 w-26 text-4xl font-bold">{selectorProject.total_proyek}</h3>
              <h4 className="mt-2 text-sm leading-none font-bold">
                Total Proyek
              </h4>
            </div>
            <div className="flex flex-col p-4 rounded-md  bg-black text-white">
              <div className="p-1 w-6 h-6 rounded-full bg-white">
              <RefreshIcon className="h-4 w-4 text-black" />
              </div>
              <h3 className="mt-4 w-26 text-4xl font-bold">{selectorProject.proyek_berlangsung}</h3>
              <h4 className="mt-2 text-sm leading-none font-bold">
                Proyek Berlangsung
              </h4>
            </div>
            <div className="flex flex-col p-4 rounded-md  bg-black text-white">
              <div className="p-1 w-6 h-6 rounded-full bg-white">
              <CheckIcon className="h-4 w-4 text-black" />
              </div>
              <h3 className="mt-4 w-26 text-4xl font-bold">{selectorProject.proyek_selesai}</h3>
              <h4 className="mt-2 text-sm leading-none font-bold">
                Proyek Selesai
              </h4>
            </div>
            <div className="flex flex-col p-4 rounded-md  bg-black text-white">
              <div className="p-1 w-6 h-6 rounded-full bg-white">
              <UsersIcon className="h-4 w-4 text-black" />
              </div>
              <h3 className="mt-4 w-26 text-4xl font-bold">10</h3>
              <h4 className="mt-2 text-sm leading-none font-bold">Pekerja</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-4 rounded-lg border">
        <div className="flex px-8 py-6 justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-1.5 w-7 h-7 rounded-full bg-black">
              <BriefcaseIcon className="h-4 w-4 text-white" />
            </div>
            <h5 className="font-semibold leading-none text-gray-900 dark:text-white">
              Proyek
            </h5>
          </div>
          {user.role === "pm" ? tonggleTambahProyek():""}
        </div>
        <div className="m-auto max-w-screen-xl">
          <ul className="flex my-2 p-4 flex-nowrap overflow-x-scroll overscroll-contain relative gap-6 scrollbar-hide">
            {userProject ? userProject.map((item, idx) => {
              return (
                <li key={idx}>
                  <ProjectCard dataProyek={item} />
                </li>
              );
            }) : ""}
          </ul>
        </div>
      </div>
      {/* Modal */}
      {isOpen && <NewProjectForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default ProjectDasborad;
