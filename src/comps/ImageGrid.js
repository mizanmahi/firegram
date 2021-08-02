import React from 'react';

import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {

  useFirestore();

  return (
    <div className="img-grid">
      images
    </div>
  );
}

export default ImageGrid;