// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT4QJPQr3dj7Np_Ow-0w665Kp_PLwxY-8",
  authDomain: "wine-shop-e7740.firebaseapp.com",
  projectId: "wine-shop-e7740",
  storageBucket: "wine-shop-e7740.appspot.com",
  messagingSenderId: "429353947794",
  appId: "1:429353947794:web:addbb7ecc97886aa304c4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const getFirestore = () => {
    return app
}