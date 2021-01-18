
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDZpYmaEY_Lz6cxFcwvFl1xXIx0gI254to",
      authDomain: "kwitter-b50b8.firebaseapp.com",
      databaseURL: "https://kwitter-b50b8-default-rtdb.firebaseio.com",
      projectId: "kwitter-b50b8",
      storageBucket: "kwitter-b50b8.appspot.com",
      messagingSenderId: "827055020563",
      appId: "1:827055020563:web:f15d01019580e38e227de6",
      measurementId: "G-VG181J6ZX1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + username;

function add_user(){

room_name = document.getElementById("roomname").value;
firebase.database().ref("/").child(room_name).update({
      name:"Vihaan"
});

localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + " </div> <hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){

localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";

}

function logout(){

      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}