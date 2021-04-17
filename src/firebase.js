import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyCjT5I6KY2RPuSq1JlAdprenPLiSrZiJGQ",
  authDomain: "todo-6476d.firebaseapp.com",
  projectId: "todo-6476d",
  storageBucket: "todo-6476d.appspot.com",
  messagingSenderId: "815268651797",
  appId: "1:815268651797:web:dc4254f8981786dee07f1c",
  measurementId: "G-ZQE71HFQB1"
  };
  // Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};