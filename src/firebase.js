// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxke6HyYwq0Mtmw6aS_pBu3fYM9WghOzY",
  authDomain: "acetap-3d86c.firebaseapp.com",
  databaseURL: "https://acetap-3d86c-default-rtdb.firebaseio.com",
  projectId: "acetap-3d86c",
  storageBucket: "acetap-3d86c.appspot.com",
  messagingSenderId: "126176040007",
  appId: "1:126176040007:web:0c1268fe42f0b00eb04d62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };