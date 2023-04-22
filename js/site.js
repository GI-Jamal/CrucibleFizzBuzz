const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function getValues() {
  let bingoValue = parseInt(document.getElementById("bingo").value);
  let bangoValue = parseInt(document.getElementById("bango").value);
  let stopValue = parseInt(document.getElementById("stopNumber").value);

  if (
    isNaN(bingoValue) ||
    isNaN(bangoValue) ||
    isNaN(stopValue) ||
    stopValue > 5000
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Please enter valid bingo, bango, and stop values.",
      heightAuto: false,
    });
  } else {
    let fbArray = generateBingoBango(stopValue);
    displayBingoBango(bingoValue, bangoValue, fbArray);
  }
}

function generateBingoBango(stopNum) {
  let numArray = [];

  for (i = 1; i <= stopNum; i++) {
    numArray.push(i);
  }

  return numArray;
}

function displayBingoBango(bingo, bango, numberArray) {
  let results = "";

  for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % bingo == 0 && numberArray[i] % bango == 0) {
      results += `<div class="col-12 border py-3 bg-warning">BingoBango</div>`;
    } else if (numberArray[i] % bingo == 0) {
      results += `<div class="col-12 border py-3 bg-secondary">Bingo</div>`;
    } else if (numberArray[i] % bango == 0) {
      results += `<div class="col-12 border py-3 bg-info">Bango</div>`;
    } else {
      results += `<div class="col-12 border py-3">${numberArray[i]}</div>`;
    }
  }

  let body = document.getElementById("fbTable");
  body.innerHTML = results;
}