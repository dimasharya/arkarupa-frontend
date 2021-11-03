import React, { useEffect, useState } from "react";
import { Label, Input, Select, HelperText, Button } from "@windmill/react-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat } from "@fortawesome/free-solid-svg-icons";
import NumberFormat from "react-number-format";
import ItemData from "./ItemData";

export default function Item({ toggleBackdrop }) {
  const dataItems = [
    {
      item: "Mandor",
      coefficient: "0,8",
      unit: "O.H",
      price: "90000",
      total: "72000",
    },
    {
      item: "Tukang Batu",
      coefficient: "0,4",
      unit: "O.H",
      price: "65000",
      total: "26000",
    },
  ];

  const [dataItem, setDataItem] = useState(dataItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const [dataIngredients, setDataIngredients] = useState();

  const editItem = (props) => {
    const editedData = {
      item: props.item,
      coefficient: props.coefficient,
      unit: props.unit,
      price: props.price,
      total: props.total,
    };

    let newData = [];
    for (let i = 0; i < dataItem.length; i++) {
      if (i === props.idx) {
        newData[i] = editedData;
      } else {
        newData[i] = dataItem[i];
      }
    }
    setDataItem(newData);
  };

  const deleteItem = () => {};

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < dataItem.length; i++) {
      sum = sum + parseFloat(dataItem[i].total);
    }
    setTotalPrice(sum);
  }, [dataItem]);

  return (
    <>
      <div className="mt-4 mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
        
      </div>
      <div className="mb-6 text-sm text-black dark:text-gray-400">
        <Label className="mt-2">
          <span className="font-semibold text-xs">NAMA PEKERJAAN</span>
          <Input className="mt-1" />
        </Label>
        <Label className="mt-2">
          <span className="font-semibold text-xs">KATEGORI PEKERJAAN</span>
          <Select className="block w-full mt-1 truncate">
            <option>Persiapan Dan Tanah</option>
            <option>Struktur Utama</option>
            <option>Pekerjaan Dinding</option>
            <option>Pekerjaan Lantai</option>
            <option>Pekerjaan Atap</option>
            <option>Pekerjaan Finishing</option>
          </Select>
        </Label>
        <Label className="mt-2">
          <span className="font-semibold text-xs">KETERANGAN</span>
          <Input className="mt-1" />
          <HelperText valid>* Jika Diperlukan</HelperText>
        </Label>
        <div className="grid grid-flow-col grid-cols-2 gap-4">
          <table className="px-4 py-2 flex flex-col mt-2 border rounded-md">
            <thead className="sticky border-b">
              <tr className="text-xs font-semibold text-center py-1 inline-flex w-full">
                <td className="w-4/12 py-1">ITEM</td>
                <td className="w-2/12">KOEFISIEN</td>
                <td className="w-2/12">SATUAN</td>
                <td className="w-3/12">HARGA</td>
                <td className="w-3/12">TOTAL</td>
                <td className="w-1/12"></td>
              </tr>
            </thead>
            <tbody className="mt-1 relative h-60 overflow-y-auto">
              <tr className="flex py-1 mb-1 justify-center">
                <td className="flex flex-row gap-2 items-center">
                  <div className="border-2 w-6 h-6 border-gray-500 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      className="text-gray-500"
                      icon={faHardHat}
                      size="1x"
                    />
                  </div>
                  <div className="font-bold text-gray-500">Tenaga</div>
                </td>
              </tr>
              {dataItem.map((item, index) => {
                return (
                  <ItemData
                    key={index}
                    idx={index}
                    item={item.item}
                    coefficient={item.coefficient}
                    unit={item.unit}
                    price={item.price}
                    total={item.total}
                    editItem={editItem}
                    deleteItem={deleteItem}
                  />
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
                      value={totalPrice}
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
          <Button layout="outline" onClick={toggleBackdrop}>
            Batal
          </Button>
        </div>
        <div className="hidden sm:block">
          <Button>Submit</Button>
        </div>
        <div className="block w-full sm:hidden">
          <Button block size="large" layout="outline" onClick={toggleBackdrop}>
            Batal
          </Button>
        </div>
        <div className="block w-full sm:hidden">
          <Button block size="large">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}
