import { Label, Input, Button, Select, Textarea } from "@windmill/react-ui";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function PermitToWorkForm({ setIsOpen, isOpen }) {
  const { register, handleSubmit, watch } = useForm();

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

  const [currentChecbox, setCurrentCheckbox] = useState(peralatanHotWork);

  const onSubmit = (data) => console.log(data);

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
                    <span className="font-semibold text-xs">Proyek</span>
                  </Label>
                  <Select className="truncate w-full" {...register("proyek", {required: true})}>
                    <option>serverside render</option>
                    <option>Item Pekerjaan</option>
                    <option>Material</option>
                  </Select>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Item Pekerjaan
                    </span>
                  </Label>
                  <Select className="truncate w-full" {...register("item_pekerjaan", {required: true})}>
                    <option>serverside render</option>
                    <option>Item Pekerjaan</option>
                    <option>Material</option>
                  </Select>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Jenis Pekerjaan
                    </span>
                    <Select className="truncate w-full" {...register("jenis_pekerjaan", {required: true})}>
                      <option>Cold Work Permit</option>
                      <option>Item Pekerjaan</option>
                      <option>Material</option>
                    </Select>
                  </Label>
                </div>
              </div>
              <div className="">
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Tanggal Pelaksanaan Pekerjaan
                    </span>
                    <Input type="date" {...register("tanggal_pelaksanaan", {required: true})} />
                  </Label>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">
                      Penanggung Jawab
                    </span>
                    <Input
                    {...register("penanggung_jawab", {required: true})}
                      placeholder="ex: Perumahan"
                    />
                  </Label>
                </div>
                <div className="py-2">
                  <Label className="mt-2">
                    <span className="font-semibold text-xs">Lokasi</span>
                    <Input
                    {...register("lokasi", {required: true})}
                      placeholder="ex: Perumahan"
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
                <Textarea {...register("deskripsi_pekerjaan")} />
              </Label>
            </div>
            <div className="py2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">Peralatan</span>
              </Label>
              <div className="flex flex-wrap border border-gray-300 rounded-md p-4">
                {currentChecbox.map((value, idx) => {
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
                })}
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
              <Button type="submit">Ajukan</Button>
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
