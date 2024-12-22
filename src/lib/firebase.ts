import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbTPG-86BelViRCp8l5aVz2ZhVvP3QESk",
  authDomain: "enlighten-a856c.firebaseapp.com",
  projectId: "enlighten-a856c",
  storageBucket: "enlighten-a856c.firebasestorage.app",
  messagingSenderId: "827733574172",
  appId: "1:827733574172:web:4e678cd2c57d9f953fd5d9",
  measurementId: "G-VXNDREDTVB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);