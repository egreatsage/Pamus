
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'
// import { getFirestore } from "firebase/firestore";
// import {getStorage} from "firebase/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyA_CjUx5FUTvuJUsG7orGeqD23fVrJr7Vw",
//   authDomain: "pamus-bd8c1.firebaseapp.com",
//   projectId: "pamus-bd8c1",
//   storageBucket: "pamus-bd8c1.appspot.com",
//   messagingSenderId: "572925826582",
//   appId: "1:572925826582:web:ed545cba14718e54cac737",
//   measurementId: "G-KB2C94BS3G"
// };
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app)


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_CjUx5FUTvuJUsG7orGeqD23fVrJr7Vw",
  authDomain: "pamus-bd8c1.firebaseapp.com",
  projectId: "pamus-bd8c1",
  storageBucket: "pamus-bd8c1.appspot.com",
  messagingSenderId: "572925826582",
  appId: "1:572925826582:web:ed545cba14718e54cac737",
  measurementId: "G-KB2C94BS3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)
export const auth = getAuth(app);