// import the firebase
import firebase from "firebase";

// config data from your firebase dashboard
const CONFIG = {
  apiKey: "AIzaSyC6r4kvO8Y4k-mRZ9HaAtEPTEiPvv_QSOA",
  authDomain: "vue-fire-app-84fde.firebaseapp.com",
  databaseURL: "https://vue-fire-app-84fde.firebaseio.com",
  projectId: "vue-fire-app-84fde",
  storageBucket: "vue-fire-app-84fde.appspot.com",
  messagingSenderId: "339738093363",
  appId: "1:339738093363:web:9463ac965c5099486f0046"
};

// Export methods which will be used to access the firebase api

// initalize firebase
let initializationComplete = false;

export function init() {
  firebase.initializeApp(CONFIG)

  firebase.auth().onAuthStateChanged(() => {
    initializationComplete = true;
  });
}


export function getLoggedInUser() {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    let initializationInterval = setInterval(() => {
      if (initializationComplete) {
        clearInterval(initializationInterval);
        resolve(firebase.auth().currentUser)
      }
    },10);
  })
}

// Register method
export async function register(username, email, password) {
  try {
    // create user using the email and password
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
    // update the user to add his username
    await response.user.updateProfile({
      displayName: username
    })
    return response.user
  } catch (error) {
    // alert any error that occurred in the process
    alert(error)
  }
}

// Login user
export async function login(email, password) {
  try {
    // log in using email and password
    const response = await firebase.auth().signInWithEmailAndPassword(email, password)
    // return the currently logged in user.
    return response.user
  } catch (error) {
    alert(error)
  }
}

// Log user out
export async function logout () {
  await firebase.auth().signOut()
}

