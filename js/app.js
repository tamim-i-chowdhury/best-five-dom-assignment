// Selected Five Players Field
document
  .getElementById("btn-karim-benzema")
  .addEventListener("click", function () {
    selectedFive("Karim Benzema");
    buttonDisabled("btn-karim-benzema");
  });
document
  .getElementById("btn-vinicius-junior")
  .addEventListener("click", function () {
    selectedFive("Vinicius Junior");
    buttonDisabled("btn-vinicius-junior");
  });
document
  .getElementById("btn-eden-hazard")
  .addEventListener("click", function () {
    selectedFive("Eden Hazard");
    buttonDisabled("btn-eden-hazard");
  });
document
  .getElementById("btn-luca-modric")
  .addEventListener("click", function () {
    selectedFive("Luka Modric");
    buttonDisabled("btn-luca-modric");
  });
document.getElementById("btn-valverde").addEventListener("click", function () {
  selectedFive("Federico Valverde");
  buttonDisabled("btn-valverde");
});
document
  .getElementById("btn-toni-kroos")
  .addEventListener("click", function () {
    selectedFive("Toni Kroos");
    buttonDisabled("btn-toni-kroos");
  });
document
  .getElementById("btn-daniel-carvajal")
  .addEventListener("click", function () {
    selectedFive("Daniel Carvajal");
    buttonDisabled("btn-daniel-carvajal");
  });
document
  .getElementById("btn-thibaut-courtois")
  .addEventListener("click", function () {
    selectedFive("Thibaut Courtois");
    buttonDisabled("btn-thibaut-courtois");
  });
document
  .getElementById("btn-david-alaba")
  .addEventListener("click", function () {
    selectedFive("David Alaba");
    buttonDisabled("btn-david-alaba");
  });

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
    const totalPlayerExpenses = perPlayerSalary * 5;
    // Manager
    const manager = getElementValue("manager-salary");
    // Coach
    const coach = getElementValue("coach-salary");

    const total = totalPlayerExpenses + manager + coach;
    displayAmount("total", total);
  });
