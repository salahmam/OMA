// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMANgdrLgoGIjqLZOcS_qyEqCUOVC7gOU",
  authDomain: "oma0-33cc0.firebaseapp.com",
  projectId: "oma0-33cc0",
  storageBucket: "oma0-33cc0.appspot.com",
  messagingSenderId: "899300774863",
  appId: "1:899300774863:web:0a81a7f5747ef37d49b8ba",
  measurementId: "G-5CKWYQT9XZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };