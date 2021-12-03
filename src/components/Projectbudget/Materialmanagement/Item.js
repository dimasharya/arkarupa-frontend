import React, { useEffect, useState } from "react";
import { Label, Input, Select, HelperText, Button } from "@windmill/react-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import NumberFormat from "react-number-format";

export default function Item({ toggleEdit, data, toggleSubmit }) {
  const [dataItems, setDataItems] = useState({
    item: data.data.item,
    category: data.data.category,
    sign: data.data.sign,
    unit: data.data.unit,
    price: data.data.price,
    mode: data.mode,
  });

  const onChange = (props) => {
    setDataItems({ ...dataItems, [props.target.name]: props.target.value });
  };

  const submit = () => {
    data.mode === "edit"
      ? toggleSubmit({ ...dataItems, index: data.index })
      : toggleSubmit({ ...dataItems });
    toggleEdit();
  };

  return (
    <>
      <div className="mb-6 text-sm text-black dark:text-gray-400">
        <div className="grid">
          <Label className="mt-2">
            <span className="font-semibold text-xs">NAMA ITEM</span>
            <Input
              name="item"
              defaultValue={dataItems.item}
              onChange={onChange}
              className="mt-1"
              required
            />
          </Label>
          <Label className="mt-2">
            <span className="font-semibold text-xs">KATEGORI ITEM</span>
            <Select
              name="category"
              defaultChecked={dataItems.category}
              onChange={onChange}
              className="block w-full mt-1 truncate"
              required
            >
              <option>Pekerja</option>
              <option>Alat</option>
              <option>Bahan</option>
            </Select>
          </Label>
          <Label className="mt-2">
            <span className="font-semibold text-xs">SATUAN</span>
            <Input
              name="unit"
              defaultValue={dataItems.unit}
              onChange={onChange}
              className="mt-1"
              required
            />
          </Label>
          <Label className="mt-2">
            <span className="font-semibold text-xs">HARGA</span>
            <Input
              name="price"
              defaultValue={dataItems.price}
              onChange={onChange}
              className="mt-1"
            />
          </Label>
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
