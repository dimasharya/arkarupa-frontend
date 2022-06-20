import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { projectSelectedSelectorById } from "../../../reducer/ProjectSelectedSlice";
import ProgressBar from "../../Progresbar/Progresbar"

export default function ProjectInfoCard({dataProyek}) {
  let {projectId} = useParams()

  const Proyek = useSelector((state) =>
    projectSelectedSelectorById(state, projectId)
  );

  const {nama_proyek, kategori, pemilik, alamat, progress, pekerjaan} = dataProyek
    return(
        <div className="grid grid-flow-col gap-4">
          <div className=" p-6 border border-gray-100 rounded-md bg-gradient-to-tr from-teal-200 to-lime-200">
            <div className="grid grid-cols-9 gap-4">
              <div className="pl-2 col-span-5">
                <p className="text-2xl font-bold truncate">
                  {Proyek ? Proyek.nama_proyek : <p className="w-full animate-pulse bg-lime-700" />}
                </p>
                <h4 className="text-sm font-semibold mb-4">{Proyek ? Proyek.kategori : <p className="w-full animate-pulse bg-lime-700" />}</h4>
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
                    {Proyek ? Proyek.pemilik : <p className="w-full animate-pulse bg-lime-700" />}
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
                    {Proyek ? Proyek.alamat : <p className="w-full animate-pulse bg-lime-700" />}
                  </p>
                </div>
                <div className="mr-4">
                  <ProgressBar progress={Proyek ? Proyek.progress : <p className="w-full animate-pulse bg-lime-700" />} />
                </div>
              </div>
              <div className="col-span-4 grid grid-cols-3 gap-2">
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
                  <h3 className="mt-4 w-26 text-4xl font-bold">{pekerjaan.total_pekerjaan}</h3>
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
                  <h3 className="mt-4 w-26 text-4xl font-bold">{pekerjaan.pekerjaan_berlangsung}</h3>
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
                  <h3 className="mt-4 w-26 text-4xl font-bold">{pekerjaan.pekerjaan_selesai}</h3>
                  <h4 className="mt-2 text-sm leading-none font-bold">
                    Pekerjaan Selesai
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
};
