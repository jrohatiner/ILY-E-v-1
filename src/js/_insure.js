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
     "http://ily-e.com/www/html/camera-uploads/images/handle_upload.php",
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