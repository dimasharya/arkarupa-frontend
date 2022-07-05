import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";
import { useDispatch, useSelector } from "react-redux";
import {
  loadProgressKurvaS,
  progressKurvaSProyekSelector,
  progressKurvaSRencanaProyekSelector,
} from "../../reducer/ProjectSelectedSlice";
import { useEffect, useState } from "react";

export default function KurvaS({ projectId }) {
  const dispatch = useDispatch();

  const Progres = useSelector(progressKurvaSProyekSelector);
  const ProgresRencana = useSelector(progressKurvaSRencanaProyekSelector);

  useEffect(() => {
    dispatch(loadProgressKurvaS({ id_proyek: projectId }));
    // dispatch(loadProgressKurvaSRencana({ id_proyek: projectId }));
  }, []);

  useEffect(() => {
    parsingDataKurva();
  }, [Progres]);

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          //   format: "LL",
          //   tooltipFormat: "LL",
          unit: "day",
        },
      },
      y: {
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return value + " %";
          },
        },
        min: 0,
        max: 100,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + "%";
            }
            return label;
          },
        },
      },
    },
  };

  const [dataKurva, setDataKurva] = useState("");

  const parsingDataKurva = () => {
    let dataProgresRealisasi = [];
    let dataProgresRencana = [];

    if (Object.keys(ProgresRencana).length !== 0) {
        // ProgresRencana.sort((a, b) => new Date(a.x) - new Date(b.x))
        // console.log(ProgresRencana);
        ProgresRencana.map((item) => {
        return dataProgresRencana.push({
          x: new Date(item.x).setHours(0,0,0,0),
          y: String(item.y),
        });
      });
    }

    if (Object.keys(Progres).length !== 0) {
      Progres.map((item) => {
        return dataProgresRealisasi.push({
          x: new Date(item.tanggal_input).setHours(0,0,0,0),
          y: item.realisasi_progres,
        });
      });
    }

    const dataToState = {
      datasets: [
        {
          label: "Progres Realisasi Proyek",
          fill: false,
          backgroundColor: "#d1d5db",
          borderColor: "#111827",
          tension: 0.5,
          data: dataProgresRealisasi,
        },
        {
          label: "Progres Rencana Proyek",
          fill: false,
          backgroundColor: "#d1d5db",
          borderColor: "#22c55e",
          tension: 0.5,
          data: dataProgresRencana,
        },
      ],
    };
    setDataKurva(dataToState);
  };

  return dataKurva.length !== 0 ? (
    <Line data={dataKurva} options={options} />
  ) : (
    <p className="text-sm text-center font-bold">Belum Ada Progres</p>
  );
}
