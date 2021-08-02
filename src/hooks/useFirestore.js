
import { useEffect, useState } from "react"
import { fFirestore } from "../firebase/firebaseConfig"

const useFirestore = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const collectionRef = fFirestore.collection("images");
    const docs = []
    collectionRef.onSnapshot(snapshot => { // for real time update;
      snapshot.forEach(doc => {
        docs.push(doc.data());
        setDocs(docs)
      })
    })
  }, []);

  return {docs}
}

export default useFirestore;