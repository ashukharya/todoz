// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAOG28sGxscdNZkpEu4pztiJHol2i897Io",
  authDomain: "todo-auth-24900.firebaseapp.com",
  projectId: "todo-auth-24900",
  storageBucket: "todo-auth-24900.appspot.com",
  messagingSenderId: "892102170711",
  appId: "1:892102170711:web:e8d274d51415d1aeb8eb12",
  measurementId: "G-VLT6C6TMXS"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// const analytics = getAnalytics(app);