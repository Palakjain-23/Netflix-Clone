// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsQYwMK6M0vnLhUTw14H8nvpHEdiR90Js",
  authDomain: "netflix-clone-e731d.firebaseapp.com",
  projectId: "netflix-clone-e731d",
  storageBucket: "netflix-clone-e731d.appspot.com",
  messagingSenderId: "70546881749",
  appId: "1:70546881749:web:f12326de4a351cb281f65c",
  measurementId: "G-YFR00C2MQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth();
