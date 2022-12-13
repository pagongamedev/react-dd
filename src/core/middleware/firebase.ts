import { initializeApp } from 'firebase/app';
import { Auth, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {
  Functions,
  getFunctions,
  httpsCallable,
  // connectFunctionsEmulator,
} from 'firebase/functions';

import { helperPromise } from '..//helper/promise';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_CRED_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_CRED_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_CRED_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_CRED_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_CRED_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_CRED_APPID,
};

let app;
let auth: Auth;
let functions: Functions;

export const init = () => {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  functions = getFunctions(app, import.meta.env.VITE_FIREBASE_CONFIG_FUNCTION_REGION);
  // console.log('init firebase');
};

// export const getAuth = () => {
//   return auth;
// };

// export const getFunctions = () => {
//   return functions;
// };

export const FirebaseSignInWithEmailAndPassword = (sEmail: string, sPassword: string) => {
  return helperPromise(signInWithEmailAndPassword(auth, sEmail, sPassword));
};

export const FirebaseSignOut = () => {
  return signOut(auth);
};

export const FirebaseCallFunction = (sFunctionName: string) => {
  return httpsCallable(functions, sFunctionName);
};

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     authWrapper.classList.remove('open');
//     authModals.forEach(modal => modal.classList.remove('active'));
//   } else {
//     authWrapper.classList.add('open');
//     authModals[0].classList.add('active');
//   }
// });
