import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDhz8NNi5lb8Fhxcq_kk-tZDvkakdc2iy8",
  authDomain: "clone-e05a4.firebaseapp.com",
  databaseURL: "https://clone-e05a4.firebaseio.com",
  projectId: "clone-e05a4",
  storageBucket: "clone-e05a4.appspot.com",
  messagingSenderId: "457130121481",
  appId: "1:457130121481:web:33344232375e91af52dbd8",
  measurementId: "G-D68XS4HEBB"
})


const auth = firebase.auth();

export { auth };