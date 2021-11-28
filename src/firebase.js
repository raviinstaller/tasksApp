import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP0rW8rqWx2UlGr5gzCB0y83RJswNJGaU",
  authDomain: "tasks-fd79f.firebaseapp.com",
  projectId: "tasks-fd79f",
  storageBucket: "tasks-fd79f.appspot.com",
  messagingSenderId: "788835476631",
  appId: "1:788835476631:web:3cd3bd98be4cb70dbfb5d2",
  measurementId: "G-VZSLSGQ18H"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default getFirestore();
