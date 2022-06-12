import { useForm } from "react-hook-form";
import { Label, Input, Button } from "@windmill/react-ui";
import { useState } from "react";

export default function UpdateForm({ setIsOpen, isOpen, dataPekerjaan }) {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(volumeSekarang);
  };

  const [volumeSekarang, setVolumeSekarang] = useState(50);

  const onChange = (data) => {
    setVolumeSekarang(data.target.value);
  };
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
              <p className="text-base">Galian Tanah 60 CM</p>
            </div>
            <div className="col-span-3 pb-2">
              <Label>
                <span className="font-semibold text-xs">Volume</span>
              </Label>
              <p className="text-base">
                245 <span>m3</span>
              </p>
            </div>
            <div className="col-span-3 pb-2">
              <Label>
                <span className="font-semibold text-xs">Volume Sekarang</span>
              </Label>
              <div className="flex gap-2 items-center">
                <input
                  className="block w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                  type="range"
                  min={0}
                  max={245}
                  defaultValue={volumeSekarang}
                  onChange={(data) => onChange(data)}
                />
                <span> {volumeSekarang} m3</span>
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
