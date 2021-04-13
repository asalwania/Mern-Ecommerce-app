// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBH2zua1y3mz00rcbfEZsxyaWlvadp3YUY",
  authDomain: "ecommerce-ffed7.firebaseapp.com",
  projectId: "ecommerce-ffed7",
  storageBucket: "ecommerce-ffed7.appspot.com",
  messagingSenderId: "711842787119",
  appId: "1:711842787119:web:d1dfd615ac6a12b63e3bda",
  measurementId: "G-6HRB2KNXBP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
