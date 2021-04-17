import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYk5nEG7FXPJsUxHOjg-x_Yy-fw0nrXn8",
  authDomain: "rufi-learn.firebaseapp.com",
  projectId: "rufi-learn",
  storageBucket: "rufi-learn.appspot.com",
  messagingSenderId: "783900561839",
  appId: "1:783900561839:web:72c22b8fd61fac5de81f5a"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
