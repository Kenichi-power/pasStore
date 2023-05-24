import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyB6WzNYSVhL9oxuHq53evylQ65i94fPG8A',
  authDomain: 'pass-store-92756.firebaseapp.com',
  projectId: 'pass-store-92756',
  storageBucket: 'pass-store-92756.appspot.com',
  messagingSenderId: '950611522028',
  appId: '1:950611522028:web:e54110061e7d13af4b10c9',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
