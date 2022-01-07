import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-8REpFhDgdpXzOoo9mrtNZlD7A-QBBmg",
  authDomain: "clone-b3039.firebaseapp.com",
  projectId: "clone-b3039",
  storageBucket: "clone-b3039.appspot.com",
  messagingSenderId: "499539256736",
  appId: "1:499539256736:web:77e9a747287fe07466b0c5",
  measurementId: "G-1Z5S68V2ND",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
