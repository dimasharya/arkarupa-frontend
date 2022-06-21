import Moment from "react-moment";
import { Button } from "@windmill/react-ui";
import { HeroPlusOutline, Pencil } from "../../../icons";

export default function TaskCardDijadwalkan({ dataTask, editPenanggungJawab, tambahPenanggungJawab }) {
  const {
    kode_pekerjaan,
    nama_pekerjaan,
    rencana_tanggal_mulai,
    rencana_tanggal_selesai,
    volume,
    satuan,
    status,
    penanggung_jawab,
  } = dataTask;
  function tombolAssign() {
    if (penanggung_jawab === null) {
      return (
        <Button onClick={() => tambahPenanggungJawab(dataTask)} iconLeft={HeroPlusOutline} layout="outline" size="small">
          Tambah Penanggung Jawab
        </Button>
      );
    } else {
      if (status === "Dijadwalkan") {
        return (
          <Button onClick={() => editPenanggungJawab(dataTask)} iconLeft={Pencil} layout="outline" size="small">
            Ubah Penanggung Jawab
          </Button>
        );
      } else {
        return (
          <Button disabled iconLeft={Pencil} layout="outline" size="small">
            Ubah Penanggung Jawab
          </Button>
        );
      }
    }
  }
  function penanggungJawab(){
    if(penanggung_jawab === null){
      return "Belum Ditentukan"
    }else{
      return penanggung_jawab.name
    }
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
                {rencana_tanggal_mulai}
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
                {rencana_tanggal_selesai}
              </Moment>
            </p>
          </div>
        </div>
        <div className="text-left pt-1">
            <p className="text-xs font-semibold text-gray-500">
              Penanggung Jawab
            </p>
            <p className="text-sm">{penanggungJawab()}</p>
          </div>
        <div className="flex justify-end mt-3">{tombolAssign()}</div>
      </div>
    </>
  );
}
