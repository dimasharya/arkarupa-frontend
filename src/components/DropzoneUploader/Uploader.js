import React from "react";
import Dropzone from "react-dropzone-uploader";
import 'react-dropzone-uploader/dist/styles.css'

export default function Uploader ()  {
    const getUploadParams = () => {
      return { url: 'https://httpbin.org/post' }
    }
  
    const handleChangeStatus = ({ meta }, status) => {
      console.log(status, meta)
    }
  
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
    }
  
    return (
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        styles={{ dropzone: { minHeight: 150, maxHeight: 200 } }}
        inputContent="Tarik Berkas atau Tekan untuk Memilih Berkas"
      />
    )
  }