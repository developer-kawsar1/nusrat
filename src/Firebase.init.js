


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy3xvgBBnRg3W9frSTWdwl8aB8RdvThT8",
  authDomain: "assigment-10-7274d.firebaseapp.com",
  projectId: "assigment-10-7274d",
  storageBucket: "assigment-10-7274d.appspot.com",
  messagingSenderId: "248711275740",
  appId: "1:248711275740:web:8859702b288d9ff55f0019",
  measurementId: "G-JRR8PFBG7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app