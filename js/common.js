function getElementValue(elementId) {
  const element = document.getElementById(elementId);
  const perElementSalaryString = element.value;
  const perElementSalaryAmount = parseFloat(perElementSalaryString);
  return perElementSalaryAmount;
}
function totalPlayerExpenses(perPlayerSalary) {
  return perPlayerSalary * 5;
}
function displayAmount(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
