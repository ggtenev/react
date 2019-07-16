import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB2cGdCkmiFT39Ab6q7lL9ald3r7CNIDT0",
  authDomain: "authentication-5e14f.firebaseapp.com",
  databaseURL: "https://authentication-5e14f.firebaseio.com",
  projectId: "authentication-5e14f",
  storageBucket: "",
  messagingSenderId: "234221762039",
  appId: "1:234221762039:web:d5210683239001ab"
};
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;