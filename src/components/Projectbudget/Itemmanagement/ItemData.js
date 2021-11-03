import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "@windmill/react-ui";
import { EditIcon, TrashIcon, Check } from "../../../icons";
import NumberFormat from "react-number-format";

export default function ItemData({
  idx,
  item,
  coefficient,
  unit,
  price,
  total,
  editItem,
}) {
  const [data, setData] = useState({
    idx: idx,
    item: item,
    coefficient: coefficient,
    unit: unit,
    price: price,
    total: total,
  });

  const [editState, setEditState] = useState(false);
  const editRef = useRef();

  const toggleEdit = () => {
    setEditState(!editState);
  };

  const coefficientChangeHandler = (props) => {
    let totalNext = 0;
    let coef = props.target.value;
    if (coef !== "") {
      coef = parseFloat(coef.replace(",", "."));
      coef !== "" ? (totalNext = Math.floor(coef * data.price)) : (totalNext = 0);
    } else {
      totalNext = 0;
    }
    const newData = {
      idx: idx,
      item: data.item,
      coefficient: props.target.value,
      unit: data.unit,
      price: data.price,
      total: totalNext,
    };
    setData(newData);
  };

  const toggleSubmit = () => {
    editItem(data);
    setEditState(!editState);
  };

  const toggleDelete = () => {};

  useEffect(() => {
    if (editState) {
      editRef.current.focus();
    }
  }, [editState]);

  return (
    <>
      <tr className="px-4 inline-flex w-full items-center">
        <td className="w-4/12 py-1 truncate">{data.item}</td>
        <td className="w-2/12 text-center items-center">
          {editState ? (
            <Input
              className="text-center h-6"
              onChange={coefficientChangeHandler}
              ref={editRef}
              defaultValue={data.coefficient}
            />
          ) : (
            data.coefficient
          )}
        </td>
        <td className="w-2/12 text-center">{data.unit}</td>
        <td className="w-3/12">
          <NumberFormat
            value={data.price}
            displayType={"text"}
            thousandSeparator
            prefix={"Rp. "}
          />
        </td>
        <td className="w-3/12">
          <NumberFormat
            value={data.total}
            displayType={"text"}
            thousandSeparator
            prefix={"Rp. "}
          />
        </td>
        <td className="w-1/12 flex justify-center">
          {editState ? (
            <Button
              size="small"
              className="hover:text-green-600"
              icon={Check}
              layout="link"
              onClick={toggleSubmit}
            />
          ) : (
            <>
              <Button
                className="hover:text-green-700"
                size="small"
                icon={EditIcon}
                layout="link"
                onClick={toggleEdit}
              />
              <Button
                className="hover:text-red-700"
                size="small"
                icon={TrashIcon}
                layout="link"
                onClick={toggleDelete}
              />
            </>
          )}
        </td>
      </tr>
    </>
  );
}
