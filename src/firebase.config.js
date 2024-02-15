import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.REACT_APP_FIREBASE_DB_URL,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_Id,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
