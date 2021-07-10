import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCU5LqAjjBVK7oOsrTDma48ynnYfgGaLRg',
  authDomain: 'zolonda-c08ae.firebaseapp.com',
  databaseURL: 'https://zolonda-c08ae.firebaseio.com',
  projectId: 'zolonda-c08ae',
  storageBucket: 'zolonda-c08ae.appspot.com',
  messagingSenderId: '1017804209594',
  appId: '1:1017804209594:web:f0d7c8e171874ddfecb183',
  measurementId: 'G-GGHXZGW38Q',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.error('Error creating user: ', e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
