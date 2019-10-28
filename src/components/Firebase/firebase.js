import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
  apiKey: "AIzaSyAkzYmzdCOFM7jNV5mF-_1gk6svCAnv8To",
  authDomain: "praise-firebase-project.firebaseapp.com",
  databaseURL: "https://praise-firebase-project.firebaseio.com",
  projectId: "praise-firebase-project",
  storageBucket: "praise-firebase-project.appspot.com",
  messagingSenderId: "630570046144",
  appId: "1:630570046144:web:29c99bbec8bd3845845325"

  // apiKey: firebase.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }
    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

 // *** User API ***
 user = uid => this.db.ref(`users/${uid}`);
 users = () => this.db.ref('users');
}

export default Firebase;
