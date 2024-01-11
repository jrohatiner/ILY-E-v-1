const startCameraButton = document.getElementById("startCameraButton");
const captureButton = document.querySelector("button");
const cameraView = document.getElementById("cameraView");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = cameraView.videoWidth;
canvas.height = cameraView.videoHeight;

startCameraButton.addEventListener("click", () => {
   startCamera();
   startCameraButton.style.display = "none";
   captureButton.style.display = "block";
   cameraView.style.display = "block";
});

async function startCamera() {
   try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      cameraView.srcObject = stream;
   } catch (error) {
      console.error("Error accessing the camera:", error);
   }
}

function captureAndUpload() {
   context.drawImage(cameraView, 0, 0, canvas.width, canvas.height);
   const imageDataURL = canvas.toDataURL("image/jpeg");

   // Now, you can send this data to your server for uploading.
   // You may use AJAX or fetch to perform the upload operation.

   // Example AJAX code:
   const xhr = new XMLHttpRequest();
   xhr.open(
      "POST",
      "https://143.42.115.97/var/www/html/camera-uploads/images/handle_upload.php",
      true
   );
   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   xhr.send("imageData=" + encodeURIComponent(imageDataURL));
}
function captureAndUpload() {
   context.drawImage(cameraView, 0, 0, canvas.width, canvas.height);
   const imageDataURL = canvas.toDataURL("image/jpeg");
   constelement = document.getElementById("saveButton").style.backgroundColor =
      "transparent";
}
console.log("Sending AJAX request to the server...");
