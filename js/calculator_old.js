// declare needed variables
var display = document.querySelector("span");
var buttons = document.querySelectorAll(".primary-button");
var arr = [];


// initialize primary functions
function init() {
  display.textContent = [];
  setupButtons();
}

function updateDisplay() {
  display.textContent = arr.join(" ");
}


function setupButtons() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      if (this.textContent === "AC") {
        arr = [];
      }
      if (this.textContent === "CE") {
        arr.pop();
      }
      if (this.textContent === "=") {
        var total = eval(arr.join(""));
        arr = [total];
      }
      if (this.textContent === ".") {
        arr[arr.length -1] += ".";
      }
      handleNumberButtons(this);
    });
  }
  updateDisplay();
}

function handleNumberButtons(num) {

  if (!isNaN(num.textContent)) {
    if (arr.length === 0 || isNaN(arr[arr.length - 1])) {
      arr.push(num.textContent.toString());
    } else {
      arr[arr.length - 1] += num.textContent.toString();
    }
  }
  if (num.textContent === "/" || num.textContent === "+" || num.textContent === "*" || num.textContent === "-") {
    arr.push(num.textContent.toString()+ " ");
  }
  updateDisplay();
}


init();
