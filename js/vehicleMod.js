// let dialog = document.querySelector("dialog");
// document.addEventListener("DOMContentLoaded", function () {
//    const dialog = document.getElementById("signup-bckgrd");
//    dialog.showModal();
// });

// document.querySelector("#signup-bckgrd").onclick = function () {
//    dialog.close();
// };
// Get the modal
var modal = document.getElementById("signup-bckgrd");

// Get the button that opens the modal
var btn = document.getElementById("sUp");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
sUp.onclick = function () {
   modal.style.display = "block";
};

// // When the user clicks on <span> (x), close the modal
span.onclick = function () {
   modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//    if (event.target == modal) {
//       modal.style.display = "none";
//    }
// };
