import React from 'react';
import { motion } from "framer-motion"


const Modal = ({ selectedImage, setSelectedImage }) => {

  const clickHandler = (e) => {
    if(e.target.className === "backdrop"){
      setSelectedImage(null);
    }
  }

  return (
    <div className="backdrop" onClick={clickHandler} initial={{opacity: 0}} animate={{opacity: 1}}>
      <motion.img src={selectedImage} alt="enlarged img" 
        initial={{y: "-100vh"}}
        animate={{y: 0}}
      />
    </div>
  );
}

export default Modal;