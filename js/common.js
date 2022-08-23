function getElementValue(elementId) {
  const element = document.getElementById(elementId);
  const perElementSalaryString = element.value;
  const perElementSalaryAmount = parseFloat(perElementSalaryString);
  if (isNaN(perElementSalaryAmount)) {
    alert("Please provide a valid number.");
    element.value = "";
    return;
  }
  return perElementSalaryAmount;
}
function displayAmount(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
