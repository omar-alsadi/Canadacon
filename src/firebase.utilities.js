import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { signInSuccess, signFailure, signOutSuccess } from './actions'

const firebaseConfig = {
    // apiKey: "AIzaSyBapC7kdbsmNKXxJPKiiqHVrOWLGEzZNus",
    // authDomain: "canada-con.firebaseapp.com",
    // projectId: "canada-con",
    // storageBucket: "canada-con.appspot.com",
    // messagingSenderId: "1013868946502",
    // appId: "1:1013868946502:web:a33233c5ff09ead6439647",
    // measurementId: "G-0S8VY75YB1",
    apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_FIREBASE_APP_ID,
    measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
}

let instance = null;
let auth;
let firestore;

const getFirebase = () => {
    if (typeof window !== 'undefined') {
        if (instance) return instance;
        instance = firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        firestore = firebase.firestore();
        return instance;
    }

    return null;
}

export default getFirebase;

//////////////// GET CURRENT USER ////////////////

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
};

//////////////// IS USER AUTH ////////////////


export const isUserAuthenticated = async (dispatch) => {

    try {
        const userAuth = await getCurrentUser();
        // test  await userAuth.reload();
        if (!userAuth) return;
        await getSnapshotFromAuth(userAuth, dispatch);
    } catch (error) {
        await signFailure(error)
    }
}

/////////////////// CREATE USER PROFILE ////////////////////////

export const createUserProfileDocument = async (userAuth) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {

        const { email, displayName } = userAuth;

        console.log('userAuth: ', userAuth)

        const createAt = new Date();

        try {
            userRef.set({
                email,
                displayName,
                createAt,
            })
        } catch (error) {
            console.log(error)
        }

    }

    return userRef

}

/////////////////// SIGN IN AFTER CREATING USER PROFILE ////////////////////////

const getSnapshotFromAuth = async (userAuth, dispatch) => {

    try {
        const userRef = await createUserProfileDocument(userAuth);
        const userSnapshot = await userRef.get();

        return await dispatch(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))

    } catch (error) {
        return await dispatch(signFailure(error))
    }

}

//////////////// Facebook Auth //////////////////

export const facebookProvider = new firebase.auth.FacebookAuthProvider();

facebookProvider.setCustomParameters({
    'display': 'popup'
});

export const signInWithFB = async (dispatch) => {

    try {

        const userData = await auth.signInWithPopup(facebookProvider);
        const { user } = await userData;
        console.log('facebook user: ', user)

        await getSnapshotFromAuth(user, dispatch)


        const userRef = await firestore.doc(`users/${user.uid}`);


        await userRef.update({
            photoURL: userData.additionalUserInfo.profile.picture.data.url
        })

    } catch (error) {
        return await dispatch(signFailure(error))
    }
};


//////////////// Google Auth //////////////////

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

////// problem with dispatch result to reducer

export const signInWithGoogle = async (dispatch) => {
    try {
        const { user } = await auth.signInWithPopup(googleProvider)
        await getSnapshotFromAuth(user, dispatch)
        const userRef = await firestore.doc(`users/${user.uid}`);

        await userRef.update({
            photoURL: user.photoURL
        })

    } catch (error) {
        return await dispatch(signFailure(error))
    }
};

/////////////// Sign Out ///////////////

export const signOut = async (dispatch) => {

    try {
        await auth.signOut();
        await dispatch(signOutSuccess())

    } catch (error) {
        return await dispatch(signFailure(error))
    }

}