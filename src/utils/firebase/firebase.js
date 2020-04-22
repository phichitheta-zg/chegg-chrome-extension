import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.firestore();
        this.user = null; // TODO: store user information more securely through cookies
        this.initAuthUserListener();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    initAuthUserListener = () =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                // Store user information on log in
                this.user = {
                    uid: authUser.uid,
                    email: authUser.email
                }
            } else {
                // Clear user information on log out
                this.user = null;
            }
        });
}

export default Firebase;
