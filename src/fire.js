import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyD5CjiMHKmJlF8io4oQWJq-B1ox0iJCwV8',
  authDomain: 'samplefirebase-fb138.firebaseapp.com',
  databaseURL: 'https://samplefirebase-fb138-default-rtdb.firebaseio.com',
  projectId: 'samplefirebase-fb138',
  storageBucket: 'samplefirebase-fb138.appspot.com',
  messagingSenderId: '673854578372',
  appId: '1:673854578372:web:38af7d402d6144a430b391',
  measurementId: 'G-NZ2PLT03D8'
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
