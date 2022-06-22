import { Label, Input, Button, Select, Textarea } from "@windmill/react-ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Moment from "react-moment";
import DatePicker from "@wojtekmaj/react-daterange-picker/dist/entry.nostyle";
import moment from "moment";

export default function PermitToWorkReview({ setIsOpenReview, isOpenReview }) {
  const { register, handleSubmit, watch } = useForm();

  const currentChecked = ["grinder", "las"];

  const peralatanHotWork = [
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
  ];

  const rencana_tanggal_mulai = new Date("2022-06-23")

  const [currentCheckbox, setCurrentCheckbox] = useState(currentChecked);
  const [currentDaterange, setCurrentDaterange] = useState(
    rencana_tanggal_mulai,
    new Date()
  );

  // const onSubmit = (data) => console.log(data);

  const onSubmit = () => {console.log(currentDaterange)}

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-20 sm:items-center sm:justify-center"
      >
        <div style={{"width": "800px"}} className=" max-w-7xl overflow-hidden bg-white rounded-lg px-6 py-4 shadow-lg">
          <div className="p-4">
            <h2 className="font-bold text-center">PERMIT TO WORK</h2>
            <div className="py-2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">Nomor :</span>
                <p className="truncate text-base">18/2022/BBP/PTW</p>
              </Label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">Proyek</span>
                  </Label>
                  <p className="truncate text-base">BSD Botanical Park</p>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Item Pekerjaan
                    </span>
                  </Label>
                  <p className="truncate text-base">Pekerjaan Galian 1,5 M</p>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Jenis Pekerjaan
                    </span>
                    <p className="truncate text-base">Izin Kerja Galian</p>
                  </Label>
                </div>
              </div>
              <div className="">
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Pelaksanaan Pekerjaan
                    </span>
                    <p className="truncate text-base">
                      <Moment format="dddd, DD-MM-YYYY">2022-03-18</Moment>
                    </p>
                  </Label>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Penanggung Jawab
                    </span>
                    <p className="truncate text-base">Sentot Wibisono</p>
                  </Label>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">Lokasi</span>
                    <p className="truncate text-base">
                      Jalan Asia 18, Tanggerang, Banten
                    </p>
                  </Label>
                </div>
              </div>
            </div>
            <div className="py-2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">
                  Pekerjaan Yang Akan Dilakukan
                </span>
                <p className="truncate text-base">Melakukan Penyetelan</p>
              </Label>
            </div>
            <div className="py2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">Peralatan</span>
              </Label>
              <div className="flex flex-wrap rounded-md p-4">
                {peralatanHotWork.map((value, idx) => {
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
                })}
              </div>
            </div>

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
          </div>
          <div className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-white">
            {/* <button onClick={cekData}>cek</button> */}
            <div className="hidden sm:block">
              <Button
                layout="outline"
                onClick={() => setIsOpenReview(!isOpenReview)}
              >
                Batal
              </Button>
            </div>
            <div className="hidden sm:block">
              <Button
                color="red"
                onClick={() => setIsOpenReview(!isOpenReview)}
              >
                Tolak
              </Button>
            </div>
            <div className="hidden sm:block">
              <Button type="submit">Setujui</Button>
            </div>
            <div className="block w-full sm:hidden">
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
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
