function calculateHypotenuse() {
  // Get input values
  const sideA = parseFloat(document.getElementById("side-a").value);
  const sideB = parseFloat(document.getElementById("side-b").value);

  // Validate inputs
  if (isNaN(sideA) || isNaN(sideB) || sideA <= 0 || sideB <= 0) {
    document.getElementById("result").textContent =
      "Please enter valid positive numbers.";
    return;
  }

  // Calculate hypotenuse
  const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2).toFixed(2);

  // Display the result
  document.getElementById(
    "result"
  ).textContent = `The hypotenuse is: ${hypotenuse}`;
}
