import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD8vXQ0uOqAlAuaOTvpzODsjlETnl1Z7Ho",
    authDomain: "facebook-clone-d01cb.firebaseapp.com",
    databaseURL: "https://facebook-clone-d01cb.firebaseio.com",
    projectId: "facebook-clone-d01cb",
    storageBucket: "facebook-clone-d01cb.appspot.com",
    messagingSenderId: "228198449567",
    appId: "1:228198449567:web:75269e18b27d9fc0e63daa",
    measurementId: "G-2KY7DG8MFR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;