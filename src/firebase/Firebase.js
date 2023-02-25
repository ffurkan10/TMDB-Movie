import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfHxaqP6tyGah2-SJAlEVUcR3YTDQJAl8",
  authDomain: "movie-app-8c705.firebaseapp.com",
  projectId: "movie-app-8c705",
  storageBucket: "movie-app-8c705.appspot.com",
  messagingSenderId: "318349387309",
  appId: "1:318349387309:web:7f5645fd16fb77ea78baa4",
  measurementId: "G-H35QF4QXK5",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);

export const signUp = async (name, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateCurrentUser(auth, { displayName: name });
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
