import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    addDoc,
    updateDoc,
    setDoc,
  } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAaFMdaRDSNd17vAU7dF2auj5hR3SSeotc",
  authDomain: "card-graphix.firebaseapp.com",
  projectId: "card-graphix",
  storageBucket: "card-graphix.appspot.com",
  messagingSenderId: "961701041462",
  appId: "1:961701041462:web:90449e47d12f54930d8f97",
  measurementId: "G-VLL2K5ZT9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
//const googleProvider = new GoogleAuthProvider();

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          return addUserToCollection(userCredentials.uid);
        }
      );
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        return { message: "Email is Invalid" };
      } else if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      ) {
        return { message: "Email/Password Combination is Invalid" };
      } else {
        console.log(err.code);
        return { message: err.message };
      }
    }
  };
  const registerWithEmailAndPassword = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "local",
        email,
      });
      return addUserToCollection(user.uid);
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        return { message: "Email is Invalid" };
      } else if (err.code === "auth/email-already-in-use") {
        return { message: "Email already in use" };
      } else if (err.code === "auth/weak-password") {
        return { message: "Password must be at least 6 Characters" };
      } else {
        return { message: err.message };
      }
    }
  };

  const logout = () => {
    signOut(auth);
  };

  const addUserToCollection = async (uid) => {
    const docRef = doc(db, "userCards", uid);
    const docData = await getDoc(docRef);
  
    if (docData.exists()) {
      const data = docData.data();
  
      return {loggedIn: true, user: {card1: data.card1, card2: data.card2, card3: data.card3}};
    } else {
      await setDoc(docRef, {
        card1: {},
        card2: {},
        card3: {},
      });
      return {loggedIn: true, user: {card1: {}, card2: {}, card3: {}}};
    }
  };

  const getUserData = async (uid) => {
    const docRef = doc(db, "userCards", uid);
    const docData = await getDoc(docRef);
    if (docData.exists()) {
      const data = docData.data();
      return {loggedIn: true, user: {card1: data.card1, card2: data.card2, card3: data.card3}};
    } else {
      return{
        loggedIn: false,
      }
    }
  };

  const updateUserData = async (uid, data) => {
    const docRef = doc(db, "userCards", uid);
    updateDoc(docRef, data);
  };

  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    getUserData,
    updateUserData,
  };