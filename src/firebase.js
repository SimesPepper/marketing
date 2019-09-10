import firebase from 'firebase'
import Rebase from 're-base'
require('dovenv').config()

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  };

  firebase.initializeApp(firebaseConfig);

  export default firebaseConfig;