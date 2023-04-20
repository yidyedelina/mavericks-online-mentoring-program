// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBG7rqLdRQLjqRPXPNpl-q3Uph4T1h82dQ',
  appId: '1:53058268896:web:f54224f63e89dc697caa85',
  authDomain: 'ecommerce-10623.firebaseapp.com',
  measurementId: 'G-SK7X1QP6VT',
  messagingSenderId: '53058268896',
  projectId: 'ecommerce-10623',
  storageBucket: 'ecommerce-10623.appspot.com',
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app);
