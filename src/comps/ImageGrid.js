import React from 'react';

import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {

  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs && docs.map(doc => {
        return (<div className="img-wrap" key={doc.id}>
          <img src={doc.imageUrl} alt="uploaded img" />
        </div>)
      })}
    </div>
  );
}

export default ImageGrid;