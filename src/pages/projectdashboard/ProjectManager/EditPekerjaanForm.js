import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Label, Select, Button } from "@windmill/react-ui";
import Api from "../../../reducer/Api";
import { useParams } from "react-router-dom";
import {deletePekerjaan, editPekerjaan } from "../../../reducer/ProjectSelectedSlice";
import moment from "moment"

export default function NewPekerjaanForm({
  modalEditPekerjaan,
  setModalEditPekerjaan,
  dataPekerjaan
}) {
  const { handleSubmit, register } = useForm();

  const { projectId } = useParams();

  const dispatch = useDispatch();

  const onSubmit = (props) => {
    const data = {
      ...props,
      item_pekerjaan: dataPekerjaan.item_pekerjaan,
    };
    dispatch(editPekerjaan({id_proyek: projectId, data: data}))
    setModalEditPekerjaan(!modalEditPekerjaan)
  };

  const deletePekerjaanHandle = () => {
    dispatch(deletePekerjaan({id_proyek: projectId, _id: dataPekerjaan._id, item_pekerjaan: dataPekerjaan.item_pekerjaan}))
  }
  return (
    <>
      <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-20 sm:items-center sm:justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" max-w-7xl w-4/12 mx-auto overflow-hidden bg-white rounded-lg px-6 py-4 shadow-lg"
        >
          <div className="flex flex-col p-4 gap-2">
            <h2 className="font-bold text-center">FORM EDIT PEKERJAAN</h2>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">Nama Pekerjaan</span>
              </Label>
              <input
                {...register("nama_pekerjaan", { required: true })}
                defaultValue={dataPekerjaan.nama_pekerjaan}
                type="text"
                className=" mt-1 rounded-md text-sm border-gray-300 focus:border-gray-600 ring-0 focus:ring-gray-300 focus:ring-2"
              />
            </div>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">
                  Rencana Tanggal Mulai
                </span>
              </Label>
              <input
                {...register("rencana_tanggal_mulai", { required: true })}
                type="date"
                defaultValue={moment(dataPekerjaan.rencana_tanggal_mulai).format("yyyy-MM-DD")}
                className=" mt-1 text-sm rounded-md border-gray-300 focus:border-gray-600 ring-0 focus:ring-gray-300 focus:ring-2"
              />
            </div>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">
                  Rencana Tanggal Selesai
                </span>
              </Label>
              <input
                {...register("rencana_tanggal_selesai", { required: true })}
                type="date"
                defaultValue={moment(dataPekerjaan.rencana_tanggal_selesai).format("yyyy-MM-DD")}
                className=" mt-1 text-sm rounded-md border-gray-300 focus:border-gray-600 ring-0 focus:ring-gray-300 focus:ring-2"
              />
            </div>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">Permit To Work</span>
              </Label>
              <div className="flex items-center mr-4">
                <input
                  {...register("permit_to_work")}
                  type="checkbox"
                  defaultChecked={dataPekerjaan.permit_to_work}
                  className="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Ya
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <button onClick={deletePekerjaanHandle} className="align-bottom inline-flex items-center justify-center cursor-pointer px-4 py-2 rounded-lg text-sm leading-5 transition-colors duration-150 font-medium focus:outline-none text-white bg-red-600 border border-transparent active:bg-red-600 hover:bg-red-700 focus:ring focus:ring-red-300" >Hapus</button>
            <Button
              onClick={() => setModalEditPekerjaan(!modalEditPekerjaan)}
              layout="outline"
            >
              Batal
            </Button>
            <Button type="submit" layout="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
