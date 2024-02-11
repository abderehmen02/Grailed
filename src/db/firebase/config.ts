// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATWcdfyYZrUK5-Ad5iv4YyumP4eUGJpco",
  authDomain: "grailed-e6d7a.firebaseapp.com",
  projectId: "grailed-e6d7a",
  storageBucket: "grailed-e6d7a.appspot.com",
  messagingSenderId: "824715195754",
  appId: "1:824715195754:web:5280dbcd0db86490322113",
  measurementId: "G-DDVKBCWNYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const firebaseStorage = getStorage(app)