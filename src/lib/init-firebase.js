import { initializeApp } from 'firebase/app';

const {
  PUBLIC_apiKey: apiKey,
  PUBLIC_authDomain: authDomain,
  PUBLIC_projectId: projectId,
  PUBLIC_storageBucket: storageBucket,
  PUBLIC_messagingSenderId: messagingSenderId,
  PUBLIC_appId: appId,
  PUBLIC_measurementId: measurementId,
} = import.meta.env


const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
};

const app = initializeApp(firebaseConfig);

export default app;