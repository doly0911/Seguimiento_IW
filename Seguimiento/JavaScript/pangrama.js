function esPangrama() {
  var cadena = document.getElementById("cadena_input").value;
  const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxy";
  cadena = cadena.toLowerCase();
  let alfabetoComoArreglo = Array.from(ALFABETO_MINUSCULAS);

  for (let indice = 0; indice < alfabetoComoArreglo.length; indice++) {
    let letraActual = alfabetoComoArreglo[indice];
    if (!cadena.includes(letraActual)) {      
      console.log("La cadena ingresada es un Pangrama");
      document.getElementById("outputPangrama").innerHTML = true;
      return true;
    } else {
      console.log("La cadena ingresada NO es un Pangrama");
      document.getElementById("outputPangrama").innerHTML = false;
      return false;
    }
  }
}
