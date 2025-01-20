// Define ingredients with nutritional information (this can be dynamic or fetched from a server)
const ingredients = [
    { name: "Corn", protein: 9, fat: 4, carbohydrates: 73, price: 0.2 },
    { name: "Soybean Meal", protein: 44, fat: 1, carbohydrates: 34, price: 0.5 },
    { name: "Wheat Bran", protein: 16, fat: 2, carbohydrates: 65, price: 0.3 },
    { name: "Alfalfa", protein: 18, fat: 1, carbohydrates: 40, price: 0.4 }
];

// Load ingredients into the select dropdown
window.onload = () => {
    const selectElement = document.getElementById("ingredient-select");
    ingredients.forEach(ingredient => {
        const option = document.createElement("option");
        option.value = ingredient.name;
        option.textContent = ingredient.name;
        selectElement.appendChild(option);
    });
};

let selectedIngredients = [];  // Store selected ingredients

// Add ingredient to the list
function addIngredient() {
    const ingredientName = document.getElementById("ingredient-select").value;
    const quantity = parseFloat(document.getElementById("quantity").value);
    
    const ingredient = ingredients.find(ing => ing.name === ingredientName);
    const ingredientData = { ...ingredient, quantity };

    selectedIngredients.push(ingredientData);

    displaySelectedIngredients();
}

// Display selected ingredients in the list
function displaySelectedIngredients() {
    const selectedIngredientsList = document.getElementById("selected-ingredients-list");
    selectedIngredientsList.innerHTML = '';

    selectedIngredients.forEach(ingredient => {
        const listItem = document.createElement("li");
        listItem.textContent = `${ingredient.name} - ${ingredient.quantity} kg`;
        selectedIngredientsList.appendChild(listItem);
    });
}

// Calculate the feed's nutritional values
function calculateFeed() {
    let totalProtein = 0;
    let totalFat = 0;
    let totalCarbs = 0;
    let totalPrice = 0;

    selectedIngredients.forEach(ingredient => {
        totalProtein += ingredient.protein * ingredient.quantity / 100;
        totalFat += ingredient.fat * ingredient.quantity / 100;
        totalCarbs += ingredient.carbohydrates * ingredient.quantity / 100;
        totalPrice += ingredient.price * ingredient.quantity;
    });

    // Display result
    const result = document.getElementById("result");
    result.innerHTML = `
        <h3>Feed Nutritional Summary:</h3>
        <p>Protein: ${totalProtein.toFixed(2)} g</p>
        <p>Fat: ${totalFat.toFixed(2)} g</p>
        <p>Carbohydrates: ${totalCarbs.toFixed(2)} g</p>
        <p>Total Cost: $${totalPrice.toFixed(2)}</p>
    `;
    result.classList.remove("hidden");
}
