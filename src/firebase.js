import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';

// Replace these values with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ95rLsOffNkASP0K4QGBh4umd5JkwPC8",
  authDomain: "reactdashboardtest1.firebaseapp.com",
  projectId: "reactdashboardtest1",
  storageBucket: "reactdashboardtest1.firebasestorage.app",
  messagingSenderId: "110324151913",
  appId: "1:110324151913:web:f83d409f179971e013d4f8",
  measurementId: "G-67FHFGSZ7D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

export { auth, googleProvider, appleProvider };