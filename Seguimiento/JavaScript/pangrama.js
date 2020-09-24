
function determinarPangrama(){
  var cadena = document.getElementById("textString").value
  x = esPangrama(cadena);
  if (x === true) {
    rta = "La Cadena es un Pangrama";
    console.log("La Cadena es un Pangrama")
  } else {
    rta = "La Cadena NO es un Pangrama";
    console.log("La Cadena NO es un Pangrama")
  }
  document.getElementById("outputPangrama").innerHTML = rta;
}

function esPangrama(cadena) {
  const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxy";
  cadena = cadena.toLowerCase();
  let alfabetoComoArreglo = Array.from(ALFABETO_MINUSCULAS);

  for (let indice = 0; indice < alfabetoComoArreglo.length; indice++) {
    let letraActual = alfabetoComoArreglo[indice];
    if (!cadena.includes(letraActual)) return false;
  }
  return true;
}
