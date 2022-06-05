import { Label, Input, Button } from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

export default function NewProjectForm({ isOpen, setIsOpen }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleUpload = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-20 sm:items-center sm:justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" max-w-7xl w-4/12 mx-auto overflow-hidden bg-white rounded-lg px-6 py-4 shadow-lg"
      >
        <div className="p-4">
          <h2 className="font-bold text-center">FORM BUAT PROYEK BARU</h2>
          <div className="grid">
            <div className="col-span-3 py-2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">Nama Proyek</span>
                <Input
                  className="mt-1"
                  placeholder="ex: Perumahan Anggrek"
                  {...register("nama_proyek", { required: true })}
                />
              </Label>
            </div>
            <div className="col-span-3 py-2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">Akronim Proyek</span>
                <Input
                  className="mt-1"
                  placeholder="ex: BBG"
                  {...register("akronim_proyek", { required: true })}
                />
              </Label>
            </div>
            <div className="col-span-3 py-2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">Pemilik</span>
                <Input
                  className="mt-1"
                  placeholder="Pemilik"
                  {...register("pemilik", { required: true })}
                />
              </Label>
            </div>
            <div className="col-span-3 py-2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">Kategori Proyek</span>
                <Input
                  className="mt-1"
                  placeholder="ex: Perumahan"
                  {...register("kategori_proyek", { required: true })}
                />
              </Label>
            </div>
            <div className="col-span-3 py-2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">Alamat</span>
                <Input
                  className="mt-1"
                  placeholder="Nama Jalan, RT/RW, Kelurahan"
                  {...register("alamat_proyek", { required: true })}
                />
              </Label>
              <div className="grid grid-cols-3 gap-4">
                <Label className="mt-2">
                  <span className="font-semibold text-xs">Kota</span>
                  <Input
                    name="alamat_kota_proyek"
                    className="mt-1"
                    {...register("kota", { required: true })}
                  />
                </Label>
                <Label className="mt-2">
                  <span className="font-semibold text-xs">Provinsi</span>
                  <Input
                    name="alamat_provinsi_proyek"
                    className="mt-1"
                    {...register("provinsi", { required: true })}
                  />
                </Label>
                <Label className="mt-2">
                  <span className="font-semibold text-xs">Kode Pos</span>
                  <Input
                    name="kode_pos_alamat_proyek"
                    className="mt-1"
                    {...register("kode_pos", { required: true })}
                  />
                </Label>
              </div>
            </div>
            <div className=" col-span-3">
            <Label className="mt-2">
                  <span className="font-semibold text-xs">Berkas Kontrak</span>
                </Label>
              <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleUpload}
              />
            </div>
          </div>
          {/* <Label className="mt-2">
                <span className="font-semibold text-xs">BERKAS KONTRAK</span>
                <Uploader />
              </Label>
              <HelperText valid>* Jika Terdapat Berkas</HelperText> */}
        </div>
        <div className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-white">
          <div className="hidden sm:block">
            <Button layout="outline" onClick={() => setIsOpen(!isOpen)}>
              Batal
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button type="submit">Buat Proyek</Button>
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
              Buat Proyek
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
