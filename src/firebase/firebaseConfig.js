
import firebase from "firebase/app"; // Firebase App (the core Firebase SDK) is always required and must be listed first importing everything from firebase as firebase

// importing which services I need from firebase
import "firebase/storage"; // importing storage for storing images
import "firebase/firestore"; // importing firestore database 

var firebaseConfig = {
   apiKey: "AIzaSyAHRUqcnNgepCJnr9X-i3errWD_iYqBsuk",
   authDomain: "bangla-gram.firebaseapp.com",
   projectId: "bangla-gram",
   storageBucket: "bangla-gram.appspot.com",
   messagingSenderId: "120603284317",
   appId: "1:120603284317:web:6ad105a10476e3971f0eb4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize storage, Get a reference to the storage service, which is used to create references in your storage bucket
const fStorage = firebase.storage(); 
// Initialize firestore
const fFirestore = firebase.firestore();

// creating time stamp by firebase
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {fStorage, fFirestore, timestamp}; // exporting for further use


// Project number: 120603284317 for this project
// this is a good practice to use it when making api calls