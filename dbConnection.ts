import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

type firebaseConfigObj = {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}

const firebaseConfig: firebaseConfigObj = {
  apiKey: "AIzaSyBcvlk9blnX1tsROi79cytgeo_xMTR9StY",
  authDomain: "ines-guidance-app.firebaseapp.com",
  projectId: "ines-guidance-app",
  storageBucket: "ines-guidance-app.appspot.com",
  messagingSenderId: "476732012325",
  appId: "1:476732012325:web:d72c37f9a652c0d6d94ccc",
  measurementId: "G-Q500Y81MF7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
