// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore' ;
import {getAuth} from 'firebase/auth' ;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApbNkAdRz-0t1LZ_usPa28lAp04wN7xQA",
  authDomain: "linkedin-clone-4a67d.firebaseapp.com",
  projectId: "linkedin-clone-4a67d",
  storageBucket: "linkedin-clone-4a67d.appspot.com",
  messagingSenderId: "780213371762",
  appId: "1:780213371762:web:5ce42cf5e7b73c75ced3eb",
  measurementId: "G-5ZK1S8HPN4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app) ;
  // const auth = firebase.auth() ;

  const auth = getAuth(app) ;


  export {db,auth} ;


