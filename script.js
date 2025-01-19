// Mock data for requirements
const requirements = [
  { weight: 400, energy: 7.16, protein: 318, calcium: 16, phosphorus: 11 },
  { weight: 450, energy: 7.46, protein: 341, calcium: 18, phosphorus: 13 },
  { weight: 500, energy: 7.96, protein: 362, calcium: 20, phosphorus: 14 },
];

// Mock data for ingredients
const ingredients = [
 { name: "Barley", energy: 1.86, protein: 8.92, calcium: 0.06, phosphorus: 0.39 },
      { name: "Soybean", energy: 1.80, protein: 48.0, calcium: 0.20, phosphorus: 0.40 },
      { name: "Maize", energy: 1.96, protein: 9.8, calcium: 0.04, phosphorus: 0.3 },
      { name: "Wheat", energy: 1.95, protein: 11.0, calcium: 0.05, phosphorus: 0.35 },
      { name: "Rice Bran", energy: 2.20, protein: 12.5, calcium: 0.1, phosphorus: 0.5 },
      { name: "Cottonseed Meal", energy: 1.90, protein: 41.0, calcium: 0.17, phosphorus: 0.65 },
      { name: "Groundnut Cake", energy: 1.95, protein: 45.0, calcium: 0.2, phosphorus: 0.6 },
      { name: "Fish Meal", energy: 2.90, protein: 55.0, calcium: 4.06, phosphorus: 2.69 },
      { name: "Molasses", energy: 2.50, protein: 3.0, calcium: 0.1, phosphorus: 0.05 },
      { name: "Sunflower Meal", energy: 1.85, protein: 29.0, calcium: 0.12, phosphorus: 0.4 },
      { name: "Linseed Cake", energy: 1.82, protein: 35.0, calcium: 0.2, phosphorus: 0.7 },
      { name: "Rapeseed Meal", energy: 1.87, protein: 36.0, calcium: 0.15, phosphorus: 0.5 },
      { name: "Coconut Cake", energy: 1.88, protein: 22.0, calcium: 0.08, phosphorus: 0.2 },
      { name: "Sesame Cake", energy: 1.89, protein: 42.0, calcium: 0.3, phosphorus: 0.6 },
      { name: "Pea Hulls", energy: 1.50, protein: 8.0, calcium: 0.06, phosphorus: 0.3 },
      { name: "Sorghum", energy: 1.85, protein: 10.0, calcium: 0.04, phosphorus: 0.35 },
      { name: "Oats", energy: 1.80, protein: 11.0, calcium: 0.1, phosphorus: 0.4 },
      { name: "Lucerne Hay", energy: 1.65, protein: 18.0, calcium: 1.2, phosphorus: 0.25 },
      { name: "Timothy Hay", energy: 1.55, protein: 8.0, calcium: 0.5, phosphorus: 0.2 },
      { name: "Berseem Hay", energy: 1.70, protein: 20.0, calcium: 1.5, phosphorus: 0.3 },
      { name: "Carrot Tops", energy: 1.20, protein: 12.0, calcium: 1.0, phosphorus: 0.15 },
      { name: "Beet Pulp", energy: 1.60, protein: 10.0, calcium: 0.7, phosphorus: 0.2 },
      { name: "Potato", energy: 1.10, protein: 2.0, calcium: 0.05, phosphorus: 0.1 },
      { name: "Banana Pulp", energy: 1.30, protein: 3.0, calcium: 0.1, phosphorus: 0.2 },
      { name: "Apple Pomace", energy: 1.40, protein: 4.0, calcium: 0.15, phosphorus: 0.2 },
      { name: "Carrot", energy: 1.20, protein: 1.5, calcium: 0.2, phosphorus: 0.1 },
      { name: "Pumpkin", energy: 1.30, protein: 2.0, calcium: 0.15, phosphorus: 0.1 },
      { name: "Tomato Pomace", energy: 1.50, protein: 5.0, calcium: 0.4, phosphorus: 0.2 },
      { name: "Cabbage", energy: 1.10, protein: 2.0, calcium: 0.3, phosphorus: 0.1 },
      { name: "Broccoli", energy: 1.15, protein: 3.5, calcium: 0.5, phosphorus: 0.2 },
      { name: "Spinach", energy: 1.10, protein: 3.0, calcium: 1.2, phosphorus: 0.2 },
      { name: "Sugarcane Tops", energy: 1.50, protein: 4.0, calcium: 0.15, phosphorus: 0.05 },
      { name: "Rice Straw", energy: 1.20, protein: 3.0, calcium: 0.05, phosphorus: 0.1 },
      { name: "Wheat Straw", energy: 1.10, protein: 2.5, calcium: 0.1, phosphorus: 0.05 },
      { name: "Corn Silage", energy: 1.70, protein: 8.0, calcium: 0.25, phosphorus: 0.2 },
      { name: "Ryegrass", energy: 1.60, protein: 10.0, calcium: 0.5, phosphorus: 0.2 },
      { name: "Fodder Maize", energy: 1.75, protein: 9.0, calcium: 0.3, phosphorus: 0.2 },
      { name: "Pearl Millet", energy: 1.80, protein: 11.0, calcium: 0.4, phosphorus: 0.25 },
      { name: "Sorghum Silage", energy: 1.65, protein: 7.0, calcium: 0.2, phosphorus: 0.15 },
      { name: "Chickpea Straw", energy: 1.50, protein: 5.0, calcium: 0.1, phosphorus: 0.1 },
      { name: "Lentil Straw", energy: 1.55, protein: 6.0, calcium: 0.12, phosphorus: 0.1 },
      { name: "Groundnut Straw", energy: 1.60, protein: 7.0, calcium: 0.15, phosphorus: 0.2 },
      { name: "Soybean Straw", energy: 1.70, protein: 8.0, calcium: 0.18, phosphorus: 0.2 },
      { name: "Peanut Hulls", energy: 1.20, protein: 4.0, calcium: 0.1, phosphorus: 0.1 },
      { name: "Coconut Husk", energy: 1.10, protein: 2.0, calcium: 0.2, phosphorus: 0.05 },
      { name: "Palm Kernel Meal", energy: 1.80, protein: 15.0, calcium: 0.25, phosphorus: 0.2 },
      { name: "Cassava", energy: 2.10, protein: 3.0, calcium: 0.2, phosphorus: 0.1 },
      { name: "Sweet Potato", energy: 2.00, protein: 4.0, calcium: 0.15, phosphorus: 0.1 }
];

// Conversion factors for time frames
const timeFrames = {
  daily: 1,
  monthly: 30,
  yearly: 365,
};

// Maximum dry matter (DM) limit per day
const maxDMPerDay = 25;

// Form submission logic
document.getElementById("feedForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const milkYield = parseFloat(document.getElementById("milkYield").value);
  const fatPercentage = parseFloat(document.getElementById("fatPercentage").value);
  const selectedTimeFrame = document.getElementById("timeFrame").value;

  if (isNaN(weight) || isNaN(milkYield) || isNaN(fatPercentage)) {
    alert("Please enter valid inputs for all fields.");
    return;
  }

  // Find the closest matching weight requirement
  const requirement = requirements.reduce((prev, curr) => 
    Math.abs(curr.weight - weight) < Math.abs(prev.weight - weight) ? curr : prev
  );

  if (!requirement) {
    alert("No matching requirements found.");
    return;
  }

  // Calculate total nutrient requirements
  const totalEnergy = requirement.energy + milkYield * (0.4 + 0.15 * fatPercentage);
  const totalProtein = requirement.protein + milkYield * (12 + 2 * fatPercentage);
  const totalCalcium = requirement.calcium;
  const totalPhosphorus = requirement.phosphorus;

  // Adjust for time frame
  const multiplier = timeFrames[selectedTimeFrame];

  // Optimize feed formulation
  const feedPlan = [];
  let totalCost = 0;
  let totalDM = 0;

  ingredients.forEach(feed => {
    // Ensure feed data is valid
    if (!feed.cp || !feed.energy) {
      console.warn(`Skipping feed ${feed.name}: Missing protein or energy values.`);
      return;
    }

    // Inclusion rate based on protein as the limiting factor
    const inclusionRate = (totalProtein / feed.cp) * multiplier;
    const dmInclusion = (inclusionRate * feed.dm) / 100; // Calculate DM inclusion
    totalDM += dmInclusion;

    const costPerKg = 10; // Placeholder cost, replace with actual feed prices
    const cost = inclusionRate * costPerKg;

    feedPlan.push({
      name: feed.name,
      amount: inclusionRate,
      dm: dmInclusion,
      cost: cost,
    });
    totalCost += cost;
  });

  // Check DM limit and scale inclusion rates if needed
  if (totalDM > maxDMPerDay * multiplier) {
    const scalingFactor = (maxDMPerDay * multiplier) / totalDM;
    totalDM = 0;
    totalCost = 0;

    feedPlan.forEach(feed => {
      feed.amount *= scalingFactor;
      feed.dm *= scalingFactor;
      feed.cost *= scalingFactor;
      totalDM += feed.dm;
      totalCost += feed.cost;
    });
  }

  // Display results
  if (feedPlan.length === 0) {
    alert("No valid feed formulation found.");
    return;
  }

  document.getElementById("results").classList.remove("hidden");
  document.getElementById("totalCost").innerText = `Total Cost: $${totalCost.toFixed(2)} (${selectedTimeFrame})`;

  const feedPlanList = document.getElementById("feedPlan");
  feedPlanList.innerHTML = "";
  feedPlan.forEach(feed => {
    const listItem = document.createElement("li");
    listItem.textContent = `${feed.name}: ${feed.amount.toFixed(2)} kg (${feed.dm.toFixed(2)} kg DM, $${feed.cost.toFixed(2)})`;
    feedPlanList.appendChild(listItem);
  });
});
