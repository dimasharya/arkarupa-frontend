import React, { useState, useEffect } from "react";
import { Button, Input, Label } from "@windmill/react-ui";
import {
  Print,
  FilePdf,
  EditIcon,
  ChevronLeft,
  TrashIcon,
  Download,
} from "../../icons/index";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Pagination,
} from "@windmill/react-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCog,
  faPlusCircle,
  faFileAlt,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "react-tooltip";
import Searchboxitems from "../../components/Searchbox/Searchboxitems";
import Itemcontrol from "../../components/Projectbudget/Workspace/Itemcontrol";
import NumberFormat from "react-number-format";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import Moment from "react-moment";
import 'moment/locale/id';
import {IoDocumentTextOutline} from "react-icons/io5"

export default function Workspace() {
  return (
    <>
      <div className="grid grid-flow-row gap-4">
        <div className="grid grid-flow-col grid-cols-8 py-2 gap-4">
          <div className="flex border p-2 h-52 rounded-md bg-white text-center items-center justify-center text-gray-300 hover:text-black hover:shadow-inner cursor-pointer duration-150 ease-in-out">
            <div className="font-semibold">
              <FontAwesomeIcon icon={faPlusCircle} size="3x" />
              <Label className="pt-1 text-gray-500">Tambah Baru</Label>
            </div>
          </div>
          <div className="flex border py-8 px-8 h-52 rounded-md bg-white text-gray-300 hover:text-black hover:border-gray-300 hover:shadow-md cursor-pointer duration-150 ease-in-out">
            <div className="w-full self-end">
              <IoDocumentTextOutline className="flex h-20 w-full text-gray-300" />
              <h5 className="mt-2 text-sm truncate">RAB BSD City Botanical Park</h5>
              <h4 className="font-black text-right text-xl">.RAB</h4>
            </div>
          </div>
        </div>
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
      </div>
    </>
  );
}
