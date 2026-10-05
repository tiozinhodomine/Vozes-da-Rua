import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOkW-LbAL2FIMlu5MVnmKeyoNnSJNgLdY",
  authDomain: "vozes-da-rua.firebaseapp.com",
  projectId: "vozes-da-rua",
  storageBucket: "vozes-da-rua.firebasestorage.app",
  messagingSenderId: "95559938362",
  appId: "1:95559938362:web:b8252c661a430f3e61a003",
  measurementId: "G-JSE4D89PSE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
