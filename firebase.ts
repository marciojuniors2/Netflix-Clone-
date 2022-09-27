import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLzyH4H0JqRmoiJnpCNjXwibIkTia4Gik",
  authDomain: "netflix-clone-4aa00.firebaseapp.com",
  projectId: "netflix-clone-4aa00",
  storageBucket: "netflix-clone-4aa00.appspot.com",
  messagingSenderId: "741948886975",
  appId: "1:741948886975:web:e6c69779067e002dbf1b0a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }