// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log("🔍 Variables d'environnement:");
console.log("VITE_API_KEY:", import.meta.env.VITE_API_KEY);
console.log("VITE_PROJECT_ID:", import.meta.env.VITE_PROJECT_ID);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

console.log("🔧 Configuration Firebase:", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

console.log("✅ Firebase initialisé avec succès");
