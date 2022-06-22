import { Label, Input, Button, Select, Textarea } from "@windmill/react-ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUser } from "../../reducer/AuthSlice";
import { projectSelectedSelectorById, projectSelectedSelectorTeam, tambahPermitTowork } from "../../reducer/ProjectSelectedSlice";

export default function PermitToWorkForm({ setIsOpen, isOpen, dataPermitBaru, modalPermitBaru, setModalPermitBaru }) {
  const { register, handleSubmit } = useForm();

  let {projectId} = useParams()

  const dispatch = useDispatch()

  const proyek = useSelector((state) =>
    projectSelectedSelectorById(state, projectId)
  );

  const team = useSelector(projectSelectedSelectorTeam.selectAll)

  const user = useSelector(selectUser)

  const {nama_pekerjaan, rencana_tanggal_mulai, rencana_tanggal_selesai} = dataPermitBaru

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
      label: "Pemotong Besi"
    }
  ];

  const peralatanKerjaDiketinggian = [
    {
      value: "proteksi jatuh",
      label: "Proteksi Jatuh"
    },
    {
      value: "pelindung mata",
      label: "Pelindung Mata"
    },
    {
      value: "respirator",
      label: "Respirator"
    },
    {
      value: "pelindung lengan",
      label: "Pelindung Lengan"
    }
  ]

  const peralatanKerjaKelistrikan = [
    {
      value: "alat proteksi badan",
      label: "Alat Proteksi Badan"
    },
    {
      value: "sarung tangan",
      label: "Sarung Tangan"
    }
  ]

  const peralatanKerjaEkskavasi = [
    {
      value: "ekskavator",
      label: "Ekskavator"
    },
    {
      value: "cangkul",
      label: "Cangkul"
    },
    {
      value: "pompa air",
      label: "Pompa Air"
    }
  ]

  const [currentChecbox, setCurrentCheckbox] = useState("");

  const onChange = (data) => {
    checkbox(data.target.value)
  }

  const checkbox = (props) => {
    if(props === "Pekerjaan Panas"){
      return setCurrentCheckbox(peralatanKerjaPanas)
    }else if (props === "Pekerjaan Di Ketinggian"){
      return setCurrentCheckbox(peralatanKerjaDiketinggian)
    }else if (props === "Pekerjaan Kelistrikan"){
      return setCurrentCheckbox(peralatanKerjaKelistrikan)
    }else if (props === "Pekerjaan Ekskavasi"){
      return setCurrentCheckbox(peralatanKerjaEkskavasi)
    }
  }

  const onSubmit = (data) => {
    let manajer_lapangan = team.find((item) => item.role === "sm")
    const dataToSubmit = {
      nama_proyek: proyek.nama_proyek,
      id_proyek: proyek._id,
      rencana_tanggal_mulai,
      rencana_tanggal_selesai,
      nama_pekerjaan: dataPermitBaru.nama_pekerjaan,
      item_pekerjaan: dataPermitBaru._id,
      penanggung_jawab: user._id,
      manajer_lapangan: manajer_lapangan._id,
      ...data
    }
    dispatch(tambahPermitTowork({id_proyek: projectId, _id: dataPermitBaru._id, data: dataToSubmit}))
    setModalPermitBaru(!modalPermitBaru)
  }



  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-20 sm:items-center sm:justify-center"
      >
        <div className=" max-w-7xl overflow-hidden bg-white rounded-lg px-6 py-4 shadow-lg">
          <div className="p-4">
            <h2 className="font-bold text-center">FORM PENGAJUAN PERMIT TO WORK</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">Item Pekerjaan</span>
                  </Label>
                  <p className="truncate text-base">{nama_pekerjaan}</p>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Tanggal Pelaksanaan Pekerjaan
                    </span>
                    <p className="truncate text-base"><Moment format="LL">{rencana_tanggal_mulai}</Moment></p>
                  </Label>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Jenis Izin Pekerjaan
                    </span>
                    <Select onClick={(item) => onChange(item)} className="truncate w-full" {...register("jenis_izin", {required: true})}>
                      <option>Pekerjaan Panas</option>
                      <option>Pekerjaan Di Ketinggian</option>
                      <option>Pekerjaan Kelistrikan</option>
                      <option>Pekerjaan Ekskavasi</option>
                    </Select>
                  </Label>
                </div>
              </div>
              <div className="">
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Penanggung Jawab
                    </span>
                    <p className="truncate text-base">{user.name}</p>
                  </Label>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Tanggal Selesai Pekerjaan
                    </span>
                    <p className="truncate text-base"><Moment format="LL">{rencana_tanggal_selesai}</Moment></p>
                  </Label>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">Lokasi</span>
                    <Input
                    {...register("lokasi", {required: true})}
                    />
                  </Label>
                </div>
              </div>
            </div>
            <div className="py-2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">
                  Pekerjaan Yang Akan Dilakukan
                </span>
                <Textarea {...register("deskripsi_pekerjaan", {required: true})} />
              </Label>
            </div>
            <div className="py2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">Peralatan</span>
              </Label>
              <div className="flex flex-wrap border border-gray-300 rounded-md p-4">
                {currentChecbox !== "" ? currentChecbox.map((value, idx) => {
                  return (
                    <div key={idx} className="flex items-center mr-4">
                      <input
                        {...register("peralatan")}
                        value={value.value}
                        type="checkbox"
                        className="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {value.label}
                      </label>
                    </div>
                  );
                }):""}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-white">
            <div className="hidden sm:block">
              <Button layout="outline" onClick={() => setModalPermitBaru(!modalPermitBaru)}>
                Batal
              </Button>
            </div>
            <div className="hidden sm:block">
              <Button type="submit">Ajukan</Button>
            </div>
            <div className="block w-full sm:hidden">
              <Button
                block
                size="large"
                layout="outline"
                onClick={() => setModalPermitBaru(!modalPermitBaru)}
              >
                Batal
              </Button>
            </div>
            <div className="block w-full sm:hidden">
              <Button block size="large" type="submit">
                Ajukan
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
