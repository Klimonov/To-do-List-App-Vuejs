import * as firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyCuGItAbsvs7TxQsY8jT2A0GHfDPLKL408',
  authDomain: 'my-project-f2ef0.firebaseapp.com',
  databaseURL: 'https://my-project-f2ef0.firebaseio.com',
  projectId: 'my-project-f2ef0',
  storageBucket: 'my-project-f2ef0.appspot.com',
  messagingSenderId: '987991964120',
  appId: '1:987991964120:web:925fef80289ac062519aad',
  measurementId: 'G-W1FCYX1E2Z',
});

const db = firebase.firestore();

export default db;
