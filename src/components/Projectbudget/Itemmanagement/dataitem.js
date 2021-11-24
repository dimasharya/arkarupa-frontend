export default function dataitem() {
  const itemdata = {
    nama: "Pemasangan Besi Bertingkat Dengan Bekisting",
    category: "Struktur Utama",
    unit: "m3",
    price: "",
    data: [
      {
        item: "Mandor",
        category: "Pekerja",
        coefficient: "0,8",
        unit: "O.H",
        price: "90000",
        total: "72000",
      },
      {
        item: "Solar",
        category: "Bahan",
        coefficient: "0,4",
        unit: "Liter",
        price: "6500",
        total: "2600",
      },
    ],
  };
  return { itemdata };
}
