// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: <YOURAPIKEY>,
//   authDomain: <YOURAUTHDOAMIN>,
//   projectId: <YOURPROJECTID>,
//   storageBucket: <YOURSTORAGEBUCKET>,
//   messagingSenderId: <YOURMESSAGINGSENDERID>,
//   appId: <YOURAPPID>,
//   measurementId: <YOURMEASUREMENTID>,
// };

// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);




import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBr-YSPmCGE0Q5k8h5zDItixEJp2Gq9N84",
  authDomain: "react-crud-64f13.firebaseapp.com",
  projectId: "react-crud-64f13",
  storageBucket: "react-crud-64f13.appspot.com",
  messagingSenderId: "150626651694",
  appId: "1:150626651694:web:8b89eb875de8ed0b7799bf",
  measurementId: "G-8C54VG3L72"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);