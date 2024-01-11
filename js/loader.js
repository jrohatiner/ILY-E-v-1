

// Simulate loading time with a delay (You can remove this in a real application)
setTimeout(function() {
  // Hide the loader after loading is complete
  const loader = document.querySelector("#loader");
  loader.style.display = "none";
}, 7000); // 3000 milliseconds (3 seconds) delay for demonstration purposes, adjust as needed

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}



