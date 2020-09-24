function esBisiesto() {
  var year = document.getElementById("year_input").value;
  if (year % 4) {
    if (year % 100) {
      if (year % 400) {
        document.getElementById("outputYear").innerHTML = "Es año bisiesto";
      }
    }
  } else {
    document.getElementById("outputYear").innerHTML = "No es un año bisiesto";
  }
}
