// import the firebase
import firebase from "firebase";

// config data from your firebase dashboard
const CONFIG = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxxxxxxxxxx",
  databaseURL: "https://xxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxxxxxx"
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

