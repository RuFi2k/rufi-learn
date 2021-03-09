import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'
import 'firebase/firestore'
import data from './data.json'

function App() {
  const config = {
    apiKey: "AIzaSyCYk5nEG7FXPJsUxHOjg-x_Yy-fw0nrXn8",
    authDomain: "rufi-learn.firebaseapp.com",
    projectId: "rufi-learn",
    storageBucket: "rufi-learn.appspot.com",
    messagingSenderId: "783900561839",
    appId: "1:783900561839:web:72c22b8fd61fac5de81f5a"
  }

  useEffect(() => {
    let fb
    if(!firebase.apps.length){
      fb = firebase.initializeApp(config)
    } else {
      fb = firebase.app()
    }

    const db = fb.firestore()
    // Get a new write batch
    var batch = db.batch();

    // Set the value of 'NYC'
    // var nycRef = db.collection("cities").doc("NYC");
    // batch.set(nycRef, {name: "New York City"});
    // var nycRef = db.collection("cities").doc("aNYC");
    // batch.set(nycRef, {name: "New York City"});
    // var nycRef = db.collection("cities").doc("NbYC");
    // batch.set(nycRef, {name: "New York City"});
    // var nycRef = db.collection("cities").doc("NYcC");
    // batch.set(nycRef, {name: "New York City"});
    // var nycRef = db.collection("cities").doc("NYCd");
    // batch.set(nycRef, {name: "New York City"});
    // var nycRef = db.collection("cities").doc("NeYC");
    // batch.set(nycRef, {name: "New York City"});
    for(let i = 0; i < 500; ++i){
      var nycRef = db.collection("cities").doc();
      batch.set(nycRef, {name: "New York City"});
    }

    // Commit the batch
    batch.commit().then(() => {
        console.log('temp')
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
