import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyCmDBOsOn6zjxV2FQSTjSF7ohX_GY37V0k",
  authDomain: "girls-in-tech-b2067.firebaseapp.com",
  projectId: "girls-in-tech-b2067",
  storageBucket: "girls-in-tech-b2067.appspot.com",
  messagingSenderId: "681330250887",
  appId: "1:681330250887:web:3d172153b53b38a2211422"
});

const db = firebase.firestore();
const auth = firebase.auth();
export { db, app, auth };
