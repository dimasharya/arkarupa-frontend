import React, { useEffect, useState } from "react";
import { Label, Input, Select, HelperText, Button } from "@windmill/react-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import NumberFormat from "react-number-format";
import ItemData from "./ItemData";

export default function Item({ toggleEdit, data, toggleSubmit }) {
  const [dataItems, setDataItems] = useState({
    nama: data.data.nama,
    category: data.data.category,
    sign: data.data.sign,
    unit: data.data.unit,
    ingredients: data.data.ingredients,
    price: data.data.price,
    desc: data.data.desc,
    mode: data.mode,
  });

  const editItem = (props) => {
    const editedData = {
      item: props.item,
      category: props.category,
      coefficient: props.coefficient,
      unit: props.unit,
      price: props.price,
      total: props.total,
    };

    let newData = [];
    for (let i = 0; i < dataItems.ingredients.length; i++) {
      if (i === props.idx) {
        newData[i] = editedData;
      } else {
        newData[i] = dataItems.ingredients[i];
      }
    }
    setDataItems({ ...dataItems, ingredients: newData });
  };

  const deleteItem = (props) => {
    const data = [...dataItems.ingredients];
    data.splice(props, 1);
    setDataItems({ ...dataItems, ingredients: data });
  };

  const onChange = (props) => {
    setDataItems({ ...dataItems, [props.target.name]: props.target.value });
  };

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < dataItems.ingredients.length; i++) {
      sum = sum + parseFloat(dataItems.ingredients[i].total);
    }
    setDataItems({ ...dataItems, price: sum });
  }, [dataItems.ingredients]);

  const submit = () => {
    data.mode === "edit"
      ? toggleSubmit({ ...dataItems, index: data.index })
      : toggleSubmit({ ...dataItems });
    toggleEdit();
  };

  return (
    <>
      <div className="mt-4 mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300"></div>
      <div className="mb-6 text-sm text-black dark:text-gray-400">
        <div className="grid grid-flow-col grid-cols-2 gap-4">
          <div>
            <Label className="mt-2">
              <span className="font-semibold text-xs">NAMA PEKERJAAN</span>
              <Input
                name="nama"
                defaultValue={dataItems.nama}
                onChange={onChange}
                className="mt-1"
              />
            </Label>
            <Label className="mt-2">
              <span className="font-semibold text-xs">KATEGORI PEKERJAAN</span>
              <Select
                name="category"
                defaultChecked={dataItems.category}
                onChange={onChange}
                className="block w-full mt-1 truncate"
              >
                <option>Persiapan Dan Tanah</option>
                <option>Struktur Utama</option>
                <option>Pekerjaan Dinding</option>
                <option>Pekerjaan Lantai</option>
                <option>Pekerjaan Atap</option>
                <option>Pekerjaan Finishing</option>
              </Select>
            </Label>
          </div>
          <div>
            <Label className="mt-2">
              <span className="font-semibold text-xs">SATUAN</span>
              <Input
                name="unit"
                defaultValue={dataItems.unit}
                onChange={onChange}
                className="mt-1"
              />
            </Label>
            <Label className="mt-2">
              <span className="font-semibold text-xs">KETERANGAN</span>
              <Input
                name="desc"
                defaultValue={dataItems.desc}
                onChange={onChange}
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
            <tbody className="mt-1 relative h-60 overflow-y-auto">
              {
              dataItems.ingredients ?
              dataItems.ingredients.map((item, indexitem) => {
                return (
                  <>
                    <ItemData
                      key={indexitem}
                      idx={indexitem}
                      item={item.item}
                      category={item.category}
                      coefficient={item.coefficient}
                      unit={item.unit}
                      price={item.price}
                      total={item.total}
                      editItem={editItem}
                      deleteItem={deleteItem}
                    />
                  </>
                );
              }) : null}
            </tbody>
            <tfoot className="border-t p-2 bottom-0 text-sm font-semibold text-black bg-white">
              <tr className="flex justify-between inset-x-0">
                <td>
                  <label>Harga : </label>
                </td>
                <td>
                  <label>
                    <NumberFormat
                      value={dataItems.price}
                      displayType={"text"}
                      thousandSeparator
                      prefix={"Rp. "}
                    />
                  </label>
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="mt-2 overflow-y-auto rounded-md"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
        <div className="hidden sm:block">
          <Button layout="outline" onClick={toggleEdit}>
            Batal
          </Button>
        </div>
        <div className="hidden sm:block">
          <Button onClick={submit}>Submit</Button>
        </div>
        <div className="block w-full sm:hidden">
          <Button block size="large" layout="outline" onClick={toggleEdit}>
            Batal
          </Button>
        </div>
        <div className="block w-full sm:hidden">
          <Button onClick={submit} block size="large">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
