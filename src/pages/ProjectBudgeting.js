import React from "react";
import { Button } from "@windmill/react-ui";
import { Print, FilePdf, EditIcon, MinusCirlce } from "../icons/index";
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
  faPaintRoller,
  faRulerHorizontal,
  faLayerGroup,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

function ProjectBudgeting() {
  return (
    <>
      <div className="flex py-4 bg-white px-8 border rounded-2xl">
        <div className="flex flex-auto justify-between items-center">
          <label className="text-sm font-bold">
            BSD City Botanical Park
            <span className="text-xs font-thin"> | Project Budget</span>
          </label>
          <div className="flex gap-4 items-center">
            <label className="text-xs">
              Last Updated : 22 Aug 2021 18.45 PM
            </label>
            <Button size="small" iconLeft={Print} layout="outline">
              <span>Print</span>
            </Button>
            <Button size="small" iconLeft={FilePdf} layout="outline">
              <span>Download</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 my-4">
        <TableContainer className="col-span-4 h-full">
          <Table>
            <TableHeader>
              <tr className="text-center">
                <TableCell>No</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Unit</TableCell>
                <TableCell>Volume</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total Amount</TableCell>
                <TableCell></TableCell>
              </tr>
            </TableHeader>
            <TableBody className="text-sm overflow-scroll">
              <TableRow className="hover:bg-yellow-50 focus:bg-yellow-100 ">
                <TableCell className="text-center">1</TableCell>
                <TableCell className="truncate">
                  Pemasangan Besi Bertingkat
                </TableCell>
                <TableCell className="text-center">m2</TableCell>
                <TableCell className="text-center">200</TableCell>
                <TableCell>Rp. 345.0000</TableCell>
                <TableCell>Rp. 34.000.000</TableCell>
                <TableCell className="w-1/12">
                  <Button size="small" icon={EditIcon} layout="link" />
                  <Button size="small" icon={MinusCirlce} layout="link" />
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-yellow-50 focus:bg-yellow-100 ">
                <TableCell className="text-center">1</TableCell>
                <TableCell className="truncate">
                  Pemasangan Besi Bertingkat
                </TableCell>
                <TableCell className="text-center">m2</TableCell>
                <TableCell className="text-center">200</TableCell>
                <TableCell>Rp. 345.0000</TableCell>
                <TableCell>Rp. 34.000.000</TableCell>
                <TableCell className="w-1/12">
                  <Button size="small" icon={EditIcon} layout="link" />
                  <Button size="small" icon={MinusCirlce} layout="link" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <TableFooter></TableFooter>
        </TableContainer>
        <div className="grid gap-4">
        <div className="border rounded-lg bg-white">
          <div className="bg-gray-50  border-b">
            <h4 className="py-3 text-center text-xs font-semibold text-gray-500">
              SEARCH ITEM
            </h4>
          </div>
          <div className="py-3 px-4">
          </div>
        </div>
        <div className="border rounded-lg bg-white">
          <div className="bg-gray-50  border-b">
            <h4 className="py-3 text-center text-xs font-semibold text-gray-500">
              ITEM CONTROL
            </h4>
          </div>
          <div className="py-3 px-4">
            <div className="flex py-1 items-center">
              <div className="p-2 text-center w-2/12">
                <FontAwesomeIcon icon={faPaintRoller} size="sm" />
              </div>
              <div className="mx-2">
                <label className="block text-xs font-light text-gray-500">
                  Item
                </label>
                <p className="text-sm font-medium leading-none">
                  Pemasangan Besi Bertingkat
                </p>
              </div>
            </div>
            <div className="flex py-1 items-center">
              <div className="p-2 text-center w-2/12">
                <FontAwesomeIcon icon={faLayerGroup} size="sm" />
              </div>
              <div className="mx-2">
                <label className="block text-xs font-light text-gray-500">
                  Category
                </label>
                <p className="text-sm font-medium leading-none">
                  Pekerjaan Struktur
                </p>
              </div>
            </div>
            <div className="flex py-1 items-center">
              <div className="p-2 text-center w-2/12">
                <FontAwesomeIcon icon={faDollarSign} size="sm" />
              </div>
              <div className="mx-2">
                <label className="block text-xs font-light text-gray-500">
                  Price
                </label>
                <p className="text-sm font-medium leading-none">Rp. 35.0000</p>
              </div>
            </div>
            <div className="flex py-1 items-center">
              <div className="p-2 text-center w-2/12">
                <FontAwesomeIcon icon={faRulerHorizontal} size="sm" />
              </div>
              <div className="mx-2">
                <label className="block text-xs font-light text-gray-500">
                  Volume
                </label>
                <input
                  className="border border-white rounded-md text-sm font-medium px-2 py-1 hover:border-gray-200"
                  placeholder="0"
                ></input>
              </div>
            </div>
            <div className="mx-4 mb-4">
              <label className="block text-xs font-light text-gray-500">
                Total
              </label>
              <h4 className="text-lg font-bold">Rp. 10.135.000</h4>
            </div>
            <div className="my-2">
            <Button className="w-full" size="small">
              SUBMIT
            </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default ProjectBudgeting;
