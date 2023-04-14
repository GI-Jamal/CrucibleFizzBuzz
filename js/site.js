function getValues() {
  let fizzValue = parseInt(document.getElementById("fizz").value);
  let buzzValue = parseInt(document.getElementById("buzz").value);
  let stopValue = parseInt(document.getElementById("stopNumber").value);

  if (isNaN(fizzValue) || isNaN(buzzValue) || isNaN(stopValue) || stopValue > 5000) {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Please enter valid fizz, buzz, and stop values.",
      heightAuto: false
    });
  } else {
    let fbArray = generateFizzBuzz(stopValue);
    displayFizzBuzz(fizzValue, buzzValue, fbArray);
  }
}

function generateFizzBuzz(stopNum) {
  let numArray = [];

  for (i = 1; i <= stopNum; i++) {
    numArray.push(i);
  }

  return numArray;
}

function displayFizzBuzz(fizz, buzz, numberArray) {
  let results = "";

  for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % fizz == 0 && numberArray[i] % buzz == 0) {
      results += `<div class="col-12 border py-3 bg-warning">FizzBuzz</div>`;
    } else if (numberArray[i] % fizz == 0) {
      results += `<div class="col-12 border py-3 bg-secondary">Fizz</div>`;
    } else if (numberArray[i] % buzz == 0) {
      results += `<div class="col-12 border py-3 bg-info">Buzz</div>`;
    } else {
      results += `<div class="col-12 border py-3">${numberArray[i]}</div>`;
    }
  }

  let body = document.getElementById("fbTable");
  body.innerHTML = results;
}
