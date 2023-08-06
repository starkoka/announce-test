// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVOYX0sTt9dlqk_UUHKKToq8GdsEKzkS8",
    authDomain: "fir-test-539ee.firebaseapp.com",
    projectId: "fir-test-539ee",
    storageBucket: "fir-test-539ee.appspot.com",
    messagingSenderId: "343075011997",
    appId: "1:343075011997:web:9bee3f006985755a164374",
    measurementId: "G-Q2YFJQZ1XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);