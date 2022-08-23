function getElementValue(elementId) {
  const element = document.getElementById(elementId);
  const perElementSalaryString = element.value;
  const perElementSalaryAmount = parseFloat(perElementSalaryString);
  return perElementSalaryAmount;
}
function displayAmount(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
