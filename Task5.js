function doColorStuff() {
    var color = document.getElementById("colorSelector").value;
  
    if (color === "red") {
      document.getElementById("mainTitle").style.color = "red";
      document.getElementById("mainParagraph").style.color = "red";
      document.getElementById("colorBox").style.backgroundColor = "red";
    } else if (color === "blue") {
      document.getElementById("mainTitle").style.color = "blue";
      document.getElementById("mainParagraph").style.color = "blue";
      document.getElementById("colorBox").style.backgroundColor = "blue";
    } else if (color === "green") {
      document.getElementById("mainTitle").style.color = "green";
      document.getElementById("mainParagraph").style.color = "green";
      document.getElementById("colorBox").style.backgroundColor = "green";
    } else {
      alert("Please choose a color!");
    }
  }
  
  function resetAll() {
    document.getElementById("mainTitle").style.color = "black";
    document.getElementById("mainParagraph").style.color = "black";
    document.getElementById("colorBox").style.backgroundColor = "#ddd";
    document.getElementById("colorSelector").selectedIndex = 0;
  }
  