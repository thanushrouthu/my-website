// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Your Firebase config (PASTE HERE)
const firebaseConfig = {
  apiKey: "PASTE_YOURS",
  authDomain: "PASTE_YOURS",
  projectId: "PASTE_YOURS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup function
window.signup = function () {
  let email = prompt("Enter email");
  let password = prompt("Enter password");

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Signup successful"))
    .catch(err => alert(err.message));
};

// Login function
window.login = function () {
  let email = prompt("Enter email");
  let password = prompt("Enter password");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Login successful"))
    .catch(err => alert(err.message));
};