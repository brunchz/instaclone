import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Import seed file
// import {seedDatabase} from '../seed';

const config = {
  apiKey: 'AIzaSyCdzto_50MgTzeQqHjJbO06dihO5IhNXok',
  authDomain: 'instaclone-8321f.firebaseapp.com',
  projectId: 'instaclone-8321f',
  storageBucket: 'instaclone-8321f.appspot.com',
  messagingSenderId: '253517266977',
  appId: '1:253517266977:web:c68084aa16e414425c6360',
  measurementId: 'G-N2J4LKB1MK'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// ONLY CALL SEED FILE ONCE!
// seedDatabase(firebase);

export { firebase, FieldValue };

