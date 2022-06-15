import React, { useState } from "react";
import { Button } from "@windmill/react-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberFormat from "react-number-format";
import {
  faPaintRoller,
  faLayerGroup,
  faDollarSign,
  faRulerHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  addRancanganAnggaran,
  updateRancanganAnggaran,
} from "../../../reducer/ProjectBudgetSelectedSlice";
import { useParams } from "react-router-dom";

export default function Itemcontrol({ data, closeItemControl, mode }) {
  let { _id, volume, nama_pekerjaan, kategori, simbol, satuan, harga, total } =
    data;
  const { handleSubmit, register } = useForm();

  const { projectId } = useParams();

  const dispatch = useDispatch();

  if (volume === "") {
    volume = 0;
  }

  let headTitle, btnSubmit;

  if (mode === "edit") {
    headTitle = "UBAH ITEM PEKERJAAN";
    btnSubmit = "SUBMIT";
  } else {
    headTitle = "TAMBAH ITEM PEKERJAAN";
    btnSubmit = "TAMBAH ITEM PEKERJAAN";
  }

  const [volumeAmount, setVolumeAmount] = useState(volume);
  const [totalAmount, setTotalAmound] = useState(total);

  function volumeOnchange(props) {
    let vol = props.target.value;
    setVolumeAmount(vol);
    //desimal belum bisa
    vol !== "" ? setTotalAmound(parseFloat(vol) * harga) : setTotalAmound(0);
  }

  function submitItemControl(props) {
    if (mode === "add") {
      const data = {
        volume: props.volume,
        nama_pekerjaan,
        kategori,
        simbol,
        satuan,
        harga,
        total: totalAmount,
      };
      dispatch(addRancanganAnggaran({ id_anggaran: projectId, data: data }));
      closeItemControl();
    } else {
      const data = {
        _id,
        volume: props.volume,
        nama_pekerjaan,
        kategori,
        simbol,
        satuan,
        harga,
        total: totalAmount,
      };
      dispatch(updateRancanganAnggaran({ id_anggaran: projectId, data: data }));
      closeItemControl();
    }
  }

  return (
    <>
      <div className="transition ease-in-out duration-700 border rounded-lg bg-white transition duration-700 ease-in-out ">
        <div className="flex justify-end items-center bg-gray-50 rounded-t-lg border-b">
          <h4 className="w-8/12 py-3 text-center text-xs font-semibold text-gray-500">
            {headTitle}
          </h4>
          <button
            className="w-6 h-6 mx-3 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
            aria-label="close"
            onClick={closeItemControl}
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit(submitItemControl)} className="py-3 px-4">
          <div className="flex py-1 items-center">
            <div className="p-2 text-center w-2/12">
              <FontAwesomeIcon icon={faPaintRoller} size="sm" />
            </div>
            <div className="mx-2 w-10/12">
              <label className="block text-xs font-light text-gray-500">
                Item Pekerjaan
              </label>
              <p className="text-sm font-medium">{nama_pekerjaan}</p>
            </div>
          </div>
          <div className="flex py-1 items-center">
            <div className="p-2 text-center w-2/12">
              <FontAwesomeIcon icon={faLayerGroup} size="sm" />
            </div>
            <div className="mx-2 w-10/12">
              <label className="block text-xs font-light text-gray-500">
                Kategori
              </label>
              <p className="text-sm font-medium leading-none">{simbol}</p>
            </div>
          </div>
          <div className="flex py-1 items-center">
            <div className="p-2 text-center w-2/12">
              <FontAwesomeIcon icon={faDollarSign} size="sm" />
            </div>
            <div className="mx-2 w-10/12">
              <label className="block text-xs font-light text-gray-500">
                Harga
              </label>
              <p className="text-sm font-medium leading-none">
                <NumberFormat
                  defaultValue={harga}
                  thousandSeparator
                  prefix={"Rp. "}
                  displayType={"text"}
                />
              </p>
            </div>
          </div>
          <div className="flex py-1 items-center">
            <div className="p-2 text-center w-2/12">
              <FontAwesomeIcon icon={faRulerHorizontal} size="sm" />
            </div>
            <div className="mx-2 w-10/12">
              <label className="block text-xs font-light text-gray-500">
                Volume
              </label>
              <div className="flex items-center">
                <input
                  {...register("volume")}
                  className="border w-20 border-white rounded-md text-sm font-medium px-2 py-1 hover:border-gray-200"
                  placeholder="0"
                  defaultValue={volumeAmount}
                  onChange={volumeOnchange}
                />
                <h4 className="text-xs font-medium mx-2">{satuan}</h4>
              </div>
            </div>
          </div>
          <h5 className="flex justify-end mx-4 my-2 text-xs font-thin text-gray-400">
            Harga Normal (*)
          </h5>
          <div className="mx-4 mb-4">
            <label className="block text-xs font-light text-gray-500">
              Total
            </label>
            <h4 className="text-lg font-bold">
              <NumberFormat
                value={totalAmount}
                defaultValue={0}
                thousandSeparator
                prefix={"Rp. "}
                displayType="text"
              />
            </h4>
          </div>
          <div className="my-2">
            <Button type="submit" className="w-full" size="small">
              {btnSubmit}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
