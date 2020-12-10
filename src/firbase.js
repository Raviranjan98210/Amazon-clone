import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1PZtJK3KX6txDOqMHi-onXtEOOZADsaA",
  authDomain: "clone-c3a76.firebaseapp.com",
  databaseURL: "https://clone-c3a76.firebaseio.com",
  projectId: "clone-c3a76",
  storageBucket: "clone-c3a76.appspot.com",
  messagingSenderId: "528785834394",
  appId: "1:528785834394:web:aee48067c6b4dee6017a23",
  measurementId: "G-FKFDR4RTZ3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
