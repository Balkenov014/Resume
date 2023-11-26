function sum() {
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);

  var sum = input1 + input2;

  document.getElementById("output").innerHTML = "Сумма: " + sum;
}

function numberCheck() {
  var number = parseInt(document.getElementById("number").value);

  if (number > 0) {
      document.getElementById("output").innerHTML = "Positive";
  } else if (number < 0) {
      document.getElementById("output").innerHTML = "Negative";
  } else {
      document.getElementById("output").innerHTML = "Zero";
  }
}

function evenCheck() {
  var number = parseInt(document.getElementById("number").value);

  if (number % 2 === 0) {
      document.getElementById("output").innerHTML = "Yes";
  } else {
      document.getElementById("output").innerHTML = "No";
  }
}


function calculat() {
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);

  var sum = input1 + input2;
  var difference = input1 - input2;
  var multiplication = input1 * input2;
  var division = input1 / input2;

  document.getElementById("sum").innerHTML = "Сумма: " + sum;
  document.getElementById("difference").innerHTML = "Разность: " + difference;
  document.getElementById("multiplication").innerHTML = "Умножение: " + multiplication;
  document.getElementById("division").innerHTML = "Деление: " + division;
}


function getFat() {
  var height = parseInt(document.getElementById("height").value);
  var waist = parseInt(document.getElementById("waist").value);
  var gender = document.getElementById("gender").value;

  var fatPercentage;

  if (gender === "Ж") {
      fatPercentage = 76 - (20 * height / waist);
  } else if (gender === "М") {
      fatPercentage = 64 - (20 * height / waist);
  } else {
      fatPercentage = "Некорректное значение для пола"
  }}
