import { Button } from "@windmill/react-ui";
import { Link } from "react-router-dom";
import { DocumentTextIcon } from "@heroicons/react/outline";
import Moment from "react-moment";
import { Print, Download } from "../../../icons";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { BudgetDocumentPrint } from "./BudgetDocumentPrint";

export default function TableDataLong({ dataProjectBudget }) {
  const { nama_proyek, nama_dokumen, _id, terakhir_diubah } = dataProjectBudget;
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className=" hidden">
        <BudgetDocumentPrint className="hidden" id={_id} ref={componentRef} />
      </div>
      <li className="flex flex-row p-4 items-center border gap-4 bg-white hover:border-gray-300 hover:shadow-sm duration-150 rounded-md mb-2">
        <div className="flex flex-row gap-4 px-4 w-2/6 items-center">
          <DocumentTextIcon className="h-5 w-5 text-black" />
          <label className="truncate text-sm font-semibold">
            {nama_dokumen}
          </label>
        </div>
        <div className="flex flex-col w-2/6">
          <label className="text-xs font font-semibold text-gray-500">
            Proyek
          </label>
          <label className="truncate text-sm">{nama_proyek}</label>
        </div>
        <div className="flex flex-col w-1/6">
          <label className="text-xs font font-semibold text-gray-500">
            Terakhir Diperbarui
          </label>
          <label className="text-sm">
            <Moment locale="id" fromNow>
              {terakhir_diubah}
            </Moment>
          </label>
        </div>
        <div className="flex gap-2 w-1/">
          <Link to={_id}>
            <Button size="small" layout="outline">
              Buka
            </Button>
          </Link>
          <Button onClick={handlePrint} icon={Print} size="small" layout="outline" />
          <Button onClick={""} icon={Download} size="small" layout="outline" />
        </div>
      </li>
    </>
  );
}
