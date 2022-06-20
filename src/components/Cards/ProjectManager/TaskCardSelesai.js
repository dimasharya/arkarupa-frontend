import Moment from "react-moment";
import BadgeTaskStatus from "../../Badge/BadgeTaskStatus";
import ProgressBar from "../../Progresbar/Progresbar";

export default function TaskCardSelesai({ dataTask }) {
  const {
    kode_pekerjaan,
    nama_pekerjaan,
    tanggal_mulai,
    tanggal_selesai,
    volume,
    satuan,
    status,
    penanggung_jawab,
    volume_sekarang,
  } = dataTask;

  const progress = volume_sekarang / volume

  return (
    <>
      <div className="flex flex-col border rounded-md p-4 bg-white shadow-md">
        <div className="flex justify-between items-center mb-1">
          <p className="font-bold truncate">{nama_pekerjaan}</p>
          {/* <p className="text-sm">
            <Moment format="ll" locale="id">
              {tanggal_mulai}
            </Moment>
          </p> */}
          <BadgeTaskStatus status={status} />
        </div>
        <div className="grid grid-cols-2">
          <div className="text-left pt-1">
            <p className="text-xs font-semibold text-gray-500">
              Kode Pekerjaan
            </p>
            <p className="text-sm">{kode_pekerjaan}</p>
          </div>
          <div className="text-left pt-1">
            <p className="text-xs font-semibold text-gray-500">Tanggal Mulai</p>
            <p className="text-sm">
              <Moment format="ll" locale="id">
                {tanggal_mulai}
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
            <p className="text-xs font-semibold text-gray-500">
              Tanggal Selesai
            </p>
            <p className="text-sm">
              <Moment format="ll" locale="id">
                {tanggal_selesai}
              </Moment>
            </p>
          </div>
        </div>
        <div className="text-left pt-1">
          <p className="text-xs font-semibold text-gray-500">
            Penanggung Jawab
          </p>
          <p className="text-sm">{penanggung_jawab}</p>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </>
  );
}
