//Global Auth Functions
var gprovider = new firebase.auth.GoogleAuthProvider();
var twitterprovider = new firebase.auth.TwitterAuthProvider();
var githubprovider = new firebase.auth.GithubAuthProvider();
var user;


//Google Login Function
function googlesignin() {
    firebase.auth().signInWithPopup(gprovider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    user = result.user;
    showWelcomeContainer();
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


//Twitter Auth Function
function twittersigin(){
  	firebase.auth().signInWithPopup(twitterprovider).then(function(result) {
  	// This gives you a the Twitter OAuth 1.0 Access Token and Secret.
  	// You can use these server side with your app's credentials to access the Twitter API.
  	var token = result.credential.accessToken;
  	var secret = result.credential.secret;
  	// The signed-in user info.
  	user = result.user;
  	showWelcomeContainer();
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

//Github Auth Function 
function githubsignin(){
	firebase.auth().signInWithPopup(githubprovider).then(function(result) {
  	// This gives you a GitHub Access Token. You can use it to access the GitHub API.
  	var token = result.credential.accessToken;
  	// The signed-in user info.
  	user = result.user;
    console.log(token);
    console.log(user);
    showWelcomeContainer();
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

//Email Signup
function emailsignup() {
    const email = document.getElementById('txtemail').value;
    const password = document.getElementById('txtpassword').value;
    window.alert(email+password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert('Error:'+errorMessage);
    // ...
  });
};

//Email Login
function emailLogin() {
    const email = document.getElementById('txtemail').value;
    const password = document.getElementById('txtpassword').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert('Error:'+errorMessage);
    // ...
  });  
  var user = firebase.auth().currentUser;
  //showWelcomeContainer2();
  //var name, email, photoUrl, uid, emailVerified;
  if (user != null) {
  firebase.database().ref('Users/'+ user.uid).set({
    username : user.displayName,
    email : user.email,
    imageurl : user.photoURL,
    emailverified : user.emailVerified,
    phonenumber : user.phoneNumber
    });
    console.log(user.email);
    console.log(user.emailVerified);
    normalsign();
  };
};


//Signout Function
function signOut() {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    }).catch(function(error) {
    // An error happened.
    });
    window.close('index.html');
    window.open('views/logout.html');
 };

 
 function changedata() {
  const mobilenumber = document.getElementById('mobilenumber').value;
  const username = document.getElementById('username').value;
  const tags = document.getElementById('tags').value;
  var user = firebase.auth().currentUser.uid;
  firebase.database().ref('Users/'+ user).push({
    mobilenumber : mobilenumber,
    username : username,
    tags : tags
  });
  console.log(username);
  console.log(mobilenumber);
  console.log(tags);
};

function uploadcode() {
  const uploadcode = document.getElementById('importcode').value;
  var user = firebase.auth().currentUser.uid;
  firebase.database().ref('Users/'+ user).push({
    GitHublink: uploadcode
  });
  console.log(uploadcode);

}

