import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_CoJZh3mrLKlZHDixQmSMaK9tkCG8ONE",
    authDomain: "pct-homework-helper.firebaseapp.com",
    databaseURL: "https://pct-homework-helper.firebaseio.com",
    projectId: "pct-homework-helper",
    storageBucket: "pct-homework-helper.appspot.com",
    messagingSenderId: "462687506275",
    appId: "1:462687506275:web:693aa43f9e0e284f038d56",
    measurementId: "G-4SRG1Z5Z8X",
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.firestore();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
}

export default Firebase;
