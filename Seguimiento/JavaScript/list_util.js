function eliminarElementosUnicos() {
  var list_input = document.getElementById("list_input").value;
  var list = list_input.split(",");
  list.forEach((value, index) => {
    var i = 0;
    var cont = list.length;
    while (i < cont) {
      if (i != index && list[i] != "x") {
        if (list[i] == value) {
          break;
        }
      }
      i++;
    }
    if (i >= cont) {
      list[index] = "x";
    }
  });
  list = list.filter((value) => {
    return value != "x";
  });
  document.getElementById("outputList").innerHTML = list;
}
