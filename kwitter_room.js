const firebaseConfig = {
    apiKey: "AIzaSyB0-PapZBpgi9hN2-ilPElhT90Esbb4C20",
    authDomain: "kwitter---project-27e7c.firebaseapp.com",
    projectId: "kwitter---project-27e7c",
    storageBucket: "kwitter---project-27e7c.appspot.com",
    messagingSenderId: "439124964755",
    appId: "1:439124964755:web:79aeb3bc585d2d12e0e466",
    measurementId: "G-VWG625HGBH"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
