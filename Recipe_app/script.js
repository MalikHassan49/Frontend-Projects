const inputBox = document.getElementById('search-bar')
const searchBtn = document.getElementById('search-btn')
const recipesList = document.getElementById('recipes-list')
const subtitle = document.querySelector('.sub-title')
const recipeDetails = document.querySelector('.recipe-details')

// Function to fetch recipes...
const fetchRecipes = async ()=> {
   const inputText = inputBox.value.trim();
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
   const fetchData = await fetch(url)
   try {
     const res = await fetchData.json();
     console.log(res);    
     const mealsArr = res.meals
     console.log(mealsArr);
     extractRecipes(mealsArr)
   } catch (error) {
    console.log(error);
   }
}

// function to extract recieps
const extractRecipes = (mealsArr)=> {
  subtitle.style.display = "none"
   mealsArr.forEach(meals => {
   recipesList.innerHTML += `
   <div class="recipes-container">
   <img src="${meals.strMealThumb}" />
   <h3>${meals.strMeal}</h3>
   <p><span>${meals.strArea}</span> Dish</p>
   <p>Belongs to <span>${meals.strCategory}</span> Category</p>
   <button class="recipeBtn">View Recipe</button>
   </div>
   `
   });
 const recipeBtn = document.querySelectorAll('recipeBtn')
 
recipeBtn.addEventListener('click', openRecipeDetails)
}

const openRecipeDetails = ()=> {

}

searchBtn.addEventListener('click', fetchRecipes)