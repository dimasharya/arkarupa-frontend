import React, { useState, useEffect } from "react";
import { Button } from "@windmill/react-ui";
import {
  Print,
  FilePdf,
  EditIcon,
  ChevronLeft,
  TrashIcon,
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
import { faSearch, faCog } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "react-tooltip";
import Searchboxitems from "../../components/Searchbox/Searchboxitems";
import Itemcontrol from "../../components/Projectbudget/Workspace/Itemcontrol";
import NumberFormat from "react-number-format";

export default function BudgetDocuments() {
  const data = [
    {
      nama: "Pemasangan Besi Bertingkat Dengan Bekisting",
      category: "PAW",
      unit: "m2",
      volume: 200,
      price: 345000,
      total: 69000000,
    },
    {
      nama: "Pagar sementara seng gelombang tinggi 2 m",
      category: "PAW",
      unit: "m2",
      volume: 200,
      price: 345000,
      total: 69000000,
    },
    {
      nama: "Pengukuran dan pemasangan bowplank",
      category: "PAW",
      unit: "m2",
      volume: 200,
      price: 345000,
      total: 69000000,
    },
    {
      nama: "Pembongkaran Plesteran dengan Membersihkan",
      category: "PAW",
      unit: "m2",
      volume: 200,
      price: 345000,
      total: 69000000,
    },
    {
      nama: "Membersihkan Parit Samping Jalan Menggunakan Buruh",
      category: "PAW",
      unit: "m2",
      volume: 200,
      price: 345000,
      total: 69000000,
    },
  ];

  /// Table Area
  const [itemTable, setItemTable] = useState(data);
  const [pageTable, setPageTable] = useState(1);
  const [dataTable, setDataTable] = useState([]);
  const [totalResults, setTotalResult] = useState(itemTable.length);

  function onPageChangeTable(p) {
    setPageTable(p);
  }

  // Pagination
  //const totalResults = itemTable.length;
  const resultsPerPage = 10;

  useEffect(() => {
    setDataTable(
      itemTable.slice(
        (pageTable - 1) * resultsPerPage,
        pageTable * resultsPerPage
      )
    );
  }, [pageTable, totalResults, itemTable]);

  // Total Display

  const [totalDisplay, setTotalDisplay] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < itemTable.length; i++) {
      sum = sum + parseFloat(itemTable[i].total);
    }
    setTotalDisplay(sum);
  }, [itemTable]);

  /// Item Control Area

  const [itemControl, setItemcontrol] = useState("");
  const [isItemControl, setisItemcontrol] = useState(false);

  function hapusClick(props) {
    const data = [...itemTable];
    let indexData = 0;
    if (pageTable !== 0) {
      indexData = (pageTable - 1) * 10 + props;
    } else {
      indexData = props;
    }
    data.splice(indexData, 1);
    setTotalResult(data.length);
    setItemTable(data);
  }

  function itemControlHandler(props) {
    if (props.mode === "edit") {
      editClick(props.data);
    } else {
      addItem(props.data);
    }
  }

  function editClick(props) {
    const data = dataTable[props];
    const dataEdit = {
      index: props,
      nama: data.nama,
      unit: data.unit,
      category: data.category,
      price: data.price,
      volume: data.volume,
      total: data.total,
      mode: "edit",
    };
    setItemcontrol(dataEdit);
    setisItemcontrol(true);
  }

  function submitItem(props) {
    const changedData = {
      nama: props.nama,
      unit: props.unit,
      category: props.category,
      price: props.price,
      volume: props.volume,
      total: props.total,
    };

    let newData = [];
    if (props.mode === "edit") {
      let indexData = 0;
      if (pageTable !== 0) {
        indexData = (pageTable - 1) * 10 + props.index;
      } else {
        indexData = props.index;
      }

      for (let index = 0; index < itemTable.length; index++) {
        if (index === indexData) {
          newData[index] = changedData;
        } else {
          newData[index] = itemTable[index];
        }
      }
    } else {
      newData = [...itemTable, changedData];
    }
    setItemTable(newData);
    setisItemcontrol(false);
  }

  function closeItemControl() {
    setisItemcontrol(false);
    setItemcontrol("");
  }

  /// Search Area

  const searchItem = [
    {
      id: "507f1f77bcf86cd799439011",
      nama: "Pemasangan Besi Bertingkat Dengan Bekisting",
      category: "PAW",
      unit: "m2",
      price: "345000",
    },
    {
      id: "507f191e810c19729de860ea",
      nama: "Pekerjaan Urugan Pasir Batu",
      category: "PAW",
      unit: "m3",
      price: "345000",
    },
  ];

  function addItem(props) {
    const itemId = props;
    let item = searchItem.find((item) => item.id === itemId);
    item = { ...item, mode: "add" };
    setItemcontrol(item);
    setisItemcontrol(true);
  }

  const [searchResult, setSearchresult] = useState(searchItem);

  function searchResultcontrol(props) {
    const searchKey = props.target.value;
    const filtered = searchItem.filter((item) => {
      return item.nama.toLowerCase().includes(searchKey.toLowerCase());
    });
    if (searchKey !== "") {
      setSearchresult(filtered);
    } else {
      setSearchresult(searchItem);
    }
  }

  return (
    <>
      <div className="flex py-2 px-2">
        <div className="flex flex-auto justify-between items-center">
          <div className="flex gap-4 items-center">
            <Button size="small" icon={ChevronLeft} layout="link" />
            <label className=" text-base font-bold">
              BSD City Botanical Park
              <span className="text-sm font-thin"> - Biaya Proyek</span>
            </label>
          </div>
          <div className="flex gap-4 items-center">
            <label className="text-xs">
              Terakhir Diperbaharui : 22 Aug 2021 18.45 PM
            </label>
            <Button size="small" iconLeft={Print} layout="outline">
              <span>Cetak</span>
            </Button>
            <Button size="small" iconLeft={FilePdf} layout="outline">
              <span>Unduh</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 inline-flex gap-4 my-4">
        <div className="col-span-4">
          <TableContainer>
            <Table>
              <TableHeader>
                <tr className="text-center">
                  <TableCell>Item Pekerjaan</TableCell>
                  <TableCell>Kategori</TableCell>
                  <TableCell>Satuan</TableCell>
                  <TableCell>Volume</TableCell>
                  <TableCell>Harga</TableCell>
                  <TableCell>Total Biaya</TableCell>
                  <TableCell>
                    <FontAwesomeIcon icon={faCog} size="1x" />
                  </TableCell>
                </tr>
              </TableHeader>
              <TableBody className="text-sm overflow-scroll">
                {dataTable.length !== 0 ? (
                  dataTable.map((idx, i) => (
                    <TableRow
                      key={i}
                      className="hover:bg-yellow-50 focus:bg-yellow-100 "
                    >
                      <TableCell>
                        <p className="truncate">{idx.nama}</p>
                      </TableCell>
                      <TableCell className="text-center">
                        <label
                          className="mr-2 text-xs font-black"
                          data-tip
                          data-for="table-cat"
                        >
                          {idx.category}
                        </label>
                        <Tooltip id="table-cat" place="top" effect="solid">
                          Pekerjaan Awalan
                        </Tooltip>
                      </TableCell>
                      <TableCell className="text-center">{idx.unit}</TableCell>
                      <TableCell className="text-center">
                        {idx.volume}
                      </TableCell>
                      <TableCell>
                        <NumberFormat
                          value={idx.price}
                          displayType={"text"}
                          thousandSeparator
                          prefix={"Rp. "}
                        />
                      </TableCell>
                      <TableCell>
                        <NumberFormat
                          value={idx.total}
                          displayType={"text"}
                          thousandSeparator
                          prefix={"Rp. "}
                        />
                      </TableCell>
                      <TableCell className="text-center w-1/12">
                        <Button
                          className="hover:text-green-600"
                          onClick={() =>
                            itemControlHandler({ data: i, mode: "edit" })
                          }
                          size="small"
                          icon={EditIcon}
                          layout="link"
                        />
                        <Button
                          className="hover:text-red-700"
                          onClick={() => hapusClick(i)}
                          size="small"
                          icon={TrashIcon}
                          layout="link"
                        />
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell className="text-center" colSpan="7">
                      Tidak Ada Data
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <div className="flex justify-between bg-white border-t px-8 py-3 items-center">
              <h4 className="text-sm font-medium">Total : </h4>
              <h4 className="text-lg font-bold">
                <NumberFormat
                  value={totalDisplay}
                  displayType={"text"}
                  thousandSeparator
                  prefix={"Rp. "}
                />
              </h4>
            </div>
            <TableFooter>
              <Pagination
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                onChange={onPageChangeTable}
                label="Table navigation"
              />
            </TableFooter>
          </TableContainer>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border rounded-lg bg-white">
            <div className="bg-gray-50 rounded-t-lg border-b">
              <h4 className="py-3 text-center text-xs font-semibold text-gray-500">
                PENCARIAN ITEM PEKERJAAN
              </h4>
            </div>
            <div className="grid gap-2 my-3 mx-4">
              <div className="flex border items-center rounded-md">
                <div className="text-center w-10 mx-1 border-r">
                  <FontAwesomeIcon icon={faSearch} size="xs" />
                </div>
                <input
                  placeholder="Tuliskan Sesuatu ..."
                  className="w-full rounded-lg p-2 text-sm font-medium"
                  onChange={searchResultcontrol}
                />
              </div>
              <div className="border rounded-md h-32 overflow-y-scroll divide-y divide-gray-200">
                {searchResult.map((item, idx) => (
                  <Searchboxitems
                    key={idx}
                    idx={idx}
                    nama={item.nama}
                    category={item.category}
                    addItem={() =>
                      itemControlHandler({ data: item.id, mode: "add" })
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          {isItemControl ? (
            <Itemcontrol
              index={itemControl.index}
              nama={itemControl.nama}
              unit={itemControl.unit}
              category={itemControl.category}
              price={itemControl.price}
              volume={itemControl.volume}
              total={itemControl.total}
              mode={itemControl.mode}
              closeItemControl={closeItemControl}
              submitItem={submitItem}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
