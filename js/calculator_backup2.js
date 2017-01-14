

// declaring functions
(function() {



  function Calculator(displayId) {
    this.displayId = displayId;
    this.arr = [];
  }

  Calculator.prototype.updateDisplay = function() {
    document.getElementById(this.displayId).innerText = this.arr.join(" ");
  };

  Calculator.prototype.handleNumber = function(number) {
    if(isNaN(this.arr[this.arr.length - 1])) {
      this.arr.push(number.toString());
    } else {
      this.arr[this.arr.length - 1] += number.toString();
    }
    this.updateDisplay();
  };

  Calculator.prototype.handleOperator = function(operator) {
    if (operator === ".") {
      this.arr[this.arr.length - 1] += operator.toString();
    } else {
      this.arr.push(operator);
    }
    this.updateDisplay();
  };

  Calculator.prototype.allClear = function(funcName) {
    this.arr = [];
    this.updateDisplay();
  };

  Calculator.prototype.clearEntry = function() {
    this.arr.pop();
    this.updateDisplay();
  };

  Calculator.prototype.sumNumbers = function() {
    var total = eval(this.arr.join(" "));
    this.arr = [total];
    this.updateDisplay();
  };

    // declaring needed variables
  var calc = new Calculator("display");
  var numberButtons = document.getElementsByClassName("number-buttons");
  var operatorButtons = document.getElementsByClassName("operator-buttons");
  var allClearButton = document.querySelector(".all-clear");
  var clearEntryButton = document.querySelector(".clear-entry");
  var equalsButton = document.querySelector(".equals-button");

  allClearButton.addEventListener("click", function() {
    calc.allClear();
  });

  clearEntryButton.addEventListener("click", function() {
    calc.clearEntry();
  });

  equalsButton.addEventListener("click", function() {
    calc.sumNumbers();
  });

  for (var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", function() {
      calc.handleOperator(this.innerText);
    });
  }

  for (var j = 0; j < numberButtons.length; j++) {
    numberButtons[j].addEventListener("click", function() {
      calc.handleNumber(this.innerText);
    });
  }
})();
