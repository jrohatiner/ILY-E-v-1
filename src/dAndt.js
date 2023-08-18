
  //date and time
  
  function getCurrentDate() {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; // January is 0
      let yyyy = today.getFullYear();
      return mm + "/" + dd + "/" + yyyy;
    }
    
    document.getElementById("date").innerHTML= getCurrentDate();

    // login btns font color

    document.getElementsByClassName("username").style.color = "white"; 
    document.getElementsByClassName("pwd").style.color = "white"; 