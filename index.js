// How to accept user input


// EASY WAY with a window prompt

//let username = window.prompt("What's your name?")
//console.log(username);

// DIFFICULT WAY with HTML textbox

let username;

document.getElementById("submit").onclick = function(){
 username = document.getElementById("username").value;
 console.log(username);
 document.getElementById("label").innerHTML = "Hello " + username;
}
