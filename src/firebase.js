 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
 import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged ,signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
 import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAUSqEUgb7zyt9vAEYm3eVYLU0Vz8hrfUY",
   authDomain: "classwork-14-7-2024.firebaseapp.com",
   projectId: "classwork-14-7-2024",
   storageBucket: "classwork-14-7-2024.appspot.com",
   messagingSenderId: "555990634683",
   appId: "1:555990634683:web:3a47f545da9bd6975c599e"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export{
   auth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged,signOut
   ,db,collection, addDoc

}
