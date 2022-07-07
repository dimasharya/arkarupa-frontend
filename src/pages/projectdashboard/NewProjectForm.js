import { Label, Input, Button, HelperText } from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { tambahProyekBaru } from "../../reducer/ProjectSlice";
import { selectUser } from "../../reducer/AuthSlice";
import {
  clearNotification,
  notificationSelector,
} from "../../reducer/NotificationSlice";
import { useEffect } from "react";

export default function NewProjectForm({ isOpen, setIsOpen }) {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const Notification = useSelector(notificationSelector);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", data.files[0]);
    formData.append("team", user._id);
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    dispatch(tambahProyekBaru(formData));
  };

  const clearNotifications = () => {
    if (Notification.message === "Proyek baru berhasil ditambah") {
      setIsOpen(false);
    }
    dispatch(clearNotification());
  };

  useEffect(() => {
    if (Notification.type !== "") {
      //setShowAlert(!showAlert);
      setTimeout(() => {
        return clearNotifications()
      }, 3000);
    }
  }, [Notification]);

  // useEffect(() => {
  //   let mounted = true
  //   if (
  //     Notification.type === "success" &&
  //     Notification.message === "Proyek baru berhasil ditambah"
  //   ) {
  //     setIsOpen(!isOpen);
  //   }
  //   return mounted = false
  // }, [Notification]);

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
                  {...register("kategori", { required: true })}
                />
              </Label>
            </div>
            <div className="col-span-3 py-2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">Alamat</span>
                <Input
                  className="mt-1"
                  placeholder="Nama Jalan, RT/RW, Kelurahan"
                  {...register("alamat", { required: true })}
                />
              </Label>
              <div className="grid grid-cols-3 gap-4">
                <Label className="mt-2">
                  <span className="font-semibold text-xs">Kota</span>
                  <Input
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
              <input
                {...register("files")}
                className="block w-full pl-5 pr-1 py-1 my-2 text-sm focus:border-gray-400 border-gray-300 dark:border-gray-600 focus:ring focus:ring-gray-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700"
                type="file"
              />
              <HelperText>File berformat .pdf, maksimal 30MB</HelperText>
              {/* <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleUpload}
              /> */}
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
