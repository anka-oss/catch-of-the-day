import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBZaxzjAuQDs1oebsSCvsHm-DxIWh46Ug4",
  authDomain: "react-learning-ann.firebaseapp.com",
  databaseURL: "https://react-learning-ann-default-rtdb.europe-west1.firebasedatabase.app"
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//default export
export default base;