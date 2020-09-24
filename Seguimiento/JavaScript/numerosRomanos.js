var number = 0;
var mapRomanos = new Map([
  [1, "I"],
  [5, "V"],
  [10, "X"],
  [50, "L"],
  [100, "C"],
  [500, "D"],
  [1000, "M"],
]);
var ranges = [1, 5, 10, 50, 100, 500, 1000];
var appplyOnce = [5, 50, 500];
var appplyThreeTimes = [1, 10, 100, 1000];
var romanNumber = "";

function getDecimalNumber() {
  number = document.getElementById("number_decimal").value;
  romanNumber = "";
  let decimals = splitNumber(number);
  decimals.forEach((value, index) => {
    let res = getRange(value);
    var startRange = res[0];
    var endRange = res[1];
    var numberToDiff = res[2];

    if (value == 1) {
      romanNumber = romanNumber + getRomanNumber(1);
    } else if (value == endRange) {
      romanNumber = romanNumber + getRomanNumber(endRange);
    } else if (value < endRange) {
      romanNumber =
        romanNumber +
        getRomanNumberBetweenRange(startRange, endRange, value, numberToDiff);
    } else if (value > endRange) {
      romanNumber = romanNumber + getRomanNumberOutofRange(endRange, value);
    }
  });
  document.getElementById("outputNumber").innerHTML = romanNumber;
}

function splitNumber(number) {
  var decimals = [];
  var module = 0;
  var cont = 0;
  var div = number;
  do {
    module = div % 10;
    decimals.push(module * Math.pow(10, cont));
    div = ~~(div / 10);
    cont++;
  } while (div > 0);

  return (decimals = decimals.reverse());
}

function getRange(value) {
  var cont = 0;
  var startRange = 0;
  var endRange = 0;
  var numberToDiff = appplyThreeTimes[0];
  var next = 0;

  while (cont < ranges.length - 1) {
    startRange = ranges[cont];
    endRange = ranges[cont + 1];
    if (cont > 0 && cont % 2 == 0) {
      next++;
      numberToDiff = appplyThreeTimes[next];
    }
    if (startRange < value && value <= endRange) {
      break;
    }
    cont++;
  }
  return [startRange, endRange, numberToDiff];
}

function getRomanNumber(number) {
  return mapRomanos.get(number);
}

function getRomanNumberBetweenRange(startRange, endRange, value, numberToDiff) {
  let returnedRomanValue = "";
  if (endRange - numberToDiff > value) {
    var appliedNumber = startRange;
    var times = 0;
    while (value > 0) {
      if (appplyOnce.includes(appliedNumber)) {
        value = value - appliedNumber;
        returnedRomanValue = returnedRomanValue + mapRomanos.get(appliedNumber);
        appliedNumber = ranges[ranges.indexOf(appliedNumber) - 1];
      }

      if (appplyThreeTimes.includes(appliedNumber)) {
        value = value - appliedNumber;
        returnedRomanValue = returnedRomanValue + mapRomanos.get(appliedNumber);
        times++;
      }

      if (times == 3) {
        appliedNumber = ranges[ranges.indexOf(appliedNumber) - 1];
      }
    }
  } else {
    returnedRomanValue =
      returnedRomanValue +
      mapRomanos.get(numberToDiff) +
      mapRomanos.get(endRange);
  }
  return returnedRomanValue;
}

function getRomanNumberOutofRange(endRange, value) {
  var appliedNumber = endRange;
  var times = 0;
  let returnedRomanValue = "";

  while (value > 0) {
    if (appplyOnce.includes(appliedNumber)) {
      value = value - appliedNumber;
      returnedRomanValue = returnedRomanValue + mapRomanos.get(appliedNumber);
      appliedNumber = ranges[ranges.indexOf(appliedNumber) - 1];
    }

    if (appplyThreeTimes.includes(appliedNumber)) {
      value = value - appliedNumber;
      returnedRomanValue = returnedRomanValue + mapRomanos.get(appliedNumber);
      times++;
    }

    if (times == 3) {
      appliedNumber = ranges[ranges.indexOf(appliedNumber) - 1];
    }
  }

  return returnedRomanValue;
}
