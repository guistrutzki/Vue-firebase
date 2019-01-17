import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDflpF_7y7PYi4zwg9ymop-mcBXfpDx7b4",
  authDomain: "ninja-smoothies-udemy.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-udemy.firebaseio.com",
  projectId: "ninja-smoothies-udemy",
  storageBucket: "ninja-smoothies-udemy.appspot.com",
  messagingSenderId: "891341958433"
};
const firebaseApp =  firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true})

// export firestore database
export default firebaseApp.firestore()
