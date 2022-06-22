import { Label, Button, Select } from "@windmill/react-ui";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Api from "../../reducer/Api";
import { selectUser } from "../../reducer/AuthSlice";
import { setNotification } from "../../reducer/NotificationSlice";
import { addProjectBudget } from "../../reducer/ProjectBudgetSlice";

const NewRABForm = ({ modalNewRab, setModalNewRab }) => {
  const { handleSubmit, register } = useForm();
  const [project, setProject] = useState([]);
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const getAllProject = async () => {
    const result = await Api.get("/api/project/userproject", {params: { userId: user._id }});
    if (result) {
      setProject(result.data);
    }
  };

  useEffect(() => {
    getAllProject();
  }, []);

  const onSubmit = (data) => {
      if(data.project !== "" && data.project !== "default"){
        const proyek = project.find(el => el.nama_proyek === data.project)
        dispatch(addProjectBudget({nama_proyek: proyek.nama_proyek, id_proyek: proyek._id}))
        setModalNewRab(!modalNewRab)
      }else{
          dispatch(setNotification({type: "error", message: "Pilih salah satu proyek"}))
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
            <h2 className="font-bold text-center">RANCANGAN ANGGARAN BARU</h2>
            <div className="flex flex-col">
              <Label>
                <span className="font-semibold text-xs">Pilih Proyek</span>
              </Label>
              <Select defaultValue={"default"} {...register("project")}>
              <option value={"default"} disabled>Pilih Proyek</option>
                {project.length !== 0 ? (
                  project.map((item, idx) => {
                    let opt;
                    if (item.rancangan_anggaran === null) {
                      opt = <option key={idx}>{item.nama_proyek}</option>;
                    }
                    return opt;
                  })
                ) : (
                  <option>Tidak Ada Data</option>
                )}
              </Select>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <Button
              onClick={() => setModalNewRab(!modalNewRab)}
              layout="outline"
            >
              Batal
            </Button>
            <Button type="submit" layout="primary">
              Tambah Dokumen
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewRABForm;
