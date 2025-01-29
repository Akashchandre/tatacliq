import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBwsxWjZROtw0LgHx2zZzk2dUVupsFHD0c",
    authDomain: "tatacliq-8be1b.firebaseapp.com",
    projectId: "tatacliq-8be1b",
    storageBucket: "tatacliq-8be1b.firebasestorage.app",
    messagingSenderId: "178116225292",
    appId: "1:178116225292:web:bacff33b4f09544671c129",
    measurementId: "G-DQVEZHTS51"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
