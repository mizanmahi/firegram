import React, { useState } from "react";

// components
import ProgressBar from "./ProgressBar";


const UploadForm = () => {
   const [file, setFile] = useState(null);
   const [error, setError] = useState(null);


   const changeHandler = (e) => {

      const selectedFile = e.target.files[0];
      const allowedimageTypes = ["image/png", "image/jpeg"];
      
      if (selectedFile && allowedimageTypes.includes(selectedFile.type)) {
         setFile(selectedFile);
         setError(null);
      } else {
         setFile(null);
         setError("Something Went Wrong! Select An Image (jpeg or png)!");
      }
   };

   return (
      <form action="#">
         <label>
            <input type="file" onChange={changeHandler} />
            <span>
               +
            </span>
         </label>
         <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
         </div>
      </form>
   );
};

export default UploadForm;
