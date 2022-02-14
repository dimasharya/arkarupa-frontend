import React from "react";
import { Button, Avatar, Badge } from "@windmill/react-ui";
import { ChevronLeft, Print, FilePdf, Download, TrashIcon, EditIcon } from "../../icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFile} from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";

export default function UserManagement () {

    return (
        <>
        {/* <div className="flex py-2 px-2">
        <div className="flex flex-auto justify-between items-center">
          <div className="flex gap-4 items-center">
            <label className=" text-base font-bold">
              User Management
            </label>
          </div>
        </div>
      </div> */}
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-4">
            <div className="bg-white p-4 rounded-xl">
          <div className="flex items-center text-sm font-semibold justify-between">
            <div className="flex px-4 items-center">
              
            <h4 className="pl-3">MANAJEMEN PENGGUNA</h4>
            </div>
            <div className="flex border mr-2 items-center rounded-md hover:border-gray-400 duration-150">
              <div className="text-center w-10 mx-1 border-r">
                <FontAwesomeIcon icon={faSearch} size="xs" />
              </div>
              <input
                placeholder="Cari pengguna ..."
                className="w-full rounded-r-md p-2 text-sm font-medium"
              />
            </div>
          </div>
          <div className=" mt-3 p-2 rounded-lg bg-gray-50">
            <ul className="relative h-80 overflow-y-scroll">
              <li className="flex flex-row p-4 items-center border gap-4 bg-white hover:border-gray-300 hover:shadow-sm duration-150 rounded-md mb-2">
                <div className="flex flex-row gap-4 px-4 w-2/6 items-center">
                <Avatar
                className="align-middle"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt=""
                aria-hidden="true"
              />
                <label className="truncate text-sm font-semibold">Sentot Wibisono</label>
                </div>
                <div className="flex flex-col w-1/6">
                  <label className="text-xs font font-semibold text-gray-500">Jabatan</label>
                  <label className="truncate text-sm">Manajer Proyek</label>
                </div>
                <div className="flex w-1/6">
                <Badge type="success">Aktif</Badge>
                </div>
                <div className="flex flex-col w-1/6">
                  <label className="text-xs font font-semibold text-gray-500">Terakhir Diperbarui</label>
                  <label className="text-sm"><Moment locale="id" fromNow>12/01/2021 16:31:00</Moment></label>
                </div>
                <div className="flex gap-2 w-1/">
                  <Button icon={EditIcon} size="small" layout="primary" />
                  <Button className="text-white bg-red-700 border border-transparent active:bg-red-600 hover:bg-red-700 focus:ring focus:ring-red-300" icon={TrashIcon} size="small" layout="danger" />
                </div>
              </li>
            </ul>
          </div>
        </div>
            </div>
            <div className="flex flex-col border border-gray-500"></div>
        </div>
        </>
    )

}