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

export default function CategoryManagement() {
  const data = [
    {
      category: "Pekerja",
      sign: "PJA",
      segment: "Material"
    },
  ];

  /// Table Area
  const [itemTable, setItemTable] = useState(data);
  const [pageTable, setPageTable] = useState(1);
  const [dataTable, setDataTable] = useState([]);
  const [totalResults, setTotalResult] = useState(itemTable.length);
  const [selectedCategory, setSelectedCategory] = useState("Semua Segmen");
  const [searchKey, setSearchKey] = useState("");

  function onPageChangeTable(p) {
    setPageTable(p);
  }

  // Pagination
  const resultsPerPage = 10;

  /// Item Control Area

  const [itemControl, setItemcontrol] = useState("");

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
      item: props.item,
      category: props.category,
      sign: props.sign,
      unit: props.unit,
      price: props.price,
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
  }

  useEffect(() => {
    setDataTable(
      itemTable.slice(
        (pageTable - 1) * resultsPerPage,
        pageTable * resultsPerPage
      )
    );
  }, [pageTable, itemTable]);

  function searchResultcontrol(segment, keyword) {
    let filtered;
    if (keyword !== "") {
      if (segment !== "Semua Segmen") {
        filtered = itemTable.filter((item) => {
          return (
            item.category.toLowerCase().includes(keyword.toLowerCase()) &&
            item.segment.toLowerCase().includes(segment.toLowerCase())
          );
        });
      } else {
        filtered = itemTable.filter((item) => {
          return item.category.toLowerCase().includes(keyword.toLowerCase());
        });
      }
    } else if (segment !== "Semua Segmen") {
      filtered = itemTable.filter((item) => {
        return item.segment.toLowerCase().includes(segment.toLowerCase());
      });
    } else {
      filtered = itemTable;
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
      category: "",
      sign: "",
      segment:""
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
            placeholder="Tuliskan kategori ..."
            className="w-full rounded-lg p-2 text-sm font-medium"
            onChange={(props) => setSearchKey(props.target.value)}
          />
        </div>
        <Select
          className="w-40 truncate"
          onChange={(props) => setSelectedCategory(props.target.value)}
        >
          <option>Semua Segmen</option>
          <option>Item Pekerjaan</option>
          <option>Material</option>
        </Select>
        <Button onClick={toggleNew} icon={PlusCircle} size="small">
          Tambah Kategori
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr className="text-center">
              <TableCell>Kategori</TableCell>
              <TableCell>Simbol</TableCell>
              <TableCell>Segmen</TableCell>
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
                  <TableCell className="text-center">{idx.segment}</TableCell>
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

      {/* Modal */}
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
