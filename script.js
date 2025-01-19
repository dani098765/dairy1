// Mock data from the Excel file (processed datasets)
const requirements = [
  { weight: 400, energy: 7.16, protein: 318, calcium: 16, phosphorus: 11 },
  { weight: 450, energy: 7.46, protein: 341, calcium: 18, phosphorus: 13 },
  { weight: 500, energy: 7.96, protein: 362, calcium: 20, phosphorus: 14 },
  // Add more weight rows as needed
];

const ingredients = [
  { name: "Barley", dm: 91.4, cp: 8.92, fat: 2.68, energy: 2.79, calcium: 0.06, phosphorus: 0.39 },
  { name: "Soybean", dm: 94.4, cp: 20.35, fat: 3.17, energy: 2.72, calcium: 0.2, phosphorus: 0.4 },
  { name: "Maize", dm: 89.0, cp: 9.8, fat: 4.07, energy: 2.91, calcium: 0.04, phosphorus: 0.3 },
  { name: "Wheat", dm: 89.36, cp: 9.25, fat: 4.8, energy: 2.94, calcium: 0.06, phosphorus: 0.28 },
  // Add more ingredients as needed
];

// Form submission logic
document.getElementById("feedForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const milkYield = parseFloat(document.getElementById("milkYield").value);
  const fatPercentage = parseFloat(document.getElementById("fatPercentage").value);

  if (isNaN(weight) || isNaN(milkYield) || isNaN(fatPercentage)) {
    alert("Please enter valid inputs for all fields.");
    return;
  }

  // Determine nutrient requirements based on weight
  const requirement = requirements.find(r => r.weight === weight);
  if (!requirement) {
    alert("No requirements found for this weight.");
    return;
  }

  // Calculate total nutrient requirements
  const totalEnergy = requirement.energy + milkYield * (0.4 + 0.15 * fatPercentage);
  const totalProtein = requirement.protein + milkYield * (12 + 2 * fatPercentage);
  const totalCalcium = requirement.calcium;
  const totalPhosphorus = requirement.phosphorus;

  // Optimize feed formulation
  const feedPlan = [];
  let totalCost = 0;

  ingredients.forEach(feed => {
    // Ensure valid nutritional values
    if (!feed.cp || !feed.energy) {
      console.warn(`Skipping feed ${feed.name} due to missing values.`);
      return;
    }

    // Inclusion rate based on limiting nutrient (e.g., protein)
    const inclusionRate = totalProtein / feed.cp;
    const costPerKg = 10; // Placeholder cost, replace with actual prices if available
    const cost = inclusionRate * costPerKg;

    feedPlan.push({ name: feed.name, amount: inclusionRate.toFixed(2), cost: cost.toFixed(2) });
    totalCost += cost;
  });

  // Display results
  if (feedPlan.length === 0) {
    alert("No valid feed formulation found.");
    return;
  }

  document.getElementById("results").classList.remove("hidden");
  document.getElementById("totalCost").innerText = `Total Cost: $${totalCost.toFixed(2)}`;

  const feedPlanList = document.getElementById("feedPlan");
  feedPlanList.innerHTML = "";
  feedPlan.forEach(feed => {
    const listItem = document.createElement("li");
    listItem.textContent = `${feed.name}: ${feed.amount} kg ($${feed.cost})`;
    feedPlanList.appendChild(listItem);
  });
});
