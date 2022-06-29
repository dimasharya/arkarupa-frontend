import Moment from "react-moment";
import { Button } from "@windmill/react-ui";
import { Pencil } from "../../../icons";
import ProgressbarSmall from "../../Progresbar/ProgressbarSmall";
import BadgeTaskStatus from "../../Badge/BadgeTaskStatus";
import { useState } from "react";

export default function TaskCard({ dataTask, onEdit }) {
  const {
    kode_pekerjaan,
    nama_pekerjaan,
    tanggal_mulai,
    volume,
    volume_sekarang,
    satuan,
    status,
  } = dataTask;
  let button_update;
  if (status === "Dimulai" || status === "Selesai") {
    button_update = false;
  } else {
    button_update = true;
  }

  const progress = Math.floor((parseFloat(volume_sekarang.replace(",", ".")) / parseFloat(volume.replace(",", ".")))*100)

  return (
    <>
      <div className="flex flex-col border rounded-md p-4 bg-white shadow-md">
        <div className="flex justify-between items-center mb-1">
          <p className="font-bold truncate">{nama_pekerjaan}</p>
        </div>
        <div className="grid grid-cols-6 gap-2 items-center">
          <div className="text-left pt-1">
            <p className="text-xs font-semibold text-gray-500">
              Kode Pekerjaan
            </p>
            <p className="text-sm">{kode_pekerjaan}</p>
          </div>
          <div className="text-left pt-1">
            <p className="text-xs font-semibold text-gray-500">Tanggal Mulai</p>
            <p className="text-sm">
              {tanggal_mulai === null ? (
                "Belum Dimulai"
              ) : (
                <Moment format="ll" locale="id">
                  {tanggal_mulai}
                </Moment>
              )}
            </p>
          </div>
          <div className="text-center pt-1">
            <p className="text-xs font-semibold text-gray-500">Volume</p>
            <p className="text-sm">
              {volume} <span>{satuan}</span>
            </p>
          </div>
          <div className="flex justify-center pt-1">
            <BadgeTaskStatus status={status} />
          </div>
          <div className="text-left pt-1">
            <ProgressbarSmall progress={progress} />
          </div>
          <div className="flex justify-center pt-1">
            <Button
              onClick={() => onEdit(dataTask)}
              disabled={button_update}
              iconLeft={Pencil}
              layout="outline"
              size="small"
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
