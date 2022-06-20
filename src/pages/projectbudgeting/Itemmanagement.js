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
import Item from "../../components/Projectbudget/Itemmanagement/Item";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, loadItem, selectItem } from "../../reducer/ItemManagementSlice";

export default function Itemmanagement() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItem());
  }, []);

  const Items = useSelector(selectItem.selectAll);

  /// Table Area
  // const [itemTable, setItemTable] = useState(data);
  const [pageTable, setPageTable] = useState(1);
  const [dataTable, setDataTable] = useState([]);
  const [totalResults, setTotalResult] = useState(Items.length);
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
    dispatch(deleteItem({id_item: props}))
  }

  useEffect(() => {
    setDataTable(
      Items.slice((pageTable - 1) * resultsPerPage, pageTable * resultsPerPage)
    );
  }, [pageTable, Items]);

  function searchResultcontrol(category, keyword) {
    let filtered;
    if (keyword !== "") {
      if (category !== "Semua Kategori") {
        filtered = Items.filter((item) => {
          return (
            item.nama_pekerjaan.toLowerCase().includes(keyword.toLowerCase()) &&
            item.kategori.toLowerCase().includes(category.toLowerCase())
          );
        });
      } else {
        filtered = Items.filter((item) => {
          return item.nama_pekerjaan
            .toLowerCase()
            .includes(keyword.toLowerCase());
        });
      }
    } else if (category !== "Semua Kategori") {
      filtered = Items.filter((item) => {
        return item.kategori.toLowerCase().includes(category.toLowerCase());
      });
    } else {
      filtered = Items;
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
      nama_pekerjaan: "",
      kategori: "",
      simbol: "",
      satuan: "",
      harga: "",
      material: [],
    };
    setItemcontrol({ data: data, mode: "new" });
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="flex gap-4 my-3 mx-4">
        <div className="flex flex-grow border border-gray-200 items-center rounded-md bg-white hover:border-gray-400 duration-150">
          <div className="text-center w-10 mx-1 border-r">
            <FontAwesomeIcon icon={faSearch} size="xs" />
          </div>
          <input
            placeholder="Tuliskan item pekerjaan ..."
            className="w-full rounded-lg p-2 text-sm font-medium"
            onChange={(props) => setSearchKey(props.target.value)}
          />
        </div>
        <Select
          className="w-40 truncate"
          onChange={(props) => setSelectedCategory(props.target.value)}
        >
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
            {dataTable.length !== 0 ? (
              dataTable.map((idx, i) => (
                <TableRow
                  key={i}
                  className="hover:bg-yellow-50 focus:bg-yellow-100 "
                >
                  <TableCell>
                    <p className="truncate">{idx.nama_pekerjaan}</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <label>{idx.kategori}</label>
                  </TableCell>
                  <TableCell className="text-center">
                    <label
                      className="mr-2 text-xs font-black"
                      data-tip
                      data-for="table-cat"
                    >
                      {idx.simbol}
                    </label>
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
                      onClick={() => hapusClick(idx._id)}
                      size="small"
                      icon={TrashIcon}
                      layout="link"
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell className="text-center" colSpan="6">
                  Tidak Ada Data
                </TableCell>
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
          <div className="w-4/5 mx-auto overflow-hidden bg-white rounded-lg px-6 py-4">
            <Item
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              data={itemControl}
              toggleEdit={toggleEdit}
            />
          </div>
        </div>
      )}
    </>
  );
}
