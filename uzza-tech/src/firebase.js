// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUkm3DT3TPxzl3pNhjmUcv8l7ElRLK9QA",
    authDomain: "uzza-tech.firebaseapp.com",
    projectId: "uzza-tech",
    storageBucket: "uzza-tech.appspot.com",
    messagingSenderId: "400885383657",
    appId: "1:400885383657:web:3239cb94994b6670a70b78",
    measurementId: "G-Y6CDLPM9HZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };