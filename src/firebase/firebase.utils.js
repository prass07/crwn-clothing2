import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAfOiFJIQoAqTUz4MzBNsb8xHbIZUCL9Gc",
    authDomain: "crwn-clothing2.firebaseapp.com",
    databaseURL: "https://crwn-clothing2.firebaseio.com",
    projectId: "crwn-clothing2",
    storageBucket: "crwn-clothing2.appspot.com",
    messagingSenderId: "408960187388",
    appId: "1:408960187388:web:455f7292fea7c44ada1079"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error) {
            console.log('error creating user',error.message);
        }
    }
    
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promp: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;