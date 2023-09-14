// img upload
function uploadImage() {
  const imageInput = document.getElementById("imageInput");
  const preview = document.getElementById("preview");

  const file = imageInput.files[0];
  if (file) {
     const reader = new FileReader();

     reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
        preview.innerHTML = "";
        preview.appendChild(img);

        // Send the image data to the server
        const imageData = e.target.result;
        sendDataToServer(imageData);
     };

     reader.readAsDataURL(file);
  }
}
function sendDataToServer(imageData) {
  // Replace 'your-upload-url' with the URL of your server
  const xhr = new XMLHttpRequest();
  xhr.open(
     "POST",
     "http://ily-e.com/var/www/html/camera-uploads/images/handle_upload.php",
     true
  );
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && xhr.status === 200) {
        // Handle a successful response from the server, if needed
        console.log("Image uploaded successfully.");
     } else if (xhr.readyState === 4 && xhr.status !== 200) {
        // Handle an error response from the server, if needed
        console.error("Error uploading image:", xhr.status, xhr.statusText);
     }
  };
  const formData = new FormData();
  formData.append("imageData", imageData);
  // Send the image data to the server
  xhr.send(formData);
}

// end img upload

// modal open onload

let dialog = document.querySelector("dialog");
document.querySelector("#close").onclick = function () {
  dialog.close();
};

document.addEventListener("DOMContentLoaded", function () {
  const dialog = document.getElementById("signup-bckgrd");
  dialog.showModal();
});

// save button

let save = document.querySelector();
document.getElementById("save").addEventListener("click", myTra);

function myTra() {
  alert("SAVED!");
}
// progress bar
let i = 0;
function move() {
  if (i == 0) {
     i = 1;
     let elem = document.getElementById("proBar");
     let width = 1;
     let id = setInterval(frame, 10);
     function frame() {
        if (width >= 100) {
           clearInterval(id);
           i = 0;
        } else {
           width++;
           elem.style.width = width + "%";
           elem.innerHTML = width + "%";
        }
     }
  }
}
