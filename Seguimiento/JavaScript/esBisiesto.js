function esBisiesto() {
  var year = document.getElementById("year_input").value;
  if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    document.getElementById("outputYear").innerHTML = "Es año bisiesto";
  } else {
    document.getElementById("outputYear").innerHTML = "No es un año bisiesto";
  }
}
