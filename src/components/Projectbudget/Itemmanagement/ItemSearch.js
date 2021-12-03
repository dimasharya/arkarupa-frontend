import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCog } from "@fortawesome/free-solid-svg-icons";
import { Select, Button } from "@windmill/react-ui";
import { PlusCircle } from "../../../icons";
import { Tooltip } from "chart.js";

export default function ItemSearch({ addItem }) {
  const data = [
    {
      item: "Mandor",
      category: "Pekerja",
      unit: "O.H",
      price: 90000,
    },
    {
      item: "Pekerja/Buruh Tak Terampil",
      category: "Pekerja",
      unit: "O.H",
      price: 55000,
    },
    {
      item: "Kepala Tukang Batu",
      category: "Pekerja",
      unit: "O.H",
      price: 80000,
    },
    {
      item: "Tukang Batu",
      category: "Pekerja",
      unit: "O.H",
      price: 65000,
    },
    {
      item: "Kayu Meranti",
      category: "Bahan",
      unit: "m3",
      price: 3654050,
    },
    {
      item: "Multipleks Tebal 9 mm",
      category: "Bahan",
      unit: "Lembar",
      price: 157500,
    },
  ];

  const [displayedItem, setDisplayedItem] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [searchKey, setSearchKey] = useState("");

  const searchResult = (category, keyword) => {
    let filtered;
    if (keyword !== "") {
      if (category !== "Semua Kategori") {
        filtered = data.filter((item) => {
          return (
            item.item.toLowerCase().includes(keyword.toLowerCase()) &&
            item.category.toLowerCase().includes(category.toLowerCase())
          );
        });
      } else {
        filtered = data.filter((item) => {
          return item.item.toLowerCase().includes(keyword.toLowerCase());
        });
      }
    } else if (category !== "Semua Kategori") {
      filtered = data.filter((item) => {
        return item.category.toLowerCase().includes(category.toLowerCase());
      });
    } else {
      filtered = data;
    }
    setDisplayedItem(filtered);
  };

  useEffect(() => {
    searchResult(selectedCategory, searchKey);
  }, [searchKey, selectedCategory]);

  const addItemHandler = (props) => {
    const indexItem = props;
    const itemToAdd = displayedItem[indexItem];
    addItem(itemToAdd);
  };

  return (
    <>
      <div className="mt-2">
        <div className="grid gap-2 my-3 mx-4">
          <div className="flex gap-2">
            <div className="flex border flex-grow items-center rounded-md">
              <div className="text-center w-10 mx-1 border-r">
                <FontAwesomeIcon icon={faSearch} size="xs" />
              </div>
              <input
                onChange={(props) => setSearchKey(props.target.value)}
                placeholder="Tuliskan item ..."
                className="w-full rounded-lg p-2 text-sm font-medium"
              />
            </div>
            <Select
              onChange={(props) => setSelectedCategory(props.target.value)}
              className="w-40 truncate"
            >
              <option>Semua Kategori</option>
              <option>Pekerja</option>
              <option>Alat</option>
              <option>Bahan</option>
            </Select>
          </div>
          <table className="px-4 py-2 flex flex-col mt-2 border rounded-md">
            <thead className="sticky border-b">
              <tr className="text-xs font-semibold text-center py-1 inline-flex w-full">
                <td className="w-5/12 py-1">ITEM</td>
                <td className="w-2/12">KATEGORI</td>
                <td className="w-2/12">SATUAN</td>
                <td className="w-2/12">HARGA</td>
                <td className="w-1/12">
                  <FontAwesomeIcon icon={faCog} size="1x" />
                </td>
              </tr>
            </thead>
            <tbody className="mt-1 relative h-40 overflow-y-scroll divide-y divide-gray-200">
              {displayedItem.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="text-sm py-1 items-center inline-flex w-full hover:bg-yellow-50"
                  >
                    <td className="w-5/12 py-1 pl-2 truncate">{item.item}</td>
                    <td className="w-2/12 text-center">{item.category}</td>
                    <td className="w-2/12 text-center">{item.unit}</td>
                    <td className="w-2/12">
                      <NumberFormat
                        value={item.price}
                        displayType={"text"}
                        thousandSeparator
                        prefix={"Rp. "}
                      />
                    </td>
                    <td className="w-1/12 flex justify-center bg-white">
                      <Button
                        className="h-7"
                        onClick={() => addItemHandler(index)}
                        icon={PlusCircle}
                        size="small"
                        layout="outline"
                      ></Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
