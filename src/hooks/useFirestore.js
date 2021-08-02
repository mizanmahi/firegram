
import { useEffect, useState } from "react"
import { fFirestore } from "../firebase/firebaseConfig"

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {

    const unsub = fFirestore.collection(collection).orderBy("createdAt", "desc").onSnapshot(snap => { // for real time update
      const documents = []; // this is important to real time update, it is making the render happen by making new array reference
      snap.forEach(doc => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub(); // cleanup function

  }, [collection]);

  return { docs }
}

export default useFirestore;