import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCYCVTlkHK_zDjyFPoMk8DEzEfk5EXTPLk",
    authDomain: "awebrown-todo-app-8a9a3.firebaseapp.com",
    databaseURL: "https://awebrown-todo-app-8a9a3.firebaseio.com",
    storageBucket: "awebrown-todo-app-8a9a3.appspot.com",
    messagingSenderId: "369431450857"
  };
  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}

export let firebaseRef = firebase.database().ref();

export default firebase;
