import React, { useState, useEffect } from "react";
import { Button } from "@windmill/react-ui";
import {
  Print,
  Download,
  Pencil,
  TrashIcon,
  ChevronLeft,
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
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProjectBudgetSelected,
  deleteRancanganAnggaran,
  loadProjectBudgetSelected,
  projectBudgetSelectedSelectorById,
  rancanganAnggaranSelectorAll,
} from "../../reducer/ProjectBudgetSelectedSlice";
import Moment from "react-moment";

export default function BudgetDocuments() {
  const { projectId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProjectBudgetSelected({ projectId: projectId }))
  }, []);

  // const location = useLocation()

  // useEffect(() => {
  //   // dispatch(clearProjectBudgetSelected())
  //   // console.log("lokasi berubah");
  //   window.addEventListener("unload", console.log("leaving"))
  //   return () => {
  //     window.removeEventListener("unload", console.log("leaving"))
  //     console.log("pergi");
  //   }
  // }, [])

  const Proyek = useSelector((state) =>
    projectBudgetSelectedSelectorById(state, projectId)
  );

  const AnggaranBiaya = useSelector(rancanganAnggaranSelectorAll);

  /// Table Area
  // const [itemTable, setItemTable] = useState([]);
  const [pageTable, setPageTable] = useState(1);
  const [dataTable, setDataTable] = useState([]);
  const [totalResults, setTotalResult] = useState(AnggaranBiaya.length);

  function onPageChangeTable(p) {
    setPageTable(p);
  }

  // Pagination
  //const totalResults = itemTable.length;
  const resultsPerPage = 10;

  useEffect(() => {
    setDataTable(
      AnggaranBiaya.slice((pageTable - 1) * resultsPerPage, pageTable * resultsPerPage)
    );
  }, [pageTable])

  // Total Display

  const [totalDisplay, setTotalDisplay] = useState(0);

  useEffect(() => {
    setDataTable(
      AnggaranBiaya.slice(
        (pageTable - 1) * resultsPerPage,
        pageTable * resultsPerPage
      )
    );
    let sum = 0;
    for (let i = 0; i < AnggaranBiaya.length; i++) {
      sum = sum + parseFloat(AnggaranBiaya[i].total);
    }
    setTotalDisplay(sum);
    setTotalResult(AnggaranBiaya.length)
  }, [AnggaranBiaya]);

  /// Item Control Area

  const [itemControl, setItemcontrol] = useState("");
  const [isItemControl, setisItemcontrol] = useState(false);

  function hapusClick(props) {
    dispatch(deleteRancanganAnggaran({id_anggaran: projectId, _id: props}))
  }

  function itemControlHandler(props) {
    if (props.mode === "edit") {
      editClick(props.data);
    } else {
      addItem(props.data);
    }
  }

  function editClick(props) {
    const dataEdit = {
      mode: "edit",
      data: props
    }
    setItemcontrol(dataEdit);
    setisItemcontrol(true);
  }

  function addItem(props) {
    const item = { data: props, mode: "add" };
    setItemcontrol(item);
    setisItemcontrol(true);
  }

  function closeItemControl() {
    setisItemcontrol(false);
    setItemcontrol("");
  }

  /// Search Area

  const searchItem = [
    {
      _id: "507f1f77bcf86cd799439011",
      nama_pekerjaan: "Pemasangan Besi Bertingkat Dengan Bekisting",
      simbol: "PAW",
      kategori: "Pekerjaan Awalan",
      satuan: "m2",
      harga: "345000",
    },
    {
      _id: "507f191e810c19729de860ea",
      nama_pekerjaan: "Pekerjaan Urugan Pasir Batu",
      simbol: "PAW",
      kategori: "Pekerjaan Awalan",
      satuan: "m3",
      harga: "345000",
    },
  ];

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
            <Link to="/app/se/projectbudgeting">
              <Button size="small" icon={ChevronLeft} layout="link" />
            </Link>
            <label className=" text-base font-bold">
              {Proyek ? Proyek.nama_dokumen : ""}
            </label>
          </div>
          <div className="flex gap-4 items-center">
            <label className="text-xs">
              Terakhir Diperbarui :{" "}
              <span>
                <Moment format="LLLL" locale="id">
                  {Proyek ? Proyek.terakhir_diubah : ""}
                </Moment>
              </span>
            </label>
            <Button size="small" iconLeft={Print} layout="outline">
              <span>Cetak</span>
            </Button>
            <Button size="small" iconLeft={Download} layout="outline">
              <span>Unduh</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 my-4">
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
                {AnggaranBiaya ? (
                  dataTable.map((item, idx) => (
                    <TableRow
                      key={idx}
                      className="hover:bg-yellow-50 focus:bg-yellow-100 "
                    >
                      <TableCell>
                        <p className="truncate">{item.nama_pekerjaan}</p>
                      </TableCell>
                      <TableCell className="text-center">
                        <label
                          className="mr-2 text-xs font-black"
                          data-tip
                          data-for="table-cat"
                        >
                          {item.simbol}
                        </label>
                        <Tooltip id="table-cat" place="top" effect="solid">
                          Pekerjaan Awalan
                        </Tooltip>
                      </TableCell>
                      <TableCell className="text-center">
                        {item.satuan}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.volume}
                      </TableCell>
                      <TableCell>
                        <NumberFormat
                          value={item.harga}
                          displayType={"text"}
                          thousandSeparator
                          prefix={"Rp. "}
                        />
                      </TableCell>
                      <TableCell>
                        <NumberFormat
                          value={item.total}
                          displayType={"text"}
                          thousandSeparator
                          prefix={"Rp. "}
                        />
                      </TableCell>
                      <TableCell className="text-center w-1/12">
                        <Button
                          className="hover:text-green-600"
                          onClick={() =>
                            itemControlHandler({ data: item, mode: "edit" })
                          }
                          size="small"
                          icon={Pencil}
                          layout="link"
                        />
                        <Button
                          className="hover:text-red-700"
                          onClick={() => hapusClick(item._id)}
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
                    nama={item.nama_pekerjaan}
                    category={item.simbol}
                    addItem={() =>
                      itemControlHandler({ data: item, mode: "add" })
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          {/* <button onClick={() => console.log(Proyek)} >cekdata</button> */}
          {isItemControl ? (
            <Itemcontrol
              // index={itemControl.index}
              // nama={itemControl.nama}
              // unit={itemControl.unit}
              // category={itemControl.category}
              // price={itemControl.price}
              // volume={itemControl.volume}
              // total={itemControl.total}
              data={itemControl.data}
              mode={itemControl.mode}
              closeItemControl={closeItemControl}
              // submitItem={submitItem}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
