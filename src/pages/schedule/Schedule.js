import React, { useEffect, useState, useRef } from "react";
import { Gantt } from "@dhtmlx/trial-react-gantt";
import { Button } from "@windmill/react-ui";
import { ChevronLeft } from "../../icons";
import MyTooltipContent from "./MyTooltipContent";
import { RestDataProvider } from "@dhtmlx/gantt-data-provider";
import { getData } from "./data";
const { scales, columns } = getData();

const url = "http://localhost:5001/api/projectschedules";

// eslint-disable-next-line
const useMount = (fun) => useEffect(fun, []);

export default function Schedule({ cellHeight, borders }) {
  const [tasks, setTasks] = useState([]);
  const [links, setLinks] = useState([]);

  const server = useRef(null);
  const store = useRef(null);

  useMount(() => {
    const s = new RestDataProvider(url, {
      task: (id, obj) => store.current.updateTask(id, obj, true),
      link: (id, obj) => store.current.updateLink(id, obj, true),
    });
    s.getData().then((data) => {
      setTasks(data.tasks);
      setLinks(data.links);
    });
    server.current = s;
  });

  return (
    <>
      <div className="flex flex-col py-4 px-2">
        <div className="flex gap-4 items-center">
          <Button size="small" icon={ChevronLeft} layout="link" />
          <label className="text-lg font-black">
            BSD City Botanical Park
            <span className="text-sm font-thin"> - Penjadwalan</span>
          </label>
        </div>
        <div className="wx-default py-4" style={{ height: "800px" }}>
          <Gantt
            cellHeight={cellHeight}
            borders={borders}
            tooltip={(data) => <MyTooltipContent data={data} />}
            tasks={tasks}
            links={links}
            scales={scales}
            columns={columns}
            save={(data) => server.current.saveData(data)}
            store={(ev) => (store.current = ev)}
          />
        </div>
      </div>
    </>
  );
}
