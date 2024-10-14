// Import required functions from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

<script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js"></script>

import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

// Your Firebase configuration (replace with your own Firebase project details)
const firebaseConfig = {
  apiKey: "AIzaSyDWA8RBQCVvTYnCitEb-NI6cEz7GREmrAs",
  authDomain: "simple-website-3019.firebaseapp.com",
  projectId: "simple-website-3019",
  storageBucket: "simple-website-3019.appspot.com",
  messagingSenderId: "492328176563",
  appId: "1:492328176563:web:a9165446ed9a23161799c6",
  measurementId: "G-6WG00ZB9JY"
};

// Initialize Firebase app and authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup function
function signup() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert('Sign Up Successful!');
    })
    .catch(error => {
      alert(error.message);
    });
}

// Login function
function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert('Login Successful!');
      window.location.href = "index.html";
    })
    .catch(error => {
      alert(error.message);
    });
}

// Export functions if needed for further testing
export { signup, login };
