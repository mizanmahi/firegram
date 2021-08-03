import React from 'react';
import { motion } from "framer-motion";

import { fStorage, fFirestore } from '../firebase/firebaseConfig';


// hooks
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImage }) => {

  const { docs } = useFirestore("images");

  const clickHandler = (e, url) => {
    if (e.target.classList.contains("img-wrap")) {
      setSelectedImage(url);
    }
  }

  // delete handler
  const dltHendler = (e, name, id) => {
    // Create a reference to the file to delete
    const imgref = fStorage.ref(name);
    // Delete the file
    imgref.delete().then(() => {
      console.log(` "${name}" Deleted successfylly from storage!`);

      // also deleting from firestore
      fFirestore.collection("images").doc(id).delete().then(() => { console.log("Also deleted from firestore!"); })

    }).catch((error) => {
      // Uh-oh, an error occurred!
    });

  }

  return (
    <div className="img-grid">
      {docs && docs.map(doc => {
        return (
          <motion.div
            className="img-wrap"
            key={doc.id}
            onClick={(e) => clickHandler(e, doc.imageUrl)}
            layout>
            <motion.img
              src={doc.imageUrl}
              alt="uploaded img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .5 }} />
            <span className="dlt-btn" onClick={(e) => dltHendler(e, doc.name, doc.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </span>
          </motion.div>
        )
      })}

    </div>
  );
}

export default ImageGrid;