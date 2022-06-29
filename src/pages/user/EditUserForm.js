import { Button, Input, Label, Select } from "@windmill/react-ui";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../reducer/UserManagementSlice";
import {
  clearMessage,
  setMessage,
  validationMessageSelector,
} from "../../reducer/ValidationMessageSlice";

export default function EditUserForm({
  setModalEditUser,
  modalEditUser,
  dataEdit,
}) {
  const {
    _id,
    name,
    email,
    role,
    phone,
    education,
    college,
    address,
    city,
    state,
    postcode,
  } = dataEdit;

  const { handleSubmit, register } = useForm();

  const dispatch = useDispatch();

  const validation = useSelector(validationMessageSelector);
  const [showAlert, setShowAlert] = useState(false);

  const clearNotification = () => {
    setShowAlert(false);
    if (
      validation.type === "success" ||
      validation.message === "User berhasil diupdate"
    ) {
      setModalEditUser(false);
    }
    dispatch(clearMessage());
  };

  useEffect(() => {
    if (validation.type !== "") {
      setShowAlert(!showAlert);
      setTimeout(() => {
        return clearNotification();
      }, 3000);
    }
  }, [validation]);

  const onSubmit = (props) => {
    console.log("props");
    // if (props.role !== "Pilih Posisi") {
    //   dispatch(editUser({_id: _id, data: props }));
    // } else {
    //   dispatch(setMessage({ type: "error", message: "Pilih posisi user" }));
    // }
  };
  return (
    <>
      <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-20 sm:items-center sm:justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" max-w-7xl w-6/12 mx-auto overflow-hidden bg-white rounded-lg px-6 py-4 shadow-lg"
        >
          <div className="flex flex-col p-4 gap-2">
            <h2 className="font-bold text-center">FORM EDIT USER</h2>
            {showAlert &&
              (validation.type === "success" ? (
                <div
                  className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                  role="alert"
                >
                  <div>
                    <span className="font-medium">{validation.message}</span>
                  </div>
                </div>
              ) : (
                <div
                  className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  <div>
                    <span className="font-medium">{validation.message}</span>
                  </div>
                </div>
              ))}

            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">Nama</span>
              </Label>
              <Input
                {...register("name", { required: true })}
                defaultValue={name}
                type="text"
                className=" mt-1 rounded-md text-sm border-gray-300 focus:border-gray-600 ring-0 focus:ring-gray-300 focus:ring-2"
              />
            </div>

            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">Email</span>
              </Label>
              <Input
                disabled
                {...register("email", { required: true })}
                defaultValue={email}
                type="text"
                className=" mt-1 rounded-md text-sm border-gray-300 focus:border-gray-600 ring-0 focus:ring-gray-300 focus:ring-2"
              />
            </div>

            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">Posisi</span>
              </Label>
              <Select
                defaultValue={role}
                {...register("role", { required: true })}
              >
                <option disabled value={"Pilih Posisi"}>
                  Pilih Posisi
                </option>
                <option value={"pm"}>Project Manager</option>
                <option value={"sm"}>Site Manager</option>
                <option value={"spv"}>Supervisor</option>
                <option value={"se"}>Staff Engineer</option>
                <option value={"qs"}>Quantity Surveyor</option>
                <option value={"adm"}>Administrator</option>
              </Select>
            </div>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">No Telepon</span>
              </Label>
              <Input
                {...register("phone", { required: true })}
                defaultValue={phone}
                type="tel"
                className=" mt-1 text-sm rounded-md border-gray-300 focus:border-gray-600 ring-0 focus:ring-gray-300 focus:ring-2"
              />
            </div>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">Pendidikan</span>
              </Label>
              <Input
                {...register("education", { required: true })}
                defaultValue={education}
                type="text"
                className=" mt-1 text-sm rounded-md border-gray-300 focus:border-gray-600 ring-0 focus:ring-gray-300 focus:ring-2"
              />
            </div>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">
                  Institusi Pendidikan
                </span>
              </Label>
              <Input
                {...register("college", { required: true })}
                type="text"
                defaultValue={college}
                className=" mt-1 text-sm rounded-md border-gray-300 focus:border-gray-600 ring-0 focus:ring-gray-300 focus:ring-2"
              />
            </div>
            <div className="col-span-3 py-2">
              <Label className="mt-2">
                <span className="font-semibold text-xs">Alamat</span>
                <Input
                  className="mt-1"
                  placeholder="Nama Jalan, RT/RW, Kelurahan"
                  defaultValue={address}
                  {...register("address", { required: true })}
                />
              </Label>
              <div className="grid grid-cols-3 gap-4">
                <Label className="mt-2">
                  <span className="font-semibold text-xs">Kota</span>
                  <Input
                    className="mt-1"
                    defaultValue={city}
                    {...register("city", { required: true })}
                  />
                </Label>
                <Label className="mt-2">
                  <span className="font-semibold text-xs">Provinsi</span>
                  <Input
                    name="alamat_provinsi_proyek"
                    className="mt-1"
                    defaultValue={state}
                    {...register("state", { required: true })}
                  />
                </Label>
                <Label className="mt-2">
                  <span className="font-semibold text-xs">Kode Pos</span>
                  <Input
                    name="kode_pos_alamat_proyek"
                    className="mt-1"
                    defaultValue={postcode}
                    {...register("postcode", { required: true })}
                  />
                </Label>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <Button
              onClick={() => setModalEditUser(!modalEditUser)}
              layout="outline"
            >
              Batal
            </Button>
            <Button type="submit" layout="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
