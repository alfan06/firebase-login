import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWPxOlWWOX7lVhtbfKWUdQoT9zV6Z0I1w",
    authDomain: "fir-login-b3cd4.firebaseapp.com",
    projectId: "fir-login-b3cd4",
    storageBucket: "fir-login-b3cd4.appspot.com",
    messagingSenderId: "447592950700",
    appId: "1:447592950700:web:83de2673e1902defe5e809",
    measurementId: "G-EG76P15KBZ"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;