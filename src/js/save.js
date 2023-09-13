// let save = document.querySelector("save");
// document.getElementById("save").addEventListener("click", myTra);
// function myTra() {
//    alert("SAVED!");
// }
let dialog = document.querySelector("dialog");

// document.querySelector("#close").onclick = function () {
//    dialog.close();
// };

document.addEventListener("DOMContentLoaded", function () {
   const dialog = document.getElementById("addCard-bckgrd");
   dialog.showModal();
});
function myTra() {
   document.getElementById("save").style.background = "#75DD7B";
   document.getElementById("save").style.color = "white";
   document.getElementById("saved").style.color = "green";
   document.getElementById("saved").innerHTML = "✔";
   document.getElementById("save").innerHTML = "Saved";
}
function myDonn() {
   document.getElementById("save").innerHTML = " great job!";
   document.getElementById("saved").style.color = "#75DD7B";
   document.getElementById("donee").style.opacity = "0";
   document.getElementById("trs").style.opacity = "0";
}