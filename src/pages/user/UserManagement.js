import React, { useEffect, useState } from "react";
import { Button, Avatar, Badge } from "@windmill/react-ui";
import { TrashIcon, EditIcon, PlusCircle } from "../../icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  deleteUser,
  loadUserManagement,
  selectUserManagement,
} from "../../reducer/UserManagementSlice";
import { getRoles } from "../../utils/getRoles";
import NewUserForm from "./NewUserForm";
import EditUserForm from "./EditUserForm";

export default function UserManagement() {
  const dispatch = useDispatch();

  const location = useLocation();

  const User = useSelector(selectUserManagement.selectAll);

  useEffect(() => {
    dispatch(loadUserManagement());
  }, [location]);

  const onDelete = (props) => {
    console.log(props);
    dispatch(deleteUser({_id : props}))
  }

  const [modalNewUser, setModalNewUser] = useState(false)
  const [modalEditUser, setModalEditUser] = useState(false)

  const [dataEdit, setDataEdit] = useState("")

  const onEdit = (props) => {
    setDataEdit(props)
    setModalEditUser(!modalEditUser)
  }


  return (
    <>
      <div className="gap-4">
        <div className="bg-white p-4 rounded-xl">
          <div className="flex items-center text-sm font-semibold justify-between">
            <div className="flex px-4 items-center">
              <h4 className="pl-3">MANAJEMEN PENGGUNA</h4>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => setModalNewUser(!modalNewUser)} iconLeft={PlusCircle} size="small" layout="outline">
                Tambah Pengguna
              </Button>
              <div className="flex border mr-2 items-center rounded-md hover:border-gray-400 duration-150">
                <div className="text-center w-10 mx-1 border-r">
                  <FontAwesomeIcon icon={faSearch} size="xs" />
                </div>
                <input
                  placeholder="Cari pengguna ..."
                  className="w-full rounded-r-md p-2 text-sm font-medium"
                />
              </div>
            </div>
          </div>
          <div className=" mt-3 p-2 rounded-lg bg-gray-50">
            <ul className="relative h-80 overflow-y-scroll">
              {User
                ? User.map((item, idx) => {
                    return (
                      <li key={idx} className="flex flex-row p-4 items-center border gap-4 bg-white hover:border-gray-300 hover:shadow-sm duration-150 rounded-md mb-2">
                        <div className="flex flex-row gap-4 px-4 w-2/6 items-center">
                          <Avatar
                            className="align-middle"
                            src={item.avatar}
                            alt="user"
                            aria-hidden="true"
                          />
                          <label className="truncate text-sm font-semibold">
                            {item.name}
                          </label>
                        </div>
                        <div className="flex flex-col w-1/6">
                          <label className="text-xs font font-semibold text-gray-500">
                            Jabatan
                          </label>
                          <label className="truncate text-sm">
                            {getRoles(item.role)}
                          </label>
                        </div>
                        <div className="flex w-1/6">
                          <Badge type="success">{item.status}</Badge>
                        </div>
                        <div className="flex flex-col w-1/6">
                          <label className="text-xs font font-semibold text-gray-500">
                            Terakhir Diperbarui
                          </label>
                          <label className="text-sm">
                            <Moment locale="id" fromNow>
                              {item.date}
                            </Moment>
                          </label>
                        </div>
                        <div className="flex gap-2 w-1/">
                          <Button
                            icon={EditIcon}
                            onClick={() => onEdit(item)}
                            size="small"
                            layout="primary"
                          />
                          <Button
                            className="text-white bg-red-700 border border-transparent active:bg-red-600 hover:bg-red-700 focus:ring focus:ring-red-300"
                            icon={TrashIcon}
                            onClick={() => onDelete(item._id)}
                            size="small"
                            layout="danger"
                          />
                        </div>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
        </div>
      </div>
      {modalNewUser && (<NewUserForm modalNewUser={modalNewUser} setModalNewUser={setModalNewUser} />)}      
      {modalEditUser && (<EditUserForm dataEdit={dataEdit} modalEditUser={modalEditUser} setModalEditUser={setModalEditUser} />)}      

    </>
  );
}
