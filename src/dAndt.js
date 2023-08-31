
// show modal

    let dialog = document.querySelector("dialog");
    document.addEventListener("DOMContentLoaded", function () {
       const dialog = document.getElementById("signup-bckgrd");
       dialog.showModal();
    });

    document.querySelector("#close").onclick = function () {
    dialog.close();
     };

    // save btn
    let save = document.querySelector();
    document.getElementById("save").addEventListener("click", myTra);
    
    function myTra() {
       alert("SAVED!");
    }

    // login btns font color
    // document.getElementById("postal-code").style.width = "100%";

    document.getElementsByClassName("username").style.color = "white"; 
    document.getElementsByClassName("pwd").style.color = "white"; 