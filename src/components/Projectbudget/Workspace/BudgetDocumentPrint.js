import moment from "moment";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import Logo from "../../../assets/img/arkalogo.png";
import Api from "../../../reducer/Api";
import "moment/dist/locale/id";

export const BudgetDocumentPrint = React.forwardRef(({ id }, ref) => {
  const [rab, setRab] = useState([]);
  const [dataRab, setDataRab] = useState([]);
  const getRAB = async () => {
    await Api.get("/api/projectbudget/projectbyid", {
      params: { projectId: id },
    }).then((res) => {
      let result = res.data;
      setRab(result);
      showRAB(result.rancangan_anggaran);
    });
  };
  useEffect(() => {
    let mounted = true;
    getRAB();
    return () => (mounted = false);
  }, []);

  const kategori = [
    "Persiapan Dan Tanah",
    "Struktur Utama",
    "Pekerjaan Dinding",
    "Pekerjaan Lantai",
    "Pekerjaan Atap",
    "Pekerjaan Finishing",
  ];

  const showRAB = (props) => {
    let show = [];
    let totalBiaya = parseFloat(0);
    for (let i = 0; i < kategori.length; i++) {
      let arr = [];
      let result = props.filter(
        (item) => String(item.item_pekerjaan.kategori) === kategori[i]
      );
      if (result.length !== 0) {
        arr.push(
          <tr>
            <td></td>
            <td colSpan={5} className="text-xs font-semibold py-2">
              {kategori[i]}
            </td>
          </tr>
        );
        let jumlah = parseFloat(0);
        for (let index = 0; index < result.length; index++) {
          jumlah += parseFloat(result[index].total);
          arr.push(
            <tr>
              <td className="text-xs text-center">{index + 1}</td>
              <td className="text-xs">
                {result[index].item_pekerjaan.nama_pekerjaan}
              </td>
              <td className="text-xs text-right">{result[index].volume}</td>
              <td className="text-xs text-center">
                {result[index].item_pekerjaan.satuan}
              </td>
              <td className="text-xs text-right">
                {
                  <NumberFormat
                    value={result[index].item_pekerjaan.harga}
                    displayType={"text"}
                    thousandSeparator
                    prefix={"Rp. "}
                  />
                }
              </td>
              <td className="text-xs text-right">
                {
                  <NumberFormat
                    value={result[index].total}
                    displayType={"text"}
                    thousandSeparator
                    prefix={"Rp. "}
                  />
                }
              </td>
            </tr>
          );
        }
        arr.push(
          <tr>
            <td colSpan={5} className="text-xs font-semibold text-right py-1">
              Jumlah:
            </td>
            <td className="text-xs text-right">
              <NumberFormat
                value={jumlah}
                displayType={"text"}
                thousandSeparator
                prefix={"Rp. "}
              />
            </td>
          </tr>
        );
        totalBiaya += jumlah;
      }
      show.push(arr);
      //   show.push(result);
    }
    show.push(
      <tr className="border-t border-gray-500">
        <td colSpan={5} className="text-xs font-semibold text-right py-3">
          Total Biaya:
        </td>
        <td className="text-right text-xs">
          <NumberFormat
            value={totalBiaya}
            displayType={"text"}
            thousandSeparator
            prefix={"Rp. "}
          />
        </td>
      </tr>
    );
    setDataRab(show);
  };

  return (
    <>
      {rab.length !== 0 ? (
        <div ref={ref} className="container px-10 py-5 mx-auto">
          <div id="header" className="flex justify-between pt-5 text-xs">
            <div className="items-start">
              <img
                src={Logo}
                className="w-auto h-14 py-2"
                alt="arkarupa-logo"
                aria-hidden
              />
              <p className="font-semibold pt-1">Office</p>
              <p className="">Jl. Biliton, Madiun Royal Square 7, Madiun</p>
              <p className="font-semibold pt-1">Workshop</p>
              <p className="">
                Jl. Dolopo Negebel KM. 7, Suluk, Dolopo, Madiun
              </p>
              <p className="font-semibold pt-1">Contact</p>
              <p className="">(+62) 8533 5714 400</p>
              <p className="">hallo@arkarupa.com</p>
            </div>
            <div className="flex items-end">
              <div>
                <p className="text-xs font-semibold text-right">Madiun</p>
                <p className="text-xs">
                  <Moment format="LL" locale="id">
                    {moment()}
                  </Moment>
                </p>
              </div>
            </div>
          </div>
          <div id="projectdata" className="flex flex-col text-right py-2 mb-3">
            <div>
              <p className="font-semibold text-xs">{rab.nama_dokumen}</p>
              {/* <p className="text-xs">No. 2022/AKRP/BBG/001</p> */}
            </div>
          </div>
          <div id="projectbudget" className="">
            <table className="w-full border-collapse">
              <thead className="text-xs font-semibold border-b border-gray-500">
                <tr>
                  <td className="text-center py-2">NO</td>
                  <td className=" py-2">URAIAN PEKERJAAN</td>
                  <td className="text-right py-2">VOLUME</td>
                  <td className="text-center py-2">SATUAN</td>
                  <td className="text-right py-2">HARGA SATUAN</td>
                  <td className="text-right py-2">TOTAL HARGA</td>
                </tr>
              </thead>
              <tbody className="text-xs">
                {rab.rancangan_anggaran.length !== 0
                  ? dataRab.map((item, idex) => {
                      return item;
                    })
                  : ""}
                {/* {rab.rancangan_anggaran.length !== 0
                  ? dataRab.map(({ kategori, data }, idx) => {
                      return <div>{kategori}</div> && data.map((res, idx) => {
                        return (
                          <tr>
                            <td className="text-xs text-center">{idx + 1}</td>
                            <td className="text-xs">
                              {res.item_pekerjaan.nama_pekerjaan}
                            </td>
                            <td className="text-xs text-right">{res.volume}</td>
                            <td className="text-xs text-center">
                              {res.item_pekerjaan.satuan}
                            </td>
                            <td className="text-xs text-right">
                              {
                                <NumberFormat
                                  value={res.item_pekerjaan.harga}
                                  displayType={"text"}
                                  thousandSeparator
                                  prefix={"Rp. "}
                                />
                              }
                            </td>
                            <td className="text-xs text-right">
                              {
                                <NumberFormat
                                  value={res.total}
                                  displayType={"text"}
                                  thousandSeparator
                                  prefix={"Rp. "}
                                />
                              }
                            </td>
                          </tr>
                        );
                      });
                    })
                  : ""} */}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="text-center text-sm font-semibold"> Tidak Ada Data </p>
      )}
    </>
  );
});
