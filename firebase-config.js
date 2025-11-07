<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAMANgdrLgoGIjqLZOcS_qyEqCUOVC7gOU",
    authDomain: "oma0-33cc0.firebaseapp.com",
    projectId: "oma0-33cc0",
    storageBucket: "oma0-33cc0.firebasestorage.app",
    messagingSenderId: "899300774863",
    appId: "1:899300774863:web:0a81a7f5747ef37d49b8ba",
    measurementId: "G-5CKWYQT9XZ"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const analytics = getAnalytics(app);

  // ✅ تصدير المتغيرات لاستخدامها في الصفحات الأخرى
  export { app, auth, db, analytics };
</script>