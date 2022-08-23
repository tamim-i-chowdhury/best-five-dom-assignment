const selectedPlayer = [];
function selectButton(button) {
  const playerName = button.parentNode.parentNode.children[0].innerText;
  selectedPlayer.push(playerName);
  // Added to the PlayerList
  if (selectedPlayer.length <= 5) {
    const selectedPlayerElement = document.getElementById("selected-five");
    const li = document.createElement("li");
    li.innerText = playerName;
    selectedPlayerElement.appendChild(li);
    // button disabled
    button.disabled = true;
    button.style.backgroundColor = "gray";
  } else {
    alert("Maximum player addition limit exceeded");
    return;
  }
}
// Budget
// Calculate Total
document.getElementById("btn-calculate").addEventListener("click", function () {
  // Per Player Salary
  const perPlayerSalary = getElementValue("per-player-salary");
  // Total Player Expenses
  const totalPlayerExpenses = perPlayerSalary * 5;
  displayAmount("player-expenses", totalPlayerExpenses);
});
// Calculate Total
document
  .getElementById("btn-calculate-total")
  .addEventListener("click", function () {
    // Per Player Salary
    const perPlayerSalary = getElementValue("per-player-salary");
    // Total Player Expenses
    const numberOfPlayer = document.getElementById("selected-five").children;
    console.log(numberOfPlayer);
    const totalPlayerExpenses = perPlayerSalary * 5;
    // Manager
    const manager = getElementValue("manager-salary");
    // Coach
    const coach = getElementValue("coach-salary");

    const total = totalPlayerExpenses + manager + coach;
    displayAmount("total", total);
  });
