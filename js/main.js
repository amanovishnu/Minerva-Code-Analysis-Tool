//Document Load Function
$(document).ready(function(){
  $("#pbody").hide();
});

function redirectsignup() {
  window.open("views/signup.html");
};
function redirectlogin() {
  window.open("../index.html");
};

function showWelcomeContainer() {
  $("#lbody").hide();
  $("#pbody").show();
  console.log(user.displayName);
  document.getElementById('welcomeusername').innerHTML = 'Name: '+user.displayName;
  document.getElementById('welcomeimage').src = user.photoURL;
  document.getElementById('welcomeemail').innerHTML = 'Email: '+user.email;
  document.getElementById('welcomeverified').innerHTML = 'Email Verified: '+user.emailVerified;
  firebase.database().ref('Users/'+ user.uid).set({
    username : user.displayName,
    email : user.email,
    imageurl : user.photoURL,
    emailverified : user.emailVerified,
    phonenumber : user.phoneNumber
  });
};


