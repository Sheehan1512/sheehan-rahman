import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqo-IH3S7QUJqJuhxAJTzxh2z4Q1iPEko",
    authDomain: "sheehan-rahman.firebaseapp.com",
    projectId: "sheehan-rahman",
    storageBucket: "sheehan-rahman.appspot.com",
    messagingSenderId: "136043596559",
    appId: "1:136043596559:web:77b56a0e57c5d1b1a8cc7a",
    measurementId: "G-9G86LG026M"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export {db};