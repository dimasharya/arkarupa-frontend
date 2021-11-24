import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Select,
} from "@windmill/react-ui";
import { EditIcon, PlusCircle, TrashIcon } from "../../icons/index";
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
import NumberFormat from "react-number-format";
import Item from "../../components/Projectbudget/Itemmanagement/Item";

export default function Itemmanagement() {
  const data = [
    {
      nama: "Pemasangan Besi Bertingkat Dengan Bekisting",
      category: "Struktur Utama",
      sign: "STU",
      unit: "m2",
      ingredients: [
        {
          item: "Mandor",
          category: "Pekerja",
          coefficient: "0,8",
          unit: "O.H",
          price: "90000",
          total: "72000",
        },
        {
          item: "Solar",
          category: "Bahan",
          coefficient: "0,4",
          unit: "Liter",
          price: "6500",
          total: "2600",
        },
      ],
      price: 74600,
      desc: "",
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

  function toggleSubmit(props) {
    const changedData = {
      nama: props.nama,
      category: props.category,
      sign: props.sign,
      unit: props.unit,
      ingredients: props.ingredients,
      price: props.price,
      desc: props.desc,
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
    //setisItemcontrol(false);
  }

  useEffect(() => {
    setDataTable(
      itemTable.slice(
        (pageTable - 1) * resultsPerPage,
        pageTable * resultsPerPage
      )
    );
  }, [pageTable, totalResults, itemTable]);

  /// Search Area

  //   const searchItem = [
  //     {
  //       id: "507f1f77bcf86cd799439011",
  //       nama: "Pemasangan Besi Bertingkat Dengan Bekisting",
  //       category: "PAW",
  //       unit: "m2",
  //       price: "345000",
  //     },
  //     {
  //       id: "507f191e810c19729de860ea",
  //       nama: "Pekerjaan Urugan Pasir Batu",
  //       category: "PAW",
  //       unit: "m3",
  //       price: "345000",
  //     },
  //   ];

  //   function addItem(props) {
  //     const itemId = props;
  //     let item = searchItem.find((item) => item.id === itemId);
  //     item = { ...item, mode: "add" };
  //     setItemcontrol(item);
  //     setisItemcontrol(true);
  //   }

    function searchResultcontrol(props) {
      const searchKey = props.target.value;
      const filtered = data.filter((item) => {
        return item.nama.toLowerCase().includes(searchKey.toLowerCase());
      });
      if (searchKey !== "") {
        setDataTable(filtered);
      } else {
        setDataTable(data);
      }
    }

  const [isOpen, setIsOpen] = useState(false);
  function toggleEdit(props) {
    setItemcontrol(props);
    setIsOpen(!isOpen);
  }

  function toggleNew() {
    const data = {
      nama: "",
      category: "",
      sign: "",
      unit: "",
      ingredients: "",
      price: "",
      desc: "",
    };
    setItemcontrol({ data: data, mode: "new" });
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="flex gap-4 my-3 mx-4">
        <div className="flex flex-grow border border-gray-200 items-center rounded-md bg-white hover:border-gray-400">
          <div className="text-center w-10 mx-1 border-r">
            <FontAwesomeIcon icon={faSearch} size="xs" />
          </div>
          <input
            placeholder="Tuliskan sesuatu ..."
            className="w-full rounded-lg p-2 text-sm font-medium"
            onChange={searchResultcontrol}
          />
        </div>
        <Select className="w-40 truncate">
          <option>Semua Kategori</option>
          <option>Persiapan Dan Tanah</option>
          <option>Struktur Utama</option>
          <option>Pekerjaan Dinding</option>
          <option>Pekerjaan Lantai</option>
          <option>Pekerjaan Atap</option>
          <option>Pekerjaan Finishing</option>
        </Select>
        <Button onClick={toggleNew} icon={PlusCircle} size="small">
          Tambah Item Pekerjaan
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr className="text-center">
              <TableCell>Item Pekerjaan</TableCell>
              <TableCell>Kategori</TableCell>
              <TableCell>Simbol</TableCell>
              <TableCell>Satuan</TableCell>
              <TableCell>Harga</TableCell>
              <TableCell>
                <FontAwesomeIcon icon={faCog} size="1x" />
              </TableCell>
            </tr>
          </TableHeader>
          <TableBody className="text-sm overflow-scroll">
            {dataTable.map((idx, i) => (
              <TableRow
                key={i}
                className="hover:bg-yellow-50 focus:bg-yellow-100 "
              >
                <TableCell>
                  <p className="truncate">{idx.nama}</p>
                </TableCell>
                <TableCell className="text-center">
                  <label>{idx.category}</label>
                </TableCell>
                <TableCell className="text-center">
                  <label
                    className="mr-2 text-xs font-black"
                    data-tip
                    data-for="table-cat"
                  >
                    {idx.sign}
                  </label>
                </TableCell>
                <TableCell className="text-center">{idx.unit}</TableCell>
                <TableCell>
                  <NumberFormat
                    value={idx.price}
                    displayType={"text"}
                    thousandSeparator
                    prefix={"Rp. "}
                  />
                </TableCell>
                <TableCell className="text-center w-1/12">
                  <Button
                    className="hover:text-green-600"
                    onClick={() =>
                      toggleEdit({ data: idx, index: i, mode: "edit" })
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
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>

      {/* <Button onClick={toggleBackdrop}>Open backdrop</Button> */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">
          <div className="w-4/5 mx-auto overflow-hidden bg-white rounded-lg px-6 py-4">
            <Item
              data={itemControl}
              toggleEdit={toggleEdit}
              toggleSubmit={toggleSubmit}
            />
          </div>
        </div>
      )}
    </>
  );
}
