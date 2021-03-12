import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { FirebaseAppProvider } from 'reactfire'

export const firebaseConfig = {
  apiKey: 'AIzaSyAfT_1SCGgJet7Q9YVR577l_MnSq2RUXLQ',
  authDomain: 'react-stripe-fs.firebaseapp.com',
  projectId: 'react-stripe-fs',
  storageBucket: 'react-stripe-fs.appspot.com',
  messagingSenderId: '140180167972',
  appId: '1:140180167972:web:665c7d297bb8850d9767b1',
  measurementId: 'G-32M562DBKP',
}

export const stripePromise = loadStripe(
  'pk_test_51Hy5wjBtWDnvAXit41UOPdfLL3VcimvixisvVoX07ynyZjMZZfcvGrqk3NiiXeIJSoWu8LPuJ6OjFA1L1lbdFyXK00MU8MEruQ'
)

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
