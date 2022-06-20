import React, { useEffect, useState, useCallback } from "react";
import { Label, Input, Select, HelperText, Button } from "@windmill/react-ui";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import NumberFormat from "react-number-format";
import ItemData from "./ItemData";
import ItemSearch from "./ItemSearch";
import { useForm } from "react-hook-form";
import { getSimbol } from "../../../utils/getSimbol";
import { tambahItem, updateItem } from "../../../reducer/ItemManagementSlice";

export default function Item({ data, setIsOpen, isOpen }) {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const [dataItems, setDataItems] = useState({
    nama_pekerjaan: data.data.nama_pekerjaan,
    kategori: data.data.kategori,
    simbol: data.data.simbol,
    satuan: data.data.satuan,
    mode: data.mode,
  });

  const [displayedIngredients, setDispledIngredients] = useState(
    data.data.material
  );

  const [displayedHargaTotal, setDisplayedHargaTotal] = useState(
    data.data.harga
  );

  const addItem = (props) => {
    const itemToAdd = { material: props, koefisien: "0" };
    let newData = [...displayedIngredients, itemToAdd];
    setDispledIngredients(newData);
  };

  const editItem = (props) => {
    let newData = [];
    for (let i = 0; i < displayedIngredients.length; i++) {
      if (i === props.idx) {
        newData[i] = { ...displayedIngredients[i], koefisien: props.koefisien };
      } else {
        newData[i] = displayedIngredients[i];
      }
    }
    setDispledIngredients(newData);
  };

  const hitungHarga = () => {
    let harga = 0;
    displayedIngredients.map((item) => {
      harga += Math.floor(
        item.koefisien.replace(",", ".") * item.material.harga
      );
    });
    setDisplayedHargaTotal(harga);
  };

  const deleteItem = useCallback(
    (props) => {
      const data = [...displayedIngredients];
      data.splice(props, 1);
      setDispledIngredients([]);
      setDispledIngredients(data);
    },
    [displayedIngredients]
  );

  useEffect(() => {
    hitungHarga();
  }, [displayedIngredients]);

  // const onChange = (props) => {
  //   setDataItems({ ...dataItems, [props.target.name]: props.target.value });
  // };

  // useEffect(() => {
  //   let sum = 0;
  //   for (let i = 0; i < dataItems.material.length; i++) {
  //     sum = sum + parseFloat(dataItems.material[i].total);
  //   }
  //   setDataItems({ ...dataItems, harga: sum });
  // }, [dataItems.material]);

  // /// hapus item on display belum work
  // // useEffect(() => {
  // //   setDispledIngredients(dataItems.material);
  // // }, [dataItems]);

  // const submit = () => {
  //   data.mode === "edit"
  //     ? toggleSubmit({ ...dataItems, index: data.index })
  //     : toggleSubmit({ ...dataItems });
  //   toggleEdit();
  // };

  const submit = async (item) => {
    if(dataItems.mode === "new"){
      const dataToSubmit = {
        ...item,
        simbol: getSimbol(item.kategori),
        material: displayedIngredients,
        harga: displayedHargaTotal,
      };
  
      dispatch(tambahItem({data: dataToSubmit}))
      setIsOpen(!isOpen)
    }else{
      const dataToSubmit = {
        ...item,
        simbol: getSimbol(item.kategori),
        material: displayedIngredients,
        harga: displayedHargaTotal,
        _id : data.data._id
      };
  
      dispatch(updateItem({data: dataToSubmit}))
      setIsOpen(!isOpen)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-6 text-sm text-black dark:text-gray-400">
          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <div>
              <Label className="mt-2">
                <span className="font-semibold text-xs">NAMA PEKERJAAN</span>
                <Input
                  {...register("nama_pekerjaan")}
                  defaultValue={dataItems.nama_pekerjaan}
                  // onChange={onChange}
                  className="mt-1"
                  required
                />
              </Label>
              <Label className="mt-2">
                <span className="font-semibold text-xs">
                  KATEGORI PEKERJAAN
                </span>
                <Select
                  {...register("kategori")}
                  defaultValue={dataItems.kategori}
                  // onChange={onChange}
                  className="block w-full mt-1 truncate"
                  required
                >
                  <option value={"Persiapan Dan Tanah"}>
                    Persiapan Dan Tanah
                  </option>
                  <option value={"Struktur Utama"}>Struktur Utama</option>
                  <option value={"Pekerjaan Dinding"}>Pekerjaan Dinding</option>
                  <option value={"Pekerjaan Lantai"}>Pekerjaan Lantai</option>
                  <option value={"Pekerjaan Atap"}>Pekerjaan Atap</option>
                  <option value={"Pekerjaan Finishing"}>
                    Pekerjaan Finishing
                  </option>
                </Select>
              </Label>
            </div>
            <div>
              <Label className="mt-2">
                <span className="font-semibold text-xs">SATUAN</span>
                <Input
                  {...register("satuan")}
                  defaultValue={dataItems.satuan}
                  // onChange={onChange}
                  className="mt-1"
                  required
                />
              </Label>
              <Label className="mt-2">
                <span className="font-semibold text-xs">KETERANGAN</span>
                <Input
                  {...register("deskripsi")}
                  defaultValue={dataItems.desc}
                  // onChange={onChange}
                  className="mt-1"
                />
                <HelperText valid>* Jika Diperlukan</HelperText>
              </Label>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <table className="px-4 py-2 flex flex-col mt-2 border rounded-md">
              <thead className="sticky border-b">
                <tr className="text-xs font-semibold text-center py-1 inline-flex w-full">
                  <td className="w-4/12 py-1">ITEM</td>
                  <td className="w-2/12">KOEFISIEN</td>
                  <td className="w-2/12">SATUAN</td>
                  <td className="w-3/12">HARGA</td>
                  <td className="w-3/12">TOTAL</td>
                  <td className="w-1/12">
                    <FontAwesomeIcon icon={faCog} size="1x" />
                  </td>
                </tr>
              </thead>
              <tbody className="mt-1 relative h-60 overflow-y-scroll">
                {displayedIngredients.map((item, indexitem) => {
                  return (
                    <>
                      <ItemData
                        key={`material${indexitem}`}
                        idx={indexitem}
                        // nama_item={item.material.nama_item}
                        // kategori={item.material.kategori}
                        koefisien={item.koefisien}
                        material={item.material}
                        // satuan={item.material.satuan}
                        // harga={item.material.harga}
                        // total={item.total}
                        editItem={editItem}
                        deleteItem={() => deleteItem(indexitem)}
                      />
                    </>
                  );
                })}
              </tbody>
              <tfoot className="border-t p-2 bottom-0 text-sm font-semibold text-black bg-white">
                <tr className="flex justify-between inset-x-0">
                  <td>
                    <label>Harga : </label>
                  </td>
                  <td>
                    <label>
                      <NumberFormat
                        value={displayedHargaTotal}
                        displayType={"text"}
                        thousandSeparator
                        prefix={"Rp. "}
                      />
                    </label>
                  </td>
                </tr>
              </tfoot>
            </table>
            <ItemSearch addItem={addItem} />
          </div>
          {/* <button onClick={cekdata}>cek data</button> */}
        </div>
        <div className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
          <div className="hidden sm:block">
            <Button layout="outline" onClick={() => setIsOpen(!isOpen)}>
              Batal
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button type="submit">Submit</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={() => setIsOpen(!isOpen)}>
              Batal
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button type="submit" block size="large">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
