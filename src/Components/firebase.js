import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDnhX5Ih5rmR2oqDHb6RDWIhw17tsJsV9I",
    authDomain: "portfolio-586d1.firebaseapp.com",
    projectId: "portfolio-586d1",
    storageBucket: "portfolio-586d1.appspot.com",
    messagingSenderId: "644094731637",
    appId: "1:644094731637:web:6ae5f2657f588f04a31f3c"
};

// App initialisation
const PortfolioApp = firebase.initializeApp(firebaseConfig)
export const PortfolioAuth = PortfolioApp.auth()