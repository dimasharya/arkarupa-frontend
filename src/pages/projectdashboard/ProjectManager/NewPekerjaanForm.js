import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Label, Select, Button } from "@windmill/react-ui";
import Api from "../../../reducer/Api";
import { useParams } from "react-router-dom";
import { addPekerjaan } from "../../../reducer/ProjectSelectedSlice";

export default function NewPekerjaanForm({
  modalNewPekerjaan,
  setModalNewPekerjaan,
}) {
  const { handleSubmit, register } = useForm();

  const { projectId } = useParams();

  const dispatch = useDispatch();

  const [anggaranBiaya, setAnggaranBiaya] = useState([]);
  const fetchData = async () => {
    await Api.get("/api/projectbudget/byprojectidnewpekerjaan", {
      params: { id_proyek: projectId },
    }).then((res) => {
      if (res.status === 200) {
        setAnggaranBiaya(res.data);
      }
    });
  };

  useEffect(() => {
    let load = true;
    fetchData();
    return () => (load = false);
  }, []);

  const onSubmit = (props) => {
    let satuan, volume
    let result = anggaranBiaya.find(
      (item) => (item._id = props.item_pekerjaan)
    );
    volume = result.volume;
    satuan = result.satuan
    const data = {
      ...props,
      volume,
      satuan
    };
    dispatch(addPekerjaan({id_proyek: projectId, data: data}))
    setModalNewPekerjaan(!modalNewPekerjaan)
  };
  return (
    <>
      <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-20 sm:items-center sm:justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" max-w-7xl w-4/12 mx-auto overflow-hidden bg-white rounded-lg px-6 py-4 shadow-lg"
        >
          <div className="flex flex-col p-4 gap-2">
            <h2 className="font-bold text-center">FORM BUAT PEKERJAAN BARU</h2>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">Nama Pekerjaan</span>
              </Label>
              <input
                {...register("nama_pekerjaan", { required: true })}
                type="text"
                className=" mt-1 rounded-md text-sm border-gray-300 focus:border-gray-600 ring-0 focus:ring-gray-300 focus:ring-2"
              />
            </div>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">Pekerjaan</span>
              </Label>
              <Select
                defaultValue={"Pilih Pekerjaan"}
                {...register("item_pekerjaan", { required: true })}
              >
                <option disabled value={"Pilih Pekerjaan"}>
                  Pilih Pekerjaan
                </option>
                {anggaranBiaya.length !== 0
                  ? anggaranBiaya.map((item, idx) => {
                      return (
                        <option key={idx} value={item._id}>
                          {item.item_pekerjaan.nama_pekerjaan}
                        </option>
                      );
                    })
                  : ""}
              </Select>
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
                  className="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Ya
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <Button
              onClick={() => setModalNewPekerjaan(!modalNewPekerjaan)}
              layout="outline"
            >
              Batal
            </Button>
            <Button type="submit" layout="primary">
              Buat Pekerjaan
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
