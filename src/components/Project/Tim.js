import { Button, Avatar } from "@windmill/react-ui";
import { useDispatch } from "react-redux";
import { HeroPlusOutline, TrashIcon } from "../../icons";
import { deleteTeam } from "../../reducer/ProjectSelectedSlice";
import { getRoles } from "../../utils/getRoles";

export default function Tim({ dataTim, modalNewTeam, setModalNewTeam, projectId }) {
  const dispatch = useDispatch()

  const onDelete = (data) => {
    dispatch(deleteTeam({id: projectId, userid: data}));
  };
  return (
    <>
      <div className="col-span-2 p-6 max-w-md bg-white rounded-lg border">
        <div className="flex justify-between items-center mb-4">
          <h5 className="font-semibold leading-none text-gray-900 dark:text-white">
            Tim
          </h5>
          <Button
            onClick={() => setModalNewTeam(!modalNewTeam)}
            iconLeft={HeroPlusOutline}
            size="regular"
            layout="outline"
          />
        </div>
        <div className="flow-root">
          <ul className="relative h-60 px-2 overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700">
            {dataTim.map((item, idx) => {
              return (
                <>
                  <li key={idx} className="py-2">
                    <div className="flex items-center space-x-4">
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
                      <div className="">
                        {item.role !== "pm" ? (
                          <Button
                            onClick={() => onDelete(item._id)}
                            className="text-white bg-red-700 border border-transparent active:bg-red-600 hover:bg-red-700 focus:ring focus:ring-red-300"
                            icon={TrashIcon}
                            size="small"
                            layout="danger"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
