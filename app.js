  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDGsAbHSLc4XGNaJ72snCm6w7qSSM5AqZQ",
    authDomain: "loginproject-da878.firebaseapp.com",
    databaseURL: "https://loginproject-da878.firebaseio.com",
    projectId: "loginproject-da878",
    storageBucket: "loginproject-da878.appspot.com",
    messagingSenderId: "745977463382"
  };
  firebase.initializeApp(config);
  var provider = new firebase.auth.GoogleAuthProvider();
  var provider = new firebase.auth.GithubAuthProvider();
  var provider = new firebase.auth.FacebookAuthProvider();



//User Login
function login(){
  const email = document.getElementById('txtEmail').value;
  const pass = document.getElementById('txtPassword').value;
  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error:"+errorMessage);
  // ...
});
};
//User Signin
function signup(){
  const email = document.getElementById('txtEmail').value;
  const pass = document.getElementById('txtPassword').value;
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
    window.alert(errorMessage);
  // ...
});
};
//User Signout
function signout(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  console.log('Logout successful');
}).catch(function(error) {
  // An error happened.
});
}



//Manage Users
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    
  } else {
    
  }
});

//Google Signup
function fgoogle(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
};

//Facebook Signup
function ffacebook(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
      setTimeout(3000);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
};

//Github Signup
function fgithub(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
};
