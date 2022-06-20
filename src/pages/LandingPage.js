import { Button } from "@windmill/react-ui";
import { Link } from "react-router-dom";

import LogoHeader from "../assets/img/arkalogo.png";

export default function LandingPage(params) {
  return (
    <div>
      <div className="bg-white pt-4 pr-8 pb-4 pl-8">
        <nav className="w-full bg-top bg-cover">
          <div className="max-w-screen-2xl md:flex-row flex w-full justify-between mt-auto mr-auto mb-auto ml-auto">
            <div className="flex items-center">
              <img src={LogoHeader} className="w-auto h-6 " />
            </div>
            <div className="md:justify-start hidden md:flex flex justify-center items-center">
              <Link to="/login">
                <Button layout="primary">Masuk</Button>
              </Link>
            </div>
            {/* <div className="md:hidden flex items-center">
              <div className="outline-none mobile-menu-button">
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-green-500"
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0
                24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div> */}
          </div>
          <div className="hidden mobile-menu">
            <div className="">
              <div className="active">
              <Link to="/login">
                <Button layout="primary" size="small">Masuk</Button>
              </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div
        className="bg-white max-w-screen-2xl flex flex-col items-center mr-auto ml-auto pt-16 pr-4 pb-16 pl-4
        relative lg:flex-row lg:py-32 xl:py-48 md:px-8"
      >
        <div
          className="lg:w-1/2 lg:justify-end lg:bottom-0 lg:left-0 lg:items-center flex w-full h-full justify-center
          items-center"
        >
          <img
            src="https://i.imgur.com/DBK8aAb.png"
            className="h-auto w-full lg:w-auto lg:h-full object-contain
          object-top"
          />
        </div>
        <div className="xl:pr-32 lg:max-w-screen-xl flex justify-end mr-auto ml-auto relative max-w-xl">
          <div className="lg:pr-5 lg:max-w-lg lg:mb-16 ml-0">
            <div className="mb-6 max-w-xl">
              <p
                className="inline-block font-semibold text-xs tracking-wider mb-4 pt-1 pr-3 pb-1 pl-3 uppercase
                bg-pink-500 text-pink-200 rounded-2xl"
              >
                Brand new
              </p>
              <div className="max-w-lg sm:text-4xl sm:leading-none text-gray-900 mb-6 ml-0">
                <p
                  className="sm:text-4xl sm:leading-none font-bold text-3xl tracking-tight ml-0
                  text-gray-900"
                >
                  Write anything and start
                </p>
                <p
                  className="sm:text-4xl sm:leading-none inline-block font-bold text-3xl tracking-tight mr-2 ml-0
                  text-gray-900"
                >
                  being
                </p>
                <p
                  className="sm:text-4xl sm:leading-none inline-block font-bold text-3xl tracking-tight ml-0
                  text-blue-700"
                >
                  creative
                </p>
              </div>
              <p className="md:text-lg text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
            </div>
            <div className="flex flex-col md:flex-row">
              <input
                type="text"
                id="cd4feb67-612a-4a02-9e4c-78851353c680"
                className="h-12
              w-full rounded-md mb-2 pt-3 pr-4 pb-3 pl-4 text-xs font-normal shadow-sm border-2 bg-white text-white
              border-gray-300 md:mr-2 focus:border-blue-700 focus:outline-none focus:shadow-outline flex-grow transition
              duration-200 appearance-none"
                placeholder="Email Address"
                style={{ fontFamily: "Raleway" }}
              />
            </div>
            <div className="flex items-center mt-4">
              <button
                className="h-12 rounded-md mr-6 pr-6 pl-6
              text-medium font-semibold tracking-wide shadow-md inline-flex items-center justify-center bg-blue-700
              text-white transition duration-200 hover:bg-blue-900 focus:shadow-outline focus:outline-none"
                style={{ fontFamily: "Arial" }}
              >
                Get Early Access
              </button>
              <button
                className="h-12 rounded-md mr-6 pt-0
              pr-6 pl-6 text-medium font-semibold tracking-wide shadow-md inline-flex items-center justify-center
              bg-transparent text-blue-700 transition duration-200 hover:bg-blue-50 focus:shadow-outline focus:outline-none"
                style={{ fontFamily: "Arial" }}
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 w-full mr-auto ml-auto pt-16 pr-4
        pl-4"
      >
        <div className="grid gap-10 row-gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="sm:col-span-2">
            <p className="tracking-wide uppercase inline-flex font-bold text-xl text-gray-800">
              Company
            </p>
            <div className="lg:max-w-sm mt-6 ml-0">
              <p className="text-sm text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minimh.
              </p>
              <p className="text-sm mt-4 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="tracking-wide font-bold text-base text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="text-base mr-1 text-gray-800">Phone:</p>
              <p
                className="transition-colors duration-300 hover:text-deep-purple-800 text-base ml-0
                text-deep-purple-accent-400"
              >
                090-123-5678
              </p>
            </div>
            <div className="flex">
              <p className="text-base mr-1 text-gray-800">Email:</p>
              <p
                className="transition-colors duration-300 hover:text-deep-purple-800 text-base ml-0
                text-deep-purple-accent-400"
              >
                info@lorem.mail
              </p>
            </div>
            <div className="flex">
              <p className="text-base mr-1 text-gray-800">Address:</p>
              <p
                className="transition-colors duration-300 hover:text-deep-purple-800 text-base ml-0
                text-deep-purple-accent-400"
              >
                312 Lovely Street, LM
              </p>
            </div>
          </div>
          <div className="">
            <p className="tracking-wide font-bold text-base text-gray-900">
              Social
            </p>
            <div className="space-x-3 flex items-center mt-1">
              
            </div>
            <p className="text-sm mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
          </div>
        </div>
        <div className="border-t lg:flex-row flex flex-col-reverse justify-between pt-5 pb-10">
          <p className="text-sm text-gray-600">
            © Copyright 2022 PT. Arkarupa Cahaya Nusantara. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
