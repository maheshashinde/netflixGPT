// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlLszJ5SnX4YZ5BS-VicIdbD5RuBzn3rQ",
  authDomain: "my-burger-app-422f6.firebaseapp.com",
  databaseURL: "https://my-burger-app-422f6-default-rtdb.firebaseio.com",
  projectId: "my-burger-app-422f6",
  storageBucket: "my-burger-app-422f6.appspot.com",
  messagingSenderId: "321805579396",
  appId: "1:321805579396:web:685fb1d0eea22860fabed1",
  measurementId: "G-7LD2RRQ0KQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();