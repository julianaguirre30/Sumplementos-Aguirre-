// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {collection, getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClC9Nl9F-RKZU-ECwnmiaCeeACeQC3mVc",
  authDomain: "reseller-apple.firebaseapp.com",
  projectId: "reseller-apple",
  storageBucket: "reseller-apple.appspot.com",
  messagingSenderId: "715816440348",
  appId: "1:715816440348:web:fc5eb8cdeb7fe6109985d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const collectionProducts = collection(db,"Productos")
   