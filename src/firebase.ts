import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDSd6Ln8MjUfkyjPeXMl4sk_TAE1qpGQz8",
  authDomain: "social-media-clone-d9078.firebaseapp.com",
  databaseURL: "https://social-media-clone-d9078-default-rtdb.firebaseio.com",
  projectId: "social-media-clone-d9078",
  storageBucket: "social-media-clone-d9078.appspot.com",
  messagingSenderId: "407057180569",
  appId: "1:407057180569:web:0927d35f56672ad56ad508",
  measurementId: "G-E0N5810NFD"
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
