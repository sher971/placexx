// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebasea JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMxKFSeuAiABgl5_ErfrjIKvIeAxrKfnY",
  authDomain: "placex-ceb1c.firebaseapp.com",
  projectId: "placex-ceb1c",
  storageBucket: "placex-ceb1c.appspot.com",
  messagingSenderId: "1031388129941",
  appId: "1:1031388129941:web:6d5e4d7dce2cb675d6499c",
  measurementId: "G-FC88YN87BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app , auth };