// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAlZ6DXFZk-TLm-e6v-RSW1yRk3PEdtT6U",
    authDomain: "spookbook-597ae.firebaseapp.com",
    projectId: "spookbook-597ae",
    storageBucket: "spookbook-597ae.appspot.com",
    messagingSenderId: "723359402546",
    appId: "1:723359402546:web:609e2625572ac2f4ec8a2b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
