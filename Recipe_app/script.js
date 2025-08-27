const inputBox = document.getElementById('search-bar')
const searchBtn = document.getElementById('search-btn')
const recipesList = document.getElementById('recipes-list')
const subtitle = document.querySelector('.sub-title')
const recipeDetails = document.querySelector('.recipe-details')
const recipeDetailsContent = document.querySelector('.recipe-details-content')
const recipeCloseBtn = document.querySelector('.recipe-close-btn')

let mealsArr = []

// Function to fetch recipes...
const fetchRecipes = async () => {
  const inputText = inputBox.value.trim();
  subtitle.innerHTML = "Fetching recipes..."
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
  const fetchData = await fetch(url)
  try {
    const res = await fetchData.json();
    console.log(res);
    mealsArr = res.meals
    //  console.log(mealsArr);
    extractRecipes(mealsArr)
  } catch (error) {
    console.log(error);
  }

}

// function to extract recieps
const extractRecipes = (mealsArr) => {
  subtitle.style.display = "none"
  recipesList.innerHTML = ""
  mealsArr.forEach(meals => {
    const recipeDiv = document.createElement('div')
    recipeDiv.classList.add('recipes-container')
    recipeDiv.innerHTML = `
   <img src="${meals.strMealThumb}" />
   <h3>${meals.strMeal}</h3>
   <p><span>${meals.strArea}</span> Dish</p>
   <p>Belongs to <span>${meals.strCategory}</span> Category</p>
   `
    const recipeBtn = document.createElement('button')
    recipeBtn.textContent = "View Recipe"
    recipeDiv.appendChild(recipeBtn)

    recipeBtn.addEventListener('click', () => {
        openRecipeDetails(meals)
      })
      recipesList.appendChild(recipeDiv)
  });

}

// function to fetch ingredients
function fetchIngredients(meals) {
  let ingredientList = "";
  let i;
  for(i=1; i<=20; i++) {
      const ingredient = meals[`strIngredient${i}`]
      if (ingredient) {
        const measure = meals[`strMeasure${i}`]
        ingredientList += `<li> ${measure} ${ingredient} </li>`
      }
      else {
           break;
      }
  }
  return ingredientList;
}

function openRecipeDetails(meals) {
  recipeDetails.style.display = "block"
  console.log(meals);
  recipeDetailsContent.innerHTML = `
  <h2>${meals.strMeal}</h2>
  <h3>Ingredients:</h3>
  <ul class="ingredients-list">${fetchIngredients(meals)}</ul>
  <div class="recipe-instructions">
  <h3>Instructions:</h3>
  <p>${meals.strInstructions}</p>
  </div>
  `
}

// add recipeCloseBtn to close openRecipeDetails function
recipeCloseBtn.addEventListener('click', ()=> {
  recipeDetails.style.display = "none"
})

searchBtn.addEventListener('click', fetchRecipes)