import { Button } from "@windmill/react-ui";
import { useRef } from "react";
import { Print } from "../../../icons";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";
import { BudgetDocumentPrint } from "../../../components/Projectbudget/Workspace/BudgetDocumentPrint";
import { useSelector } from "react-redux";
import { projectSelectedSelectorById } from "../../../reducer/ProjectSelectedSlice";

export default function BiayaProyekForm({
  modalBiayaProyek,
  setModalBiayaProyek,
}) {
  let { projectId } = useParams();
  const Proyek = useSelector((state) =>
    projectSelectedSelectorById(state, projectId)
  );
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-20 sm:items-center sm:justify-center">
      <div className=" max-w-7xl w-8/12 mx-auto overflow-hidden bg-white rounded-lg px-6 py-4 shadow-lg">
        <BudgetDocumentPrint className="hidden" id={Proyek.rancangan_anggaran} ref={componentRef} />
        <div className="flex justify-end gap-2 mt-2">
          <Button onClick={handlePrint} iconLeft={Print} layout="primary">
            Cetak
          </Button>
          <Button
            onClick={() => setModalBiayaProyek(!modalBiayaProyek)}
            layout="outline"
          >
            Batal
          </Button>
        </div>
      </div>
    </div>
  );
}
