import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2EA0kcsqGwE-pAEeapcYZtDrt7hiyRtc",
  authDomain: "restaurantapp-17cf7.firebaseapp.com",
  databaseURL: "https://restaurantapp-17cf7-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-17cf7",
  storageBucket: "restaurantapp-17cf7.appspot.com",
  messagingSenderId: "1002529419626",
  appId: "1:1002529419626:web:c54408debeaefa2948f513"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
