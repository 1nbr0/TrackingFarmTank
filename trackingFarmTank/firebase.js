// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGU5YlhXucSLCQxJH2JxDgtwYj7yeVym0",
  authDomain: "ttf-projet.firebaseapp.com",
  projectId: "ttf-projet",
  storageBucket: "ttf-projet.appspot.com",
  messagingSenderId: "503391069186",
  appId: "1:503391069186:web:0710b6c00b0b97d5e2731b",
  
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);


const auth =  getAuth(app)

export {auth};

