// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAERLibVreC29W87WVVT_vKiSksV3W6yow",
  authDomain: "the-new-dragon-project.firebaseapp.com",
  projectId: "the-new-dragon-project",
  storageBucket: "the-new-dragon-project.appspot.com",
  messagingSenderId: "464360574236",
  appId: "1:464360574236:web:367795dc009e2e6f85fed9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;