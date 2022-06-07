export default function BadgeTaskStatus({ status }) {
  let cls;
  if (status === "Dimulai") {
    cls = "text-xs rounded-xl border text-blue-800 border-blue-600 py-1 px-2 bg-blue-100";
  } else if (status === "Dijeda") {
    cls = "text-xs rounded-xl border text-gray-800 border-gray-600 py-1 px-2 bg-gray-100";
  } else if (status === "Selesai"){
    cls = "text-xs rounded-xl border text-green-800 border-green-600 py-1 px-2 bg-green-100";
  }
  return (
    <>
      <div className={cls}>{status}</div>
    </>
  );
}
