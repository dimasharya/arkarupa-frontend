import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@windmill/react-ui";
import { selectUser } from "../../reducer/AuthSlice";
import { OutlineCogIcon } from "../../icons";
import { LocationMarkerIcon, BriefcaseIcon, PhoneIcon, AcademicCapIcon } from "@heroicons/react/outline";

export default function UserProfile(params) {
  const user = useSelector(selectUser);

  let role;
  if (user.role === "pm") {
    role = "Project Manager";
  } else if (user.role === "spv") {
    role = "Supervisor";
  }

  return (
    <>
      <main className="profile-page">
        <section className="relative block h-500-px -mb-28 px-4">
          <div className="h-80 shadow-md rounded-t-lg bg-gradient-to-tr from-teal-200 to-lime-200"></div>
        </section>
        <section className="relative py-24 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md rounded-lg">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    {/* <div className="relative"> */}
                    <img
                      alt="..."
                      src={user.avatar}
                      className="shadow-md rounded-full p-2 bg-white h-auto align-middle border-none absolute max-w-150-px -m-24 -ml-20 lg:-ml-16"
                    />
                    {/* <div className="shadow-xl bg-black rounded-full h-auto align-middle border-none absolute max-w-150-px -m-16 -ml-20 lg:-ml-16" /> */}
                    {/* </div> */}
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Button iconLeft={OutlineCogIcon} size="small">
                        Ubah Profil
                      </Button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    {/* <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Friends
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="text-center mt-16">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    {user.name}
                  </h3>
                  <div className="flex justify-center items-center text-sm leading-normal mt-0 mb-2 font-bold uppercase">
                    <LocationMarkerIcon className="mr-2 text-gray-400 h-5 w-5" />
                    {user.address}
                  </div>
                  <div className="flex justify-center items-center text-sm leading-normal mt-0 mb-2">
                    <BriefcaseIcon className="mr-2 text-gray-400 h-5 w-5" />
                    {role}
                  </div>
                  <div className="flex justify-center items-center text-sm leading-normal mt-0 mb-2">
                    <PhoneIcon className="mr-2 text-gray-400 h-5 w-5" />
                    {user.phone}
                  </div>
                  <div className="flex justify-center items-center text-sm leading-normal mt-0 mb-2">
                    <AcademicCapIcon className="mr-2 text-gray-400 h-5 w-5" />
                    {user.education + " - " + user.college}
                  </div>
                  <div className="mb-1 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    {user.status}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
