import Moment from "react-moment";
import { Button } from "@windmill/react-ui";
import { Play, Pause, Stop } from "../../../icons";
import BadgeTaskStatus from "../../Badge/BadgeTaskStatus";
import ProgressBar from "../../Progresbar/Progresbar";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jedaPekerjaan, mulaiPekerjaan, selesaiPekerjaan } from "../../../reducer/ProjectSelectedSlice";

export default function TaskCardBerlangsung({ dataTask }) {
  const {
    kode_pekerjaan,
    nama_pekerjaan,
    tanggal_mulai,
    volume,
    volume_sekarang,
    satuan,
    status,
    permit_to_work,
  } = dataTask;

  let button_mulai, button_jeda;
  if (status === "Dimulai") {
    button_mulai = true;
    button_jeda = false;
  } else {
    button_mulai = false;
    button_jeda = true;
  }
  const progress = volume_sekarang/volume

  let { projectId } = useParams();

  const dispatch = useDispatch();

  const onMulai = () => {
    dispatch(mulaiPekerjaan({ id_proyek: projectId, _id: dataTask._id }));
  };

  const onJeda = () => {
    dispatch(jedaPekerjaan({ id_proyek: projectId, _id: dataTask._id }));
  };

  const onSelesai = () => {
    dispatch(selesaiPekerjaan({ id_proyek: projectId, _id: dataTask._id }));
  };

  return (
    <>
      <div className="flex flex-col border rounded-md p-4 bg-white shadow-md">
        <div className="flex justify-between items-center mb-1">
          <p className="font-bold truncate">{nama_pekerjaan}</p>
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
        <div className="text-left pt-1">
          <p className="text-xs font-semibold text-gray-500">Volume</p>
          <p className="text-sm">
            {volume} <span>{satuan}</span>
          </p>
        </div>
        <ProgressBar progress={progress} />
        <div className="flex gap-2 pt-3 justify-end">
          <Button onClick={() => onMulai()} disabled={button_mulai} iconLeft={Play} layout="outline" size="small">
            Mulai
          </Button>
          <Button onClick={() => onJeda()} disabled={button_jeda} iconLeft={Pause} layout="outline" size="small">
            Jeda
          </Button>
          <Button onClick={() => onSelesai()} iconLeft={Stop} layout="outline" size="small">
            Akhiri
          </Button>
        </div>
      </div>
    </>
  );
}
