import { useForm } from "react-hook-form";
import { Label, Select, Button, Avatar } from "@windmill/react-ui";
import Api from "../../../reducer/Api";
import { useEffect, useState } from "react";
import { getRoles } from "../../../utils/getRoles";
import { useDispatch } from "react-redux";
import {
  addTeam,
  projectSelectedSelectorTeam,
} from "../../../reducer/ProjectSelectedSlice";

export default function NewTeamForm({ modalNewTeam, setModalNewTeam, projectId }) {
  const { handleSubmit, register } = useForm();

  const dispatch = useDispatch();

  const [dataUser, setDataUser] = useState("");

  const getAllUser = async () => {
    return await Api.get("/api/users/getalluser").then((res) => {
      let users = [];
      res.data.forEach((el) => {
        if (el.role !== "pm" && el.role !== "adm") {
          users.push(el);
        }
      });
      setDataUser(users);
    });
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const onSubmit = (data) => {
    if (data.users) {
      let users = [];
      data.users.forEach((element) => {
        dataUser.forEach((el) => {
          if (element === el._id) {
            users.push(el);
          }
        });
      });
      dispatch(addTeam({id: projectId, data: users}));
      setModalNewTeam(!modalNewTeam)
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
            <h2 className="font-bold text-center">FORM TIM BARU</h2>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">Pilih Tim</span>
              </Label>
            </div>
            <div className="relative h-40 overflow-y-auto scrollbar-hide p-4 border rounded-md">
              {dataUser !== ""
                ? dataUser.map((item, idx) => {
                    const id = item._id;
                    return (
                      <div
                        key={item._id}
                        className="flex items-center space-x-4 mb-2"
                      >
                        <input
                          {...register("users")}
                          type="checkbox"
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
                  })
                : ""}
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <Button
              onClick={() => setModalNewTeam(!modalNewTeam)}
              layout="outline"
            >
              Batal
            </Button>
            <Button type="submit" layout="primary">
              Tambah Team
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
