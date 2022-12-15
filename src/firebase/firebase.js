// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// eslint-disable-next-line
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKJ0BhFbP5wOJf0MvFumg5k76IXEDVcwI",
  authDomain: "fir-auth-9fd4b.firebaseapp.com",
  projectId: "fir-auth-9fd4b",
  storageBucket: "fir-auth-9fd4b.appspot.com",
  messagingSenderId: "272774012709",
  appId: "1:272774012709:web:dc8d6a8297f76e35e6c4cc",
  measurementId: "G-XLPSSSTWKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


export default app;
