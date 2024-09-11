import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import getAnalytics only if you're using it in your app
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSXWp693LbNDxrFAbnOXaE3m5nw7raya8",
  authDomain: "storinglogin.firebaseapp.com",
  projectId: "storinglogin",
  storageBucket: "storinglogin.appspot.com",
  messagingSenderId: "66357524450",
  appId: "1:66357524450:web:47bc64f38ed51844e96bbb",
  measurementId: "G-6M7809TBSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics if you're using it
// export const analytics = getAnalytics(app);