// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVnPRKrMfYjutTqexu5Rbe6b9x9aGMFjs",
  authDomain: "portfolio-73070.firebaseapp.com",
  projectId: "portfolio-73070",
  storageBucket: "portfolio-73070.appspot.com",
  messagingSenderId: "452472713307",
  appId: "1:452472713307:web:b2c1c5146f92c96e384f7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;