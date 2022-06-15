import Moment from "react-moment";
import { Button } from "@windmill/react-ui";
import { Pencil, QrCOde } from "../../../icons";

export default function TaskCardDijadwalkan({ dataTask }) {
  const {
    kode_pekerjaan,
    nama_pekerjaan,
    tanggal_mulai_rencana,
    tanggal_selesai_rencana,
    volume,
    satuan,
    status
  } = dataTask;
  let button_ubah;
  if (status === "Dijadwalkan") {
    button_ubah = false;
  } else {
    button_ubah = true;
  }
  return (
    <>
      <div className="flex flex-col border rounded-md p-4 bg-white shadow-md">
      <div className="flex justify-between items-center mb-1">
          <p className="font-bold truncate">{nama_pekerjaan}</p>
          {/* <p className="text-sm font-semibold">
            <Moment format="ll" locale="id">
              {tanggal_mulai}
            </Moment>
          </p> */}
        </div>
        <div className="grid grid-cols-2">
          <div className="text-left pt-1">
            <p className="text-xs font-semibold text-gray-500">
              Kode Pekerjaan
            </p>
            <p className="text-sm">{kode_pekerjaan}</p>
          </div>
          <div className="text-left pt-1">
            <p className="text-xs font-semibold text-gray-500">Rencana Tanggal Mulai</p>
            <p className="text-sm">
              <Moment format="ll" locale="id">
                {tanggal_mulai_rencana}
              </Moment>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="text-left pt-1">
            <p className="text-xs font-semibold text-gray-500">Volume</p>
            <p className="text-sm">
              {volume} <span>{satuan}</span>
            </p>
          </div>
          <div className="text-left pt-1">
            <p className="text-xs font-semibold text-gray-500">Rencana Tanggal Selesai</p>
            <p className="text-sm">
            <Moment format="ll" locale="id">
                {tanggal_selesai_rencana}
              </Moment>
            </p>
          </div>
        </div>
        <div className="flex gap-2 pt-3 justify-end">
          <Button
            disabled={button_ubah}
            iconLeft={Pencil}
            layout="outline"
            size="small"
          >
            Ubah
          </Button>
        </div>
      </div>
    </>
  );
}
