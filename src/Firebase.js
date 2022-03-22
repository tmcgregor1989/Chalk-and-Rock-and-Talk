import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBanfc_FxXfxYELmRgiRupxZGJgKFq5c4c",
  authDomain: "chalk-and-rock-and-talk.firebaseapp.com",
  projectId: "chalk-and-rock-and-talk",
  storageBucket: "chalk-and-rock-and-talk.appspot.com",
  messagingSenderId: "1005286623191",
  appId: "1:1005286623191:web:bd2dab31fa6c117b52ed92",
  measurementId: "G-18Y0ZR3G8X"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};