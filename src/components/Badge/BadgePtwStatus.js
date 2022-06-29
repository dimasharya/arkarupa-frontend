export default function BadgePtwStatus({ status }) {
    let cls;
    if (status === "Diajukan") {
      cls =
        "text-xs rounded-xl border text-blue-800 border-blue-600 py-1 px-2 bg-blue-100";
    } else if (status === "Ditolak") {
      cls =
        "text-xs rounded-xl border text-red-800 border-red-600 py-1 px-2 bg-red-100";
    } else if (status === "Disetujui") {
      cls =
        "text-xs rounded-xl border text-green-800 border-green-600 py-1 px-2 bg-green-100";
    }
    return (
      <>
        <div className={cls}>{status}</div>
      </>
    );
  }