import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyAbb2V8OJgd4cQpNd9VM-hK0rj2f6rcDOA",
  authDomain: "girls-in-tech-c90fc.firebaseapp.com",
  projectId: "girls-in-tech-c90fc",
  storageBucket: "girls-in-tech-c90fc.appspot.com",
  messagingSenderId: "84468468013",
  appId: "1:84468468013:web:81e74ad49e65e2fc0c2ba4"
});

const db = firebase.firestore();

export { db, app };
