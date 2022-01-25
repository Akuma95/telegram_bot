import firebase from "firebase/compat";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPa7UtRnIXS461MisOQK5EfOjbleZwVuE",
  authDomain: "germanfindomfurs-bot.firebaseapp.com",
  projectId: "germanfindomfurs-bot",
  storageBucket: "germanfindomfurs-bot.appspot.com",
  messagingSenderId: "860752400816",
  appId: "1:860752400816:web:f8f51bed1b62fdf562c675"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();
