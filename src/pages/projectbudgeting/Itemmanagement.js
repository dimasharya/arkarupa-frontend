import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Select,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@windmill/react-ui";
import {
  EditIcon,
  MinusCirlce,
  PlusCircle,
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
import NumberFormat from "react-number-format";
import Item from "../../components/Projectbudget/Itemmanagement/Item";

export default function Itemmanagement() {
  const data = [
    {
      nama: "Pemasangan Besi Bertingkat Dengan Bekisting",
      category: "Struktur Utama",
      sign: "STU",
      unit: "m2",
      price: 345000,
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const [isOpen, setIsOpen] = useState(false);
  function toggleBackdrop() {
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
            placeholder="Type something ..."
            className="w-full rounded-lg p-2 text-sm font-medium"
            onChange={searchResultcontrol}
          />
        </div>
        <Select className="w-40 truncate">
          <option>All Categories</option>
          <option>Persiapan Dan Tanah</option>
          <option>Struktur Utama</option>
          <option>Pekerjaan Dinding</option>
          <option>Pekerjaan Lantai</option>
          <option>Pekerjaan Atap</option>
          <option>Pekerjaan Finishing</option>
        </Select>
        <Button icon={PlusCircle} size="small">
          New Item
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr className="text-center">
              <TableCell>Item</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Sign</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell>Price</TableCell>
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
                    onClick={() =>
                      itemControlHandler({ data: i, mode: "edit" })
                    }
                    size="small"
                    icon={EditIcon}
                    layout="link"
                  />
                  <Button
                    onClick={() => hapusClick(i)}
                    size="small"
                    icon={MinusCirlce}
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

      <Button onClick={toggleBackdrop}>Open backdrop</Button>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">
          <div className="w-4/5 mx-auto overflow-hidden bg-white rounded-lg px-6 py-4">
            <Item toggleBackdrop={toggleBackdrop} />
          </div>
        </div>
      )}

      <div>
        <Button onClick={openModal}>Open modal</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
          eligendi repudiandae voluptatem tempore!
        </ModalBody>
        <ModalFooter>
          {/* I don't like this approach. Consider passing a prop to ModalFooter
           * that if present, would duplicate the buttons in a way similar to this.
           * Or, maybe find some way to pass something like size="large md:regular"
           * to Button
           */}
          <div className="hidden sm:block">
            <Button layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button>Accept</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large">
              Accept
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}
