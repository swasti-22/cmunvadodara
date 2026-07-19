import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDMkwwKM4BRFjB3O9_nLFyJCy2zMtQjZSI",
  authDomain: "concord-mun.firebaseapp.com",
  databaseURL: "https://concord-mun-default-rtdb.firebaseio.com",
  projectId: "concord-mun",
  storageBucket: "concord-mun.firebasestorage.app",
  messagingSenderId: "153164277132",
  appId: "1:153164277132:web:93645ad6df3e3e0e5b62a9",
  measurementId: "G-CZQSQ2RT4K"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);

export { app, db };
