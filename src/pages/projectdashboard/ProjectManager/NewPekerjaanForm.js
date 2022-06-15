import { useForm } from "react-hook-form";
import { Label, Select, Button } from "@windmill/react-ui";

export default function NewPekerjaanForm({
  modalNewPekerjaan,
  setModalNewPekerjaan,
}) {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {console.log(data);};
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
                <span className="font-semibold text-xs">Pekerjaan</span>
              </Label>
              <Select {...register("nama_pekerjaan")}></Select>
            </div>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">
                  Rencana Tanggal Mulai
                </span>
              </Label>
              <input
              {...register("rencana_tanggal_mulai")}
                type="date"
                className=" mt-1 rounded-md border-gray-300 focus:border-gray-600 ring-0 focus:ring-gray-300 focus:ring-2"
              />
            </div>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">
                  Rencana Tanggal Selesai
                </span>
              </Label>
              <input
                {...register("rencana_tanggal_selesai")}
                type="date"
                className=" mt-1 rounded-md border-gray-300 focus:border-gray-600 ring-0 focus:ring-gray-300 focus:ring-2"
              />
            </div>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">Permit To Work</span>
              </Label>
              <div className="flex items-center mr-4">
                <input
                  {...register("permit")}
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
            <Button onClick={() => setModalNewPekerjaan(!modalNewPekerjaan)} layout="outline">Batal</Button>
            <Button type="submit" layout="primary">Buat Pekerjaan</Button>
          </div>
        </form>
      </div>
    </>
  );
}
