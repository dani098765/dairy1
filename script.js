// Store ingredients data and formulations in localStorage (simulate database)
let ingredients = [
    { id: 1, name: "Corn", protein: 9, fat: 4, fiber: 2, cost: 0.2 },
    { id: 2, name: "Soybean Meal", protein: 44, fat: 1, fiber: 5, cost: 0.5 },
    { id: 3, name: "Wheat Bran", protein: 16, fat: 2, fiber: 12, cost: 0.3 },
    { id: 4, name: "Alfalfa", protein: 18, fat: 1, fiber: 30, cost: 0.4 }
];

let selectedIngredients = []; // Selected ingredients for formulation
let currentUser = null; // Simulate logged-in user

// Simulate login and register
function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    // Store registration data in localStorage
    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Registered successfully!');
    showLogin();
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === username && user.password === password) {
        currentUser = user;
        alert('Logged in successfully!');
        showFeedFormulation();
    } else {
        alert('Invalid credentials');
    }
}

// Show the feed formulation section
function showFeedFormulation() {
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('feed-formulation').style.display = 'block';
    loadIngredients();
}

// Show login section
function showLogin() {
    document.getElementById('auth-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('feed-formulation').style.display = 'none';
}

// Load ingredient list into the dropdown
function loadIngredients() {
    const select = document.getElementById('ingredient-select');
    ingredients.forEach(ingredient => {
        const option = document.createElement('option');
        option.value = ingredient.id;
        option.textContent = ingredient.name;
        select.appendChild(option);
    });
}

// Add selected ingredient to the formulation list
function addIngredient() {
    const ingredientId = parseInt(document.getElementById('ingredient-select').value);
    const quantity = parseFloat(document.getElementById('quantity').value);
    
    const ingredient = ingredients.find(ing => ing.id === ingredientId);
    selectedIngredients.push({ ...ingredient, quantity });
    displaySelectedIngredients();
}

// Display selected ingredients
function displaySelectedIngredients() {
    const list = document.getElementById('ingredients-list');
    list.innerHTML = ''; // Clear current list

    selectedIngredients.forEach(ingredient => {
        const item = document.createElement('div');
        item.textContent = `${ingredient.name} - ${ingredient.quantity} kg`;
        list.appendChild(item);
    });
}

// Function to calculate the optimal feed formulation using Linear Programming
function calculateFormulation() {
    // Example target protein value
    const targetProtein = parseFloat(prompt("Enter the target protein content"));

    // Define linear programming model
    const model = {
        name: "Feed Formulation",
        objectives: {
            minimize: selectedIngredients.reduce((acc, ingredient, index) => {
                acc[`ingredient_${index}`] = ingredient.cost;
                return acc;
            }, {})
        },
        constraints: {
            protein: {
                '>=': targetProtein
            }
        },
        variables: selectedIngredients.reduce((acc, ingredient, index) => {
            acc[`ingredient_${index}`] = {
                cost: ingredient.cost,
                protein: ingredient.protein,
                fat: ingredient.fat,
                fiber: ingredient.fiber
            };
            return acc;
        }, {})
    };

    const solver = new glpk.LP();
    solver.model(model);
    solver.solve();

    // Display result (minimized cost and ingredient quantities)
    const result = solver.getSolution();
    displayOptimizationResult(result);
}

// Display optimization result
function displayOptimizationResult(result) {
    let resultText = 'Optimized Feed Formulation:\n';
    selectedIngredients.forEach((ingredient, index) => {
        resultText += `${ingredient.name}: ${result[`ingredient_${index}`]} kg\n`;
    });
    document.getElementById('result').textContent = resultText;
}
