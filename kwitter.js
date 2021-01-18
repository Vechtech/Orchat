function adduser(){

username = document.getElementById("input_user").value;
localStorage.setItem("username",username);
window.location="kwitter_room.html";

}