import firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyCW1jZXqPew0M7yI8Cit2lD60SB4z_IoHE",
    authDomain: "batter-system-c5eae.firebaseapp.com",
    databaseURL: "https://batter-system-c5eae.firebaseio.com",
    projectId: "batter-system-c5eae",
    storageBucket: "batter-system-c5eae.appspot.com",
    messagingSenderId: "675927578569",
    appId: "1:675927578569:web:9414165f7cc57d3f90ba18"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();