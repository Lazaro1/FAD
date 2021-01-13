import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBUlKShjk8awUS0Mm0felZwySFHOovKts8",
    authDomain: "webfad.firebaseapp.com",
    projectId: "webfad",
    storageBucket: "webfad.appspot.com",
    messagingSenderId: "915190168120",
    appId: "1:915190168120:web:6a977772834a67ad8884cd",
    measurementId: "G-51SGVXRQRT"
  };

firebase.initializeApp(firebaseConfig);

export const firebaseFirestore = firebase.firestore();
export const firebaseAuth = firebase.auth;
export const firebaseStorage = firebase.storage();