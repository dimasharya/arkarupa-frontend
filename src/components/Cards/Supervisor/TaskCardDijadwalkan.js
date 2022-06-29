import Moment from "react-moment";
import { Button, HelperText } from "@windmill/react-ui";
import { Play, QrCOde } from "../../../icons";
import { useDispatch } from "react-redux";
import { mulaiPekerjaan } from "../../../reducer/ProjectSelectedSlice";
import { useParams } from "react-router-dom";

export default function TaskCardDijadwalkan({ dataTask, permitBaru }) {
  const {
    kode_pekerjaan,
    nama_pekerjaan,
    rencana_tanggal_mulai,
    rencana_tanggal_selesai,
    volume,
    satuan,
    permit_to_work,
    permit_to_work_data,
  } = dataTask;
  let button_ptw,
    button_mulai,
    button_perlu_ptw = true;
  if (permit_to_work === true) {
    button_perlu_ptw = true;
    if (permit_to_work_data === null) {
      button_ptw = false;
      button_mulai = true;
    } else {
      if (
        permit_to_work_data.status === "Diajukan"
      ) {
        button_ptw = true;
        button_mulai = true;
      } else if (permit_to_work_data.status === "Disetujui") {
        button_ptw = true;
        button_mulai = false;
      }else if(permit_to_work_data.status === "Ditolak" || permit_to_work_data.status === "Kadaluarsa") {
        button_ptw = false;
        button_mulai = true;
      }
    }
  } else {
    button_perlu_ptw = false;
    button_ptw = true;
    button_mulai = false;
  }

  let { projectId } = useParams();

  const dispatch = useDispatch();

  const onMulai = () => {
    dispatch(mulaiPekerjaan({ id_proyek: projectId, _id: dataTask._id }));
  };
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
            <p className="text-xs font-semibold text-gray-500">
              Rencana Tanggal Mulai
            </p>
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
            <p className="text-xs font-semibold text-gray-500">
              Rencana Tanggal Selesai
            </p>
            <p className="text-sm">
              <Moment format="ll" locale="id">
                {rencana_tanggal_selesai}
              </Moment>
            </p>
          </div>
        </div>
        <div className="flex gap-2 pt-3 justify-end items-center">
          {button_perlu_ptw === true && permit_to_work_data !== null ? (
            <HelperText>PTW {permit_to_work_data.status}</HelperText>
          ) : (
            ""
          )}

          {button_perlu_ptw && (
            <Button
              onClick={() => permitBaru(dataTask)}
              disabled={button_ptw}
              layout="outline"
              iconLeft={QrCOde}
              size="small"
            >
              Permit To Work
            </Button>
          )}
          <Button
            disabled={button_mulai}
            iconLeft={Play}
            layout="outline"
            size="small"
            onClick={() => onMulai()}
          >
            Mulai
          </Button>
        </div>
      </div>
    </>
  );
}
