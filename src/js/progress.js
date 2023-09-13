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
