import { DocumentTextIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function RecentProjectBudgetCard({ dataProjectBudget }) {
  const { nama_proyek, _id } = dataProjectBudget;
  return (
    <Link to={_id}>
      <div className="flex border py-8 px-8 h-52 rounded-md bg-white text-gray-300 hover:text-black hover:border-gray-300 hover:shadow-md cursor-pointer duration-150 ease-in-out">
        <div className="w-full self-end">
          <DocumentTextIcon className="h-20 w-full text-gray-300" />
          <h5 className="mt-2 text-sm truncate">{nama_proyek}</h5>
          <h4 className="font-black text-right text-xl">.RAB</h4>
        </div>
      </div>
    </Link>
  );
}
