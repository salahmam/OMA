// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

// إعدادات مشروعك الخاصة بـ Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDt2HAOKr3iko8V-u392vh2R2my14km7ag",
    authDomain: "oma2-d36fa.firebaseapp.com",
    projectId: "oma2-d36fa",
    storageBucket: "oma2-d36fa.firebasestorage.app",
    messagingSenderId: "774171603105",
    appId: "1:774171603105:web:91f2a5f44c4dde684080e0",
    measurementId: "G-QHPZG4JLB8"
};

// تهيئة Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
