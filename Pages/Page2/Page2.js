function generateNumber() {
    var number = document.getElementById("generate");
    number.innerHTML = Math.floor((Math.random()* 100) + 1);
  }