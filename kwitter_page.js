//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");
//sending the message to the database
function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            uname: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";

}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);

                        uname = message_data["uname"];
                        message = message_data["message"];
                        like = message_data["like"];

                        name_with_tag = "<h4> " + uname + "<img class='user_tick' src='tick.png'></h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        btn = "<button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

                        row = name_with_tag + message_with_tag + btn;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();
function updateLike(message_id) {
      button_id = message_id;
      likes = document.getElementById(button_id).value; 
      likes_in_number = Number(likes) + 1; 

      console.log(likes_in_number);
      firebase.database().ref(room_name).child(message_id).update({
            like: likes_in_number 
      });
}

function logout() {

      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}