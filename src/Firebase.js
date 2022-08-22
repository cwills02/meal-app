import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
export const firebaseConfig = {
    apiKey: "AIzaSyCCkFfzF3dBcaezL37KS-aVQeOjUeUA50M",
    authDomain: "meal-db-portfolio.firebaseapp.com",
    projectId: "meal-db-portfolio",
    storageBucket: "meal-db-portfolio.appspot.com",
    messagingSenderId: "770450115040",
    appId: "1:770450115040:web:382103d894526eb8c6c385",
    measurementId: "G-FD6ZZXVG3D",
    databaseURL: "https://meal-db-portfolio-default-rtdb.firebaseio.com/"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
