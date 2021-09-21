import firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/firestore';

import config from '../config/firebaseConfig';

try {
  firebase.initializeApp(config);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export {
  firebase,
  firestore,
  auth
};