import { Label, Input, Button, Select, Textarea } from "@windmill/react-ui";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Moment from "react-moment";
import DatePicker from "@wojtekmaj/react-daterange-picker/dist/entry.nostyle";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  tolakPermitToWork,
  validasiPermitToWork,
} from "../../reducer/PermitToWorkSlice";
import { selectUser } from "../../reducer/AuthSlice";
import BadgePtwStatus from "../../components/Badge/BadgePtwStatus";

export default function PermitToWorkReview({
  setIsOpenReview,
  isOpenReview,
  dataReview,
}) {
  const { register, handleSubmit, watch } = useForm();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const {
    nama_pekerjaan,
    nama_proyek,
    rencana_tanggal_mulai,
    rencana_tanggal_selesai,
    jenis_izin,
    deskripsi_pekerjaan,
    lokasi,
    penanggung_jawab,
    peralatan,
    status,
    masa_berlaku,
  } = dataReview;

  const peralatanKerjaPanas = [
    {
      value: "grinder",
      label: "Grinder",
    },
    {
      value: "kompresor",
      label: "Kompresor",
    },
    {
      value: "las",
      label: "Las",
    },
    {
      value: "pemotong besi",
      label: "Pemotong Besi",
    },
  ];

  const peralatanKerjaDiketinggian = [
    {
      value: "proteksi jatuh",
      label: "Proteksi Jatuh",
    },
    {
      value: "pelindung mata",
      label: "Pelindung Mata",
    },
    {
      value: "respirator",
      label: "Respirator",
    },
    {
      value: "pelindung lengan",
      label: "Pelindung Lengan",
    },
  ];

  const peralatanKerjaKelistrikan = [
    {
      value: "alat proteksi badan",
      label: "Alat Proteksi Badan",
    },
    {
      value: "sarung tangan",
      label: "Sarung Tangan",
    },
  ];

  const peralatanKerjaEkskavasi = [
    {
      value: "ekskavator",
      label: "Ekskavator",
    },
    {
      value: "cangkul",
      label: "Cangkul",
    },
    {
      value: "pompa air",
      label: "Pompa Air",
    },
  ];

  const [currentCheckbox, setCurrentCheckbox] = useState(peralatan);
  const [currentChecboxs, setCurrentCheckboxs] = useState("");
  const [currentDaterange, setCurrentDaterange] = useState(
    new Date(rencana_tanggal_mulai),
    new Date()
  );

  const checkbox = (props) => {
    if (props === "Pekerjaan Panas") {
      return setCurrentCheckboxs(peralatanKerjaPanas);
    } else if (props === "Pekerjaan Di Ketinggian") {
      return setCurrentCheckboxs(peralatanKerjaDiketinggian);
    } else if (props === "Pekerjaan Kelistrikan") {
      return setCurrentCheckboxs(peralatanKerjaKelistrikan);
    } else if (props === "Pekerjaan Ekskavasi") {
      return setCurrentCheckboxs(peralatanKerjaEkskavasi);
    }
  };

  useEffect(() => {
    return checkbox(jenis_izin);
  }, []);

  // const onSubmit = (data) => console.log(data);

  const onSubmit = () => {
    dispatch(
      validasiPermitToWork({ _id: dataReview._id, data: currentDaterange })
    );
    setIsOpenReview(!isOpenReview);
  };

  const onTolak = () => {
    dispatch(tolakPermitToWork({ _id: dataReview._id }));
    setIsOpenReview(!isOpenReview);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-20 sm:items-center sm:justify-center"
      >
        <div
          style={{ width: "800px" }}
          className=" max-w-7xl overflow-hidden bg-white rounded-lg px-6 py-4 shadow-lg"
        >
          <div className="p-4">
            <div className="relative items-center">
              <h2 className="font-bold text-center">PERMIT TO WORK</h2>
              <div className="absolute right-0 top-0 py-1 px-2">
                <div className="flex">
                  <BadgePtwStatus status={status} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">Proyek</span>
                  </Label>
                  <p className="truncate text-base">{nama_proyek}</p>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Item Pekerjaan
                    </span>
                  </Label>
                  <p className="truncate text-base">{nama_pekerjaan}</p>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Jenis Izin Kerja
                    </span>
                    <p className="truncate text-base">{jenis_izin}</p>
                  </Label>
                </div>
              </div>
              <div className="">
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Tanggal Mulai Pelaksanaan
                    </span>
                    <p className="truncate text-base">
                      <Moment format="dddd, DD-MM-YYYY">
                        {rencana_tanggal_mulai}
                      </Moment>
                    </p>
                  </Label>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Tanggal Selesai Pelaksanaan
                    </span>
                    <p className="truncate text-base">
                      <Moment format="dddd, DD-MM-YYYY">
                        {rencana_tanggal_selesai}
                      </Moment>
                    </p>
                  </Label>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Penanggung Jawab
                    </span>
                    <p className="truncate text-base">
                      {penanggung_jawab.name}
                    </p>
                  </Label>
                </div>
              </div>
            </div>
            <div className="py-2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">Lokasi</span>
                <p className="truncate text-base">{lokasi}</p>
              </Label>
            </div>
            <div className="py-2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">
                  Deskripsi Pekerjaan
                </span>
                <p className="truncate text-base">{deskripsi_pekerjaan}</p>
              </Label>
            </div>
            <div className="py2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">Peralatan</span>
              </Label>
              <div className="flex flex-wrap rounded-md p-4">
                {currentChecboxs !== ""
                  ? currentChecboxs.map((value, idx) => {
                      let component;
                      currentCheckbox.map((val) => {
                        if (value.value === val) {
                          return (component = (
                            <div key={idx} className="flex items-center mr-4">
                              <input
                                defaultChecked="true"
                                value={value.value}
                                type="checkbox"
                                className="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                {value.label}
                              </label>
                            </div>
                          ));
                        } else {
                          return (component = (
                            <div key={idx} className="flex items-center mr-4">
                              <input
                                value={value.value}
                                type="checkbox"
                                className="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                {value.label}
                              </label>
                            </div>
                          ));
                        }
                      });
                      return component;
                    })
                  : ""}
              </div>
            </div>
            {user.role === "sm" && status === "Diajukan" ? (
              <div className="py2">
                <Label className="mt-2">
                  <span className="font-semibold text-xs">Masa Berlaku</span>
                </Label>
                <DatePicker
                  name="masa_berlaku"
                  value={currentDaterange}
                  onChange={setCurrentDaterange}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          {status === "Disetujui" ? (
            <div className="py2">
              <Label className="mt-2 text-xs">
                Permit to work telah disetujui dengan masa berlaku{" "}
                <Moment format="dddd, DD-MM-YYYY">{masa_berlaku.mulai}</Moment>{" "}
                -{" "}
                <Moment format="dddd, DD-MM-YYYY">
                  {masa_berlaku.selesai}
                </Moment>
              </Label>
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-white">
            {/* <button onClick={cekData}>cek</button> */}
            <div className="hidden sm:block">
              <Button
                layout="outline"
                onClick={() => setIsOpenReview(!isOpenReview)}
              >
                Keluar
              </Button>
            </div>
            {user.role === "sm" && status === "Diajukan" ? (
              <>
                <div className="hidden sm:block">
                  <Button color="red" onClick={() => onTolak()}>
                    Tolak
                  </Button>
                </div>
                <div className="hidden sm:block">
                  <Button type="submit">Setujui</Button>
                </div>
              </>
            ) : (
              ""
            )}
            {/* <div className="block w-full sm:hidden">
              <Button
                block
                size="large"
                layout="outline"
                onClick={() => setIsOpenReview(!isOpenReview)}
              >
                Batal
              </Button>
            </div>
            <div className="block w-full sm:hidden">
              <Button block size="large" type="submit">
                Ajukan
              </Button>
            </div> */}
          </div>
        </div>
      </form>
    </>
  );
}
