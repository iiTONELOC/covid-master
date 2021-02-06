
//ROOT
//DROP JQUERY LINK

// COSMIDIC
var queryString = document.location.search;
var dataTypes = queryString.split("=");
var mealType = dataTypes[1];
var drinkType = dataTypes[2];
var genreId = dataTypes[3];
console.log(dataTypes);
// DATA = []

// WE MAY NEED THREE DATA SET

// MEMORY

// VAR MEMORYSET = FUNCTION
// VAR MEMORYGET = FUNCTION

// GLOBAL VAR 
//global movie id variable 


// MOMENT 
// API CALLS 
// var function api dinner !current set up just to run a random meal!
var meal = function () {
   var apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
   fetch(apiUrl).then(function (response) {
      response.json().then(function (data) {
         console.log(data);

         var mealId = data.meals[0].idMeal;
         var apiUrl2 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId
         fetch(apiUrl2).then(function (response2) {
            response2.json().then(function (data2) {
               console.log(data2);
            })
         })
      })
   })
};
// var function api call drink !current set up just to run a random meal!
var drink = function () {
   var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
   fetch(apiUrl).then(function (response) {
      response.json().then(function (data) {
         console.log(data);
      })
   })
};
// var function api call movies ! need to change the current values in html to match the ids needed for the api call
var movie = function () {
   fetch("https://api.themoviedb.org/3/discover/movie?api_key=9c93d665dc21728a97fdea54289e90ee&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres="+ genreId + "")
      .then(function (movieResponse) {
         if (response.ok) {
            return movieResponse.json();
         }
         else {
            return;
         }

      })
      .then(function (movieData) {
         console.log("Movie data: "+movieData);
      })
}

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