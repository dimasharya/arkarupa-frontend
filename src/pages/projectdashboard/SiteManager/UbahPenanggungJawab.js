import { useForm } from "react-hook-form";
import { Label, Select, Button, Avatar } from "@windmill/react-ui";
import Api from "../../../reducer/Api";
import { useEffect, useState } from "react";
import { getRoles } from "../../../utils/getRoles";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { tambahPenanggungJawab } from "../../../reducer/ProjectSelectedSlice";
import { setNotification } from "../../../reducer/NotificationSlice";

export default function UbahPenanggungJawab({
  modalEditPenanggungJawab,
  setModalEditPenanggungJawab,
  dataEdit,
}) {
  const { handleSubmit, register } = useForm();

  let { projectId } = useParams();

  const dispatch = useDispatch();

  const [dataUser, setDataUser] = useState("");

  const getSupervisor = async () => {
    return await Api.get(`/api/project/getpenanggungjawab/${projectId}`).then(
      (res) => {
        let users = [];
        res.data.team.forEach((el) => {
          if (el.role === "spv") {
            users.push(el);
          }
        });
        setDataUser(users);
      }
    );
  };

  useEffect(() => {
    getSupervisor();
  }, []);

  const onSubmit = (data) => {
    if (data.users) {
      let users;
      dataUser.forEach((el) => {
        if (el._id === data.users) {
          users = el;
        }
      });
      dispatch(
        tambahPenanggungJawab({
          id_proyek: projectId,
          _id: dataEdit._id,
          data: users,
        })
      );
      setModalEditPenanggungJawab(!modalEditPenanggungJawab);
    } else {
      dispatch(
        setNotification({ type: "error", message: "Pilih salah satu pekerja" })
      );
    }
  };
  return (
    <>
      <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-20 sm:items-center sm:justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" max-w-7xl w-4/12 mx-auto overflow-hidden bg-white rounded-lg px-6 py-4 shadow-lg"
        >
          <div className="flex flex-col p-4 gap-2">
            <h2 className="font-bold text-center">
              UBAH PENANGGUNG JAWAB PEKERJAAN
            </h2>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">Pilih Pekerja</span>
              </Label>
            </div>
            <div className="relative h-40 overflow-y-auto scrollbar-hide p-4 border rounded-md">
              {dataUser !== ""
                ? dataUser.map((item, idx) => {
                    const id = item._id;
                    if(dataEdit.penanggung_jawab._id === id){
                        return (
                            <div
                              key={item._id}
                              className="flex items-center space-x-4 mb-2"
                            >
                              <input
                                {...register("users")}
                                type="radio"
                                checked={true}
                                value={id}
                                className="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <div className="flex-shrink-0">
                                <Avatar
                                  className="align-middle"
                                  src={item.avatar}
                                  alt=""
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                  {getRoles(item.role)}
                                </p>
                              </div>
                            </div>
                          );
                    }else{
                        return (
                            <div
                              key={item._id}
                              className="flex items-center space-x-4 mb-2"
                            >
                              <input
                                {...register("users")}
                                type="radio"
                                value={id}
                                className="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <div className="flex-shrink-0">
                                <Avatar
                                  className="align-middle"
                                  src={item.avatar}
                                  alt=""
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                  {getRoles(item.role)}
                                </p>
                              </div>
                            </div>
                          );
                    }
                  })
                : ""}
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <Button
              onClick={() =>
                setModalEditPenanggungJawab(!modalEditPenanggungJawab)
              }
              layout="outline"
            >
              Batal
            </Button>
            <Button type="submit" layout="primary">
              Ubah Penanggung Jawab
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
