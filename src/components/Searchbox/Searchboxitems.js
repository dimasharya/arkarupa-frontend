import React from "react";
import Tooltip from "react-tooltip";

export default function Searchboxitems({data, idx, addItem}) {
  const item = `item${idx}`;
  const cat = `cat${idx}`

  return (
    <>
      <div
        role="button"
        className="py-2 px-3 hover:bg-yellow-50 focus:bg-yellow-50 truncate"
        onClick={addItem}
      >
        <label
          role="button"
          className="mr-2 text-xs font-black"
          data-tip
          data-for={cat}
        >
          {data.simbol}
        </label>
        <label
          role="button"
          className="text-xs font-medium"
          data-tip
          data-for={item}
        >
          {data.nama_pekerjaan}
        </label>
        <Tooltip id={cat} place="top" effect="solid">
          {data.kategori}
        </Tooltip>
        <Tooltip id={item} place="top" effect="solid">
          {data.nama_pekerjaan}
        </Tooltip>
      </div>
    </>
  );
}
