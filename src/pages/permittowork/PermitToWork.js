import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFile } from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment"
import {
  Print,
  Download,
} from "../../icons/index";
import { Button } from "@windmill/react-ui";


export default function PermitToWork(params) {
  
  return (
    <>
    <div className="bg-white p-4 rounded-xl">
          <div className="flex items-center text-sm font-semibold justify-between">
            <div className="flex px-4 items-center">
              <FontAwesomeIcon icon={faFile} />
            <h4 className="pl-3">DOKUMEN RANCANGAN ANGGARAN BIAYA</h4>
            </div>
            <div className="flex border mr-2 items-center rounded-md hover:border-gray-400 duration-150">
              <div className="text-center w-10 mx-1 border-r">
                <FontAwesomeIcon icon={faSearch} size="xs" />
              </div>
              <input
                placeholder="Cari dokumen ..."
                className="w-full rounded-r-md p-2 text-sm font-medium"
              />
            </div>
          </div>
          <div className=" mt-3 p-2 rounded-lg shadow-inner">
            <ul className="relative h-80 overflow-y-scroll">
              <li className="flex flex-row p-4 items-center border gap-4 bg-white hover:border-gray-300 hover:shadow-sm duration-150 rounded-md mb-2">
                <div className="flex flex-row gap-4 px-4 w-2/6 items-center">
                  <FontAwesomeIcon icon={faFile} size="lg" />
                <label className="truncate text-sm font-semibold">RAB BSD City Botanical Park</label>
                </div>
                <div className="flex flex-col w-2/6">
                  <label className="text-xs font font-semibold text-gray-500">Proyek</label>
                  <label className="truncate text-sm">BSD Botanical Park</label>
                </div>
                <div className="flex flex-col w-1/6">
                  <label className="text-xs font font-semibold text-gray-500">Terakhir Diperbarui</label>
                  <label className="text-sm"><Moment locale="id" fromNow>12/01/2021 16:31:00</Moment></label>
                </div>
                <div className="flex gap-2 w-1/">
                  <Button size="small" layout="outline">Buka</Button>
                  <Button icon={Print} size="small" layout="outline" />
                  <Button icon={Download} size="small" layout="outline" />
                </div>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
}
