import { useEffect, useState } from "react";
import { DocumentIcon, QrcodeIcon } from "@heroicons/react/outline";
import { Button } from "@windmill/react-ui";
import PermitToWorkForm from "./PermitToWorkForm";
import PermitToWorkReview from "./PermitToWorkReview";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../reducer/AuthSlice";
import { useLocation } from "react-router-dom";
import {
  loadPermitToWorkSm,
  loadPermitToWorkSpv,
  permitToWorkSelector,
} from "../../reducer/PermitToWorkSlice";
import BadgePtwStatus from "../../components/Badge/BadgePtwStatus";

export default function PermitToWork(params) {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user.role === "spv") {
      return dispatch(loadPermitToWorkSpv({ id_user: user._id }));
    } else if (user.role === "sm") {
      return dispatch(loadPermitToWorkSm({ id_user: user._id }));
    }
  }, [location]);

  const PermitToWork = useSelector(permitToWorkSelector.selectAll);

  const [dataReview, setDataReview] = useState("")
  // modal
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenReview, setIsOpenReview] = useState(false);

  const onReview = (props) => {
    setDataReview(props)
    setIsOpenReview(!isOpenReview)
  }

  return (
    <>
      <div className="bg-white p-4 rounded-xl">
        <div className="flex items-center text-sm font-semibold justify-between">
          <div className="flex px-4 items-center">
            <div className="p-1.5 w-7 h-7 rounded-full bg-black">
              <QrcodeIcon className="h-4 w-4 text-white" />
            </div>
            <h4 className="pl-3">PERMIT TO WORK</h4>
          </div>
          {/* <Button
            size="regular"
            iconLeft={PlusCircle}
            layout="primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-xs">Buat Permit To Work</span>
          </Button> */}
        </div>
        <div className=" mt-3 p-2 px-2 rounded-lg shadow-inner">
          <ul className="relative h-80 overflow-y-scroll">
            {PermitToWork
              ? PermitToWork.map((item, idx) => {
                  return (
                    <li key={idx} className="flex flex-row py-4 px-6 items-center border gap-4 bg-white hover:border-gray-300 hover:shadow-sm duration-150 rounded-md mb-2">
                      <div className="flex flex-row gap-4 px-4 w-2/6 items-center">
                        <DocumentIcon className="h-5 w-5 text-black" />
                        <div className="flex flex-col">
                          <label className="text-xs font font-semibold text-gray-500">
                            Item Pekerjaan
                          </label>
                          <label className="truncate text-sm">
                            {item.nama_pekerjaan}
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-col w-2/6">
                        <label className="text-xs font font-semibold text-gray-500">
                          Proyek
                        </label>
                        <label className="truncate text-sm">
                          {item.nama_proyek}
                        </label>
                      </div>
                      <div className="flex flex-col w-2/6">
                        <label className="text-xs font font-semibold text-gray-500">
                          Jenis Izin
                        </label>
                        <label className="truncate text-sm">
                          {item.jenis_izin}
                        </label>
                      </div>
                      <div className="flex flex-col w-1/6">
                        <label className="text-xs font font-semibold text-gray-500">
                          Status
                        </label>
                        <div className="flex">
                        <BadgePtwStatus status={item.status} />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => onReview(item)}
                          size="small"
                          layout="outline"
                        >
                          Buka
                        </Button>
                      </div>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
      {isOpen && <PermitToWorkForm isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isOpenReview && (
        <PermitToWorkReview
          dataReview={dataReview}
          isOpenReview={isOpenReview}
          setIsOpenReview={setIsOpenReview}
        />
      )}
    </>
  );
}
