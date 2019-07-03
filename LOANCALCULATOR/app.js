//Listen for submit
document.getElementById("loan-form").addEventListener("submit", function(e) {
  // Hide Results
  document.querySelector("#results").style.display = "none";

  // Show Spinner
  document.querySelector(".loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

//Calculate Results

function calculateResults() {
  //UI vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //Calculate Monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    // Show Results
    document.querySelector("#results").style.display = "block";

    // Hide Spinner
    document.querySelector(".loading").style.display = "none";

    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    showError("Please check your numbers");
  }
}

//Show error
function showError(err) {
  // Hide Spinner
  document.querySelector(".loading").style.display = "none";

  //create div
  const errorDiv = document.createElement("div");

  //Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  //add class
  errorDiv.className = "alert alert-danger";

  //create text node
  errorDiv.appendChild(document.createTextNode(err));

  //Insert error above heading (only once)
  if (document.querySelector(".alert") === null) {
    card.insertBefore(errorDiv, heading);
    setTimeout(clearError, 3000);
  }
}

//Clear Error
function clearError() {
  document.querySelector(".alert").remove();
}
