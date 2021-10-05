import React, { useEffect, useState, useRef } from "react";
import { Gantt, DefaultTheme } from "@dhtmlx/trial-react-gantt";
import MyTooltipContent from "./MyTooltipContent";
import { RestDataProvider } from "@dhtmlx/gantt-data-provider";
import { getData } from "./data";
const { scales, columns } = getData();

const url = "http://localhost:5000/api/projectschedules";

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
        <DefaultTheme>
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
        </DefaultTheme>
    </>
  );
}
