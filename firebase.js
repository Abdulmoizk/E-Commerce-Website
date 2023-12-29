import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,

} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBQJEU5M0vhmwcQd_pLB4SRffm0fELEBdE",
  authDomain: "abdul-moiz-11cd1.firebaseapp.com",
  projectId: "abdul-moiz-11cd1",
  storageBucket: "abdul-moiz-11cd1.appspot.com",
  messagingSenderId: "47102300225",
  appId: "1:47102300225:web:9a71cce3952054c70776c0",
  measurementId: "G-16H1G3D1B8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {
  signInWithEmailAndPassword,
  auth,
  createUserWithEmailAndPassword,
  signOut,
  
}