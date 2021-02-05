
//ROOT
//DROP JQUERY LINK

// COSMIDIC

// DATA = []

   // WE MAY NEED THREE DATA SET

// MEMORY

   // VAR MEMORYSET = FUNCTION
   // VAR MEMORYGET = FUNCTION

// GLOBAL VAR 

   // MOMENT 
   // API CALLS 
         // var function api dinner !current set up just to run a random meal!
var meal = function() {
   var apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
   fetch(apiUrl).then(function(response){
      response.json().then(function(data){
         console.log(data);
                  
         var mealId = data.meals[0].idMeal;
         var apiUrl2 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId
         fetch(apiUrl2).then(function(response2){
            response2.json().then(function(data2) {
               console.log(data2);
            })
         })     
      })
   })
};
         // var function api call drink !current set up just to run a random meal!
var drink = function() {
   var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
   fetch(apiUrl).then(function(response){
      response.json().then(function(data){
         console.log(data);
      })
   })
};
         // var function api call movies 
   
// GLOBAL FUNCTIONS
   //DYNAMIC ADD ELEMENTS FOR THREE COLUM DATE: MEAL, DRINK, MOVIE 
      // VAR 
      // FUNCTION MEAL FUNCTION
      // FUNCTION DRINK FUNCTION
         // FOR LOOP AND RENDERING THE DATA
      // MOVIE FUNCTION

// API FETCH MEAL 
// API FETCH DRINKS
// API FETCH MEALS

// Functions to record choice from dropdown options
   //meal
var mealChoice = function() {
   var mealType = $("#cuisine-type").val()
   console.log(mealType);
};
   //drink currently all select options have same id so its not working properly
var drinkChoice = function() {
   var drinkType = $("#cuisine-type").val()
   console.log(drinkType);
};


// EVENT LISTNERS
   // FOR MEAL 
$("#add-food-btn").on("click", mealChoice);
   // FOR DRINK
$("#add-drink-btn").on("click", drinkChoice);
   // FOR Movie
