// import firebase from 'firebase';
//
// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyCYCVTlkHK_zDjyFPoMk8DEzEfk5EXTPLk",
//   authDomain: "awebrown-todo-app-8a9a3.firebaseapp.com",
//   databaseURL: "https://awebrown-todo-app-8a9a3.firebaseio.com",
//   storageBucket: "awebrown-todo-app-8a9a3.appspot.com",
//   messagingSenderId: "369431450857"
// };
// firebase.initializeApp(config);
//
// let firebaseRef = firebase.database().ref();
//
// firebaseRef.set({
//   isRunning: true,
//   app: {
//     name: 'Todo App',
//     version: '1.0.0'
//   },
//   user: {
//     name: 'Tony',
//     age: 34
//   }
// });
//
// let todosRef = firebaseRef.child('todos');
//
// todosRef.on('child_added', (snapshot) => {
//   console.log('child added:', snapshot.key, snapshot.val());
// });
//
// todosRef.on('child_changed', (snapshot) => {
//   console.log('child changed: ', snapshot.val());
// });
//
// todosRef.push({text: 'Make the bed'});
// todosRef.push({text: 'Make chicken and waffles'});

// let notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child added', snapshot.key, snapshot.val())
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child changed', snapshot.key, snapshot.val())
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child removed', snapshot.key, snapshot.val())
// });
//
// let newNoteRef = notesRef.push({
//     text: 'Walk the dog'
// });
//
// console.log('newNoteRef key:', newNoteRef.key);

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Todd'});
//
// firebaseRef.child('app').update({name: 'New Name'});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val())
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// let logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});

// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Mikey!'
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//   name: 'Mikey!!'
// });

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//     name: 'Todo Application'
// }).then (() => {
//   console.log('Update worked')
// }, (e) => {
//   console.log('Update failed')
// });

// firebaseRef.set({
//   appName: 'Something else'
// });

// firebaseRef.child('user').set({
//   name: 'Mike'
// });
