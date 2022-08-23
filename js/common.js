let count = 0;
function playerCountList(count) {
  if (count <= 5) {
    return count;
  } else {
    alert("Maximum limit exceeded");
  }
}
function selectedFive(playerName) {
  const selectedFiveElement = document.getElementById("selected-five");
  const li = document.createElement("li");
  li.innerText = playerName;
  selectedFiveElement.appendChild(li);
  count = count + 1;
  playerCountList(count);
}
function buttonDisabled(elementId) {
  const button = document.getElementById(elementId);
  button.disabled = true;
  button.style.backgroundColor = "gray";
}
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
