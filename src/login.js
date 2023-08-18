const scanButton = document.getElementById("scan-button");

scanButton.addEventListener("click", () => {
  // Get the user's camera stream.
  navigator.mediaDevices.getUserMedia({
    video: true,
  }).then((stream) => {
    // Create a canvas element and draw the camera stream to the canvas.
    const canvas = document.createElement("canvas");
    canvas.width = stream.videoWidth;
    canvas.height = stream.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(stream, 0, 0);

    // Create a blob from the canvas.
    const blob = canvas.toBlob();

    // Upload the blob to a server.
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload");
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log("File uploaded successfully!");
      } else {
        console.log("Error uploading file!");
      }
    };
    xhr.send(blob);
  });
});