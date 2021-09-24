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
  faSearch,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "react-tooltip";

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
        <TableContainer className="col-span-4">
          <Table>
            <TableHeader>
              <tr className="text-center">
                <TableCell>No</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Unit</TableCell>
                <TableCell>Volume</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total Amount</TableCell>
                <TableCell><FontAwesomeIcon icon={faCog} size="1x" /></TableCell>
              </tr>
            </TableHeader>
            <TableBody className="text-sm overflow-scroll">
              <TableRow className="hover:bg-yellow-50 focus:bg-yellow-100 ">
                <TableCell className="text-center">1</TableCell>
                <TableCell>
                  <p className="truncate">Pemasangan Besi Bertingkat</p>
                </TableCell>
                <TableCell className="text-center">
                <label
                    className="mr-2 text-xs font-black"
                    data-tip
                    data-for="table-cat"
                  >
                    PAW
                  </label>
                  <Tooltip id="table-cat" place="top" effect="solid">
                    Pekerjaan Awalan
                  </Tooltip>
                </TableCell>
                <TableCell className="text-center">m2</TableCell>
                <TableCell className="text-center">200</TableCell>
                <TableCell>Rp. 345.0000</TableCell>
                <TableCell>Rp. 34.000.000</TableCell>
                <TableCell className="text-center w-1/12">
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
            <div className="bg-gray-50 rounded-t-lg border-b">
              <h4 className="py-3 text-center text-xs font-semibold text-gray-500">
                SEARCH ITEM
              </h4>
            </div>
            <div className="grid gap-2 my-3 mx-4">
              <div className="flex border items-center rounded-md">
                <div className="text-center w-12 mx-1 border-r">
                  <FontAwesomeIcon icon={faSearch} size="xs" />
                </div>
                <input
                  placeholder="Type something ..."
                  className="w-full rounded-lg p-2 text-sm font-medium"
                ></input>
              </div>
              <div className="border rounded-md h-32 overflow-y-scroll divide-y divide-gray-200">
                <div
                  role="button"
                  className="py-2 px-3 hover:bg-yellow-50 focus:bg-yellow-50 truncate"
                >
                  <label
                    role="button"
                    className="mr-2 text-xs font-black"
                    data-tip
                    data-for="cat"
                  >
                    PAW
                  </label>
                  <label
                    role="button"
                    className="text-xs font-medium"
                    data-tip
                    data-for="item"
                  >
                    Pemasangan Besi Bertingkat Dengan Bekisting
                  </label>
                  <Tooltip id="cat" place="top" effect="solid">
                    Pekerjaan Awalan
                  </Tooltip>
                  <Tooltip id="item" place="bottom" effect="solid">
                    Pemasangan Besi Bertingkat Dengan Bekisting
                  </Tooltip>
                </div>
              </div>
              <div className="my-2">
                <Button className="w-full" size="small">
                  ADD ITEM
                </Button>
              </div>
            </div>
          </div>
          <div className="border rounded-lg bg-white transition duration-700 ease-in-out ">
            <div className="bg-gray-50 rounded-t-lg border-b">
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
                  <p className="text-sm font-medium leading-none">
                    Rp. 35.0000
                  </p>
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
