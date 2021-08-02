import React, { useEffect } from 'react';

import useFstorage from "../hooks/useFStorage";

const ProgressBar = ({file, setFile}) => {

  const {progress, url} = useFstorage(file);

  useEffect(() => {
    if(url){
      setFile(null);
    }
  }, [url])
  
  return (
    <div className="progress-bar" style={{width: progress + "%"}}></div>
  )
}

export default ProgressBar;