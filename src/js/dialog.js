
// open modal onload

let dialog = document.querySelector("dialog");
document.addEventListener("DOMContentLoaded", function () {
   const dialog = document.getElementById("signup-bckgrd");
   dialog.showModal();
});

// close click anywhere

document.querySelector("#signup-bckgrd").onclick = function () {
  dialog.close();
};