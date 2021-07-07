
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});


function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  var amount = document.getElementById("loan-amount").value = 1000;
  var years = document.getElementById("loan-years").value = 10;
  var rate = document.getElementById("loan-rate").value = 3;

 const value_of_calculator={
    amount: amount,
    years: years,
    rate: rate
  };

  calculateMonthlyPayment(value_of_calculator);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const value_of_calculator_current={
    amount: document.getElementById("loan-amount").value,
    years: document.getElementById("loan-years").value,
    rate: document.getElementById("loan-rate").value
  };
  calculateMonthlyPayment(value_of_calculator_current);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  var p = values.amount;
  var i = (values.rate/12)/100;
  var n = values.years*12;
  var top = p * i;
  var buttom = 1- Math.pow((1+i),(-n));
  var monthly = (top/buttom).toFixed(2).toString();
  updateMonthly(monthly);
  return monthly;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector("span").innerText = monthly;
  
}
