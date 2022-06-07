import Moment from "react-moment";
import { Button } from "@windmill/react-ui";
import { Play, QrCOde } from "../../../icons";

export default function TaskCardDijadwalkan({ dataTask }) {
  const {
    kode_pekerjaan,
    nama_pekerjaan,
    tanggal_mulai,
    volume,
    satuan,
    status,
    permit_to_work,
  } = dataTask;
  let button_ptw, button_mulai;
  if (permit_to_work !== "null") {
    button_ptw = true;
    button_mulai = false;
  } else {
    button_ptw = false;
    button_mulai = true;
  }
  return (
    <>
      <div className="flex flex-col border rounded-md p-4 bg-white shadow-md">
        <div className="flex justify-between items-center mb-1">
          <p className="font-bold truncate">{nama_pekerjaan}</p>
          <p className="text-sm font-semibold">
            <Moment format="ll" locale="id">
              {tanggal_mulai}
            </Moment>
          </p>
        </div>
        <div className="text-left pt-1">
          <p className="text-xs font-semibold text-gray-500">Kode Pekerjaan</p>
          <p className="text-sm">{kode_pekerjaan}</p>
        </div>
        <div className="text-left pt-1">
          <p className="text-xs font-semibold text-gray-500">Volume</p>
          <p className="text-sm">
            {volume} <span>{satuan}</span>
          </p>
        </div>
        <div className="flex gap-2 pt-3 justify-end">
          <Button
            disabled={button_ptw}
            layout="outline"
            iconLeft={QrCOde}
            size="small"
          >
            Permit To Work
          </Button>
          <Button
            disabled={button_mulai}
            iconLeft={Play}
            layout="outline"
            size="small"
          >
            Mulai
          </Button>
        </div>
      </div>
    </>
  );
}
