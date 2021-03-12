import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export const firebaseConfig = {
  apiKey: 'AIzaSyAfT_1SCGgJet7Q9YVR577l_MnSq2RUXLQ',
  authDomain: 'react-stripe-fs.firebaseapp.com',
  projectId: 'react-stripe-fs',
  storageBucket: 'react-stripe-fs.appspot.com',
  messagingSenderId: '140180167972',
  appId: '1:140180167972:web:665c7d297bb8850d9767b1',
  measurementId: 'G-32M562DBKP',
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
