import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBDRK-lH4V3r04-2qYmMnlEwoFgKCVt854",
    authDomain: "slack-clone-6cd49.firebaseapp.com",
    projectId: "slack-clone-6cd49",
    storageBucket: "slack-clone-6cd49.appspot.com",
    messagingSenderId: "603436825683",
    appId: "1:603436825683:web:53c0f05997ce2dec88daa6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};