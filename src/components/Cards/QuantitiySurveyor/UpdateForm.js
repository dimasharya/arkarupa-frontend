import { useForm } from "react-hook-form";
import { Label, Input, Button } from "@windmill/react-ui";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateVolume } from "../../../reducer/ProjectSelectedSlice";
import { setNotification } from "../../../reducer/NotificationSlice";
import { selectUser } from "../../../reducer/AuthSlice";

export default function UpdateForm({ setIsOpen, isOpen, dataEdit }) {
  const { handleSubmit, register } = useForm();
  let { projectId } = useParams();
  const dispatch = useDispatch();

  const user = useSelector(selectUser)

  const onSubmit = (data) => {
    if(parseFloat(data.volume_sekarang.replace(",", ".")) > dataEdit.volume){
      dispatch(setNotification({type: "error", message: "Data lebih dari volume yang ditentukan!"}))
    } else if(parseFloat(data.volume_sekarang.replace(",", ".")) < dataEdit.volume_sekarang){
      dispatch(setNotification({type: "error", message: "Data kurang dari volume progres sekarang!"}))
  }else{
      dispatch(
        updateVolume({
          id_proyek: projectId,
          _id: dataEdit._id,
          volume: data.volume_sekarang,
          surveyor: user._id
        })
      );
      setIsOpen(!isOpen);
    }
  };

  // const [volumeSekarang, setVolumeSekarang] = useState(
  //   dataEdit.volume_sekarang
  // );

  // const onChange = (data) => {
  //   setVolumeSekarang(data.target.value);
  // };
  return (
    <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-20 sm:items-center sm:justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" max-w-2xl w-4/12 mx-auto overflow-hidden bg-white rounded-lg px-6 py-4 shadow-lg"
      >
        <div className="p-4">
          <h2 className="font-bold text-center">
            FORM UPDATE PROGRES PEKERJAAN
          </h2>
          <div className="grid">
            <div className="pb-2">
              <Label>
                <span className="font-semibold text-xs">Nama Pekerjaan</span>
              </Label>
              <p className="text-base">{dataEdit.nama_pekerjaan}</p>
            </div>
            <div className="col-span-3 pb-2">
              <Label>
                <span className="font-semibold text-xs">Volume</span>
              </Label>
              <p className="text-base">
                {dataEdit.volume} <span>{dataEdit.satuan}</span>
              </p>
            </div>
            <div className="col-span-3 pb-2">
              <Label>
                <span className="font-semibold text-xs">Volume Sekarang</span>
              </Label>
              <div className="flex gap-2 flex-grow items-center">
                <input
                  {...register("volume_sekarang", { required: true })}
                  type="text"
                  className=" mt-1 rounded-md w-full text-sm border-gray-300 focus:border-gray-600 ring-0 focus:ring-gray-300 focus:ring-2"
                  defaultValue={dataEdit.volume_sekarang}
                  // onChange={(data) => onChange(data)}
                />
                <p className="text-sm w-20 font-bold">{dataEdit.satuan}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-white">
          <div className="hidden sm:block">
            <Button layout="outline" onClick={() => setIsOpen(!isOpen)}>
              Batal
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button type="submit">Simpan</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button
              block
              size="large"
              layout="outline"
              onClick={() => setIsOpen(!isOpen)}
            >
              Batal
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button type="submit" block size="large">
              Simpan
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
