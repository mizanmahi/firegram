import { useEffect, useState } from "react";

import { fStorage } from "../firebase/firebaseConfig";

const useFStorage = (file) => {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    //In order to upload or download files, delete files, or get or update metadata, must create a reference to the file you want to operate on
    const storageRef = fStorage.ref(file.name);

    const uploadTask = storageRef.put(file); // this is asynchronus 

    // Register three observers on the upload task:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on("state_changed", snapshot => {
      let progressPercentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progressPercentage);
    },
      // error observer
      (err) => {
        setError(err)
      },
      // completion observer
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        setError(null)
        console.log(`Upload Completed to the firebase storage ant the url is: ${url}`);
      }
    )

  }, [file])

  return { progress, url, error };

}

export default useFStorage;


/*
snapshot object contains the following properties:
Property        	Type	                      Description
bytesTransferred	Number	                    The total number of bytes that have been transferred when this snapshot was taken.
totalBytes	      Number	                    The total number of bytes expected to be uploaded.
state	            firebase.storage.TaskState	Current state of the upload. useful for pause and running task state handling
metadata	        firebaseStorage.Metadata	  Before upload completes, the metadata sent to the server. After upload completes, the metadata the server sent back.
task	            firebaseStorage.UploadTask	The task this is a snapshot of, which can be used to `pause`, `resume`, or `cancel` the task.
ref	              firebaseStorage.Reference	  The reference this task came from.
*/