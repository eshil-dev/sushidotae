// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRJRyHlerzN14wG8F9OS2RlKYJX0LXlQw",
  authDomain: "sushidotae-c4754.firebaseapp.com",
  projectId: "sushidotae-c4754",
  storageBucket: "sushidotae-c4754.appspot.com",
  messagingSenderId: "856769294807",
  appId: "1:856769294807:web:d242ddc3425e9e7d431b92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
export default authentication;