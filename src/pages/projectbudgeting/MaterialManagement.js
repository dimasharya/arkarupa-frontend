import React, { useState, useEffect, useRef } from "react";
import { Button, Select } from "@windmill/react-ui";
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
import Item from "../../components/Projectbudget/Materialmanagement/Item";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadMaterialManagement, MaterialSelector } from "../../reducer/MaterialManagementSlice";

export default function MaterialManagement() {

  const dispatch = useDispatch()

  const location = useLocation()

  useEffect(() => {
    dispatch(loadMaterialManagement())
  }, [location])

  const Material = useSelector(MaterialSelector.selectAll)

  /// Table Area
  // const [itemTable, setItemTable] = useState(data);
  const [pageTable, setPageTable] = useState(1);
  const [dataTable, setDataTable] = useState([]);
  const [totalResults, setTotalResult] = useState(Material.length);
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [searchKey, setSearchKey] = useState("");

  function onPageChangeTable(p) {
    setPageTable(p);
  }

  // Pagination
  const resultsPerPage = 10;

  /// Item Control Area

  const [itemControl, setItemcontrol] = useState("");

  function hapusClick(props) {
    // const data = [...itemTable];
    // let indexData = 0;
    // if (pageTable !== 0) {
    //   indexData = (pageTable - 1) * 10 + props;
    // } else {
    //   indexData = props;
    // }
    // data.splice(indexData, 1);
    // setTotalResult(data.length);
    // setItemTable(data);
  }

  function toggleSubmit(props) {
    // const changedData = {
    //   item: props.item,
    //   category: props.category,
    //   sign: props.sign,
    //   unit: props.unit,
    //   price: props.price,
    // };

    // let newData = [];
    // if (props.mode === "edit") {
    //   let indexData = 0;
    //   if (pageTable !== 0) {
    //     indexData = (pageTable - 1) * 10 + props.index;
    //   } else {
    //     indexData = props.index;
    //   }

    //   for (let index = 0; index < itemTable.length; index++) {
    //     if (index === indexData) {
    //       newData[index] = changedData;
    //     } else {
    //       newData[index] = itemTable[index];
    //     }
    //   }
    // } else {
    //   newData = [...itemTable, changedData];
    // }
    // setItemTable(newData);
  }

  useEffect(() => {
    setDataTable(
      Material.slice(
        (pageTable - 1) * resultsPerPage,
        pageTable * resultsPerPage
      )
    );
  }, [pageTable, Material]);

  function searchResultcontrol(category, keyword) {
    let filtered;
    if (keyword !== "") {
      if (category !== "Semua Kategori") {
        filtered = Material.filter((item) => {
          return (
            item.nama_item.toLowerCase().includes(keyword.toLowerCase()) &&
            item.kategori.toLowerCase().includes(category.toLowerCase())
          );
        });
      } else {
        filtered = Material.filter((item) => {
          return item.nama_item.toLowerCase().includes(keyword.toLowerCase());
        });
      }
    } else if (category !== "Semua Kategori") {
      filtered = Material.filter((item) => {
        return item.kategori.toLowerCase().includes(category.toLowerCase());
      });
    } else {
      filtered = Material;
    }
    setDataTable(
      filtered.slice(
        (pageTable - 1) * resultsPerPage,
        pageTable * resultsPerPage
      )
    );
    setTotalResult(filtered.length);
  }

  useEffect(() => {
    searchResultcontrol(selectedCategory, searchKey);
  }, [selectedCategory, searchKey]);

  const [isOpen, setIsOpen] = useState(false);
  function toggleEdit(props) {
    setItemcontrol(props);
    setIsOpen(!isOpen);
  }

  function toggleNew() {
    const data = {
      item: "",
      category: "",
      sign: "",
      unit: "",
      price: "",
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
            placeholder="Tuliskan item ..."
            className="w-full rounded-lg p-2 text-sm font-medium"
            onChange={(props) => setSearchKey(props.target.value)}
          />
        </div>
        <Select
          className="w-40 truncate"
          onChange={(props) => setSelectedCategory(props.target.value)}
        >
          <option>Semua Kategori</option>
          <option>Pekerja</option>
          <option>Alat</option>
          <option>Bahan</option>
        </Select>
        <Button onClick={toggleNew} icon={PlusCircle} size="small">
          Tambah Item
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr className="text-center">
              <TableCell>Item</TableCell>
              <TableCell>Kategori</TableCell>
              <TableCell>Satuan</TableCell>
              <TableCell>Harga</TableCell>
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
                    <p className="truncate">{idx.nama_item}</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <label>{idx.kategori}</label>
                  </TableCell>
                  <TableCell className="text-center">{idx.satuan}</TableCell>
                  <TableCell>
                    <NumberFormat
                      value={idx.harga}
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
              ))
            ) : (
              <TableRow>
                <TableCell className="text-center" colSpan="6">Tidak Ada Data</TableCell>
              </TableRow>
            )}
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
          <div className=" w-4/12 mx-auto overflow-hidden bg-white rounded-lg px-6 py-4">
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
