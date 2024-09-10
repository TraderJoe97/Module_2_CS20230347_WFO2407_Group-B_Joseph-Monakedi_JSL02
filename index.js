const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// Function to add new fitness goals and remove completed ones
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim();
    const goalList = document.querySelector('#goalList');
    
    //Check for duplicates
    // Use 'goalList' to get all existing goals and check if 'goalInput' matches any of them.
    let isDuplicate = false;
    const existingGoals = goalList.querySelectorAll('li') //gets all Existing goals.
    existingGoals.forEach(goal => {
        if (goalInput.toLowerCase() === goal.textContent.toLowerCase()) {
            isDuplicate = true;
            return; // Exit loop if duplicate is found.
        }
    });

    // Prevent duplicates
    // If a duplicate is found, display an alert to the user and don't add the goal to the list.
    // If it's not a duplicate, proceed with adding it as a new goal.
    if (isDuplicate) {
        alert("Goal already exists!");
    } else {
        const newGoal = document.createElement('li');
        newGoal.textContent = goalInput;
        goalList.appendChild(newGoal);
    }
       
    
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault();

    // Extract meal data from form inputs
    const mealPlanForm = document.getElementById("mealPlanForm");
    const mondayMeal = mealPlanForm.querySelector('[placeholder="Monday\'s Meal"]').value;
    const tuesdayMeal = mealPlanForm.querySelector('[placeholder="Tuesday\'s Meal"]').value;
    const wednesdayMeal = mealPlanForm.querySelector('[placeholder="Wednesday\'s Meal"]').value;
    const thursdayMeal = mealPlanForm.querySelector('[placeholder="Thursday\'s Meal"]').value;
    const fridayMeal = mealPlanForm.querySelector('[placeholder="Friday\'s Meal"]').value;
    const saturdayMeal = mealPlanForm.querySelector('[placeholder="Saturday\'s Meal"]').value;
    const sundayMeal = mealPlanForm.querySelector('[placeholder="Sunday\'s Meal"]').value;

    console.log("Extracted meal data:", mondayMeal, tuesdayMeal, wednesdayMeal, thursdayMeal, fridayMeal, saturdayMeal, sundayMeal);

    // Create a meal plan object
    const mealPlan = {
        monday: mondayMeal,
        tuesday: tuesdayMeal,
        wednesday: wednesdayMeal,
        thursday: thursdayMeal,
        friday: fridayMeal,
        saturday: saturdayMeal,
        sunday: sundayMeal
    };

    console.log("Created meal plan object:", mealPlan);

    // Check for duplicate meals
    const mealValues = Object.values(mealPlan).map(meal => meal.toLowerCase());
    const uniqueMeals = new Set(mealValues); /* sets do not contain duplicates */

    console.log("Meal values:", mealValues);
    console.log("Unique meals:", uniqueMeals);

    if (mealValues.length !== uniqueMeals.size) {
        console.log("Duplicate meals found.");
        alert('You have entered duplicate meals. Please ensure that each meal is unique.');
        return;
    }

    console.log("No duplicate meals found.");

    // Display a success message
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
