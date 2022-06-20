export const getSimbol = (props) => {
    if(props === "Persiapan Dan Tanah"){
      return "PDT"
    }else if (props === "Struktur Utama"){
      return "STU"
    }else if (props === "Pekerjaan Dinding"){
      return "PJD"
    }else if (props === "Pekerjaan Lantai"){
      return "PJL"
    }else if (props === "Pekerjaan Atap"){
      return "PJA"
    }else if (props === "Pekerjaan Finishing"){
      return "PJF"
    }
  }