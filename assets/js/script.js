
var queryString = document.location.search;
var dataTypes = queryString.split("=");
var mealType = dataTypes[1];
var drinkType = dataTypes[2];
var genreId = dataTypes[3];
console.log(dataTypes);
var drinkBoxEl = document.getElementById("drink-box")
//VARIABLEs FOR SAVED PLANS
var savedPlanEl = document.getElementById("saved-plans")
//date
var currentDate = moment().format('LLLL');
// WE MAY NEED THREE DATA SET

// MEMORY
var storageArray = [];

// VAR MEMORYSET = FUNCTION
var save = function () {
   localStorage.setItem("savedPlan", JSON.stringify(storageArray));
}
// VAR MEMORYGET = FUNCTION
var loadMemory = function () {
   var memory = JSON.parse(localStorage.getItem("savedPlan"));

   if (memory != null) {

      for (let i = 0; i < memory.length; i++) {
         storageArray.push(memory[i])
         //creates the div
         var newEntry = document.createElement('div');
         newEntry.setAttribute("class", 'cell large-6 small-12 plan-item')
         //passes the id's needed for the api as data-* attributes
         newEntry.setAttribute('data-drink', memory[i][3])
         newEntry.setAttribute('data-movie', memory[i][4]);
         //creates the link element
         var aE1 = document.createElement('a')
         aE1.setAttribute('href', "")
         aE1.textContent = '[food name]' + "+" + memory[i][1] + "+" + memory[i][2]
         //since the whole div is clickable due to its dynamically created, we will ensure we capture the ids needed 
         aE1.setAttribute('data-drink', memory[i][3])
         aE1.setAttribute('data-movie', memory[i][4]);

         //creates the span inside the link
         var span = document.createElement('span')
         span.setAttribute('class', 'float-right')
         //create the icon inside the span
         var icon = document.createElement('i')
         icon.setAttribute('class', 'fas fa-plus')
         span.appendChild(icon);
         //append the span to the link
         aE1.appendChild(span);
         //append link to the div
         newEntry.appendChild(aE1);
         //append div to page
         savedPlanEl.appendChild(newEntry);
      }
      console.log(storageArray);
   }
}

// GLOBAL VAR 
var movieID = "";
var drinkID = "";
var foodName = "";
var drinkName = "";
var movieName = "";
var newSave = [];
//VARS for RELOAD
var movieHistoryID="";

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
   fetch(apiUrl)
      .then(function (response) {
         return response.json();
      })
      .then(function (data) {
         console.log(data);
         var ingredients = [
            data.drinks[0].strIngredient1,
            data.drinks[0].strIngredient2,
            data.drinks[0].strIngredient3,
            data.drinks[0].strIngredient4,
            data.drinks[0].strIngredient5,
            data.drinks[0].strIngredient6,
            data.drinks[0].strIngredient7,
            data.drinks[0].strIngredient8,
            data.drinks[0].strIngredient9,
            data.drinks[0].strIngredient10,
            data.drinks[0].strIngredient11,
            data.drinks[0].strIngredient12,
            data.drinks[0].strIngredient13,
            data.drinks[0].strIngredient14,
            data.drinks[0].strIngredient15,
         ]
         var measure = [
            data.drinks[0].strMeasure1,
            data.drinks[0].strMeasure2,
            data.drinks[0].strMeasure3,
            data.drinks[0].strMeasure4,
            data.drinks[0].strMeasure5,
            data.drinks[0].strMeasure6,
            data.drinks[0].strMeasure7,
            data.drinks[0].strMeasure8,
            data.drinks[0].strMeasure9,
            data.drinks[0].strMeasure10,
            data.drinks[0].strMeasure11,
            data.drinks[0].strMeasure12,
            data.drinks[0].strMeasure13,
            data.drinks[0].strMeasure14,
            data.drinks[0].strMeasure15,
         ]
         //add title of drink to page
         document.getElementById("drink-title").innerHTML = data.drinks[0].strDrink
         //add image to page and set alt attribute
         document.getElementById('drink-img').setAttribute("src", data.drinks[0].strDrinkThumb)
         document.getElementById('drink-img').setAttribute("alt", "Picture of a " + data.drinks[0].strDrink)
         // stores the drink id
         drinkID = data.drinks[0].idDrink
         console.log("this is the drinkID: " + drinkID)
         var drinkList = document.createElement("ul");
         drinkBoxEl.appendChild(drinkList)
         var instructions = document.createElement('p')
         instructions.textContent = data.drinks[0].strInstructions
         document.getElementById("drink-box").appendChild(instructions);
         for (var i = 0; i < measure.length; i++) {
            console.log($(this));
            if (measure[i] === null || measure[i] === "") {
               return;
            }
            else {
               var drinkM = document.createElement("li")
               drinkM.innerHTML = measure[i] + "-" + ingredients[i];
               drinkList.appendChild(drinkM);
            }
         }
      })
};
drink();
// var function api call movies ! need to change the current values in html to match the ids needed for the api call
var movie = function () {
   console.log(genreId);
   fetch("https://api.themoviedb.org/3/discover/movie?api_key=9c93d665dc21728a97fdea54289e90ee&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=" + genreId + "")
      .then(function (movieResponse) {
         if (movieResponse.ok) {
            return movieResponse.json();
         }
         else {
            return;
         }

      })
      .then(function (movieData) {
         console.log(movieData);
         // random result from list of results
         var randomNum = Math.floor(Math.random() * 20);
         console.log("selected randoStyle is: " + randomNum);
         //dynamically create the elements and append to page
         //create title 
         var title = document.createElement('h3')
         title.setAttribute('id', 'movie-title')
         title.textContent = movieData.results[randomNum].original_title
         document.getElementById('movie-box').appendChild(title)
         //create movie cover
         var cover = document.createElement('img')
         cover.setAttribute('src', "https://image.tmdb.org/t/p/w500/" + movieData.results[randomNum].poster_path + "")
         cover.setAttribute('value', movieData.results[randomNum].id)
         cover.setAttribute('alt',"Movie poster for "+movieData.results[randomNum].original_title)
         document.getElementById('movie-box').appendChild(cover)
         //create overview
         var summary = document.createElement('p')
         summary.textContent = movieData.results[randomNum].overview
         document.getElementById('movie-box').appendChild(summary)
         // creates the variable for the movieID so we call recall out of storage
         movieID = movieData.results[randomNum].id
         console.log("this is the movieID: " + movieID)
      })
}
movie();

//save function
var savePlan = function () {
   console.log("You clicked save")


   //push items to array for storage
   //check for DUPES
   var duplicate = false;
   for (let i = 0; i < newSave.length; i++) {
      const element = newSave[i];
      if (element === drinkName || element === movieName || element === foodName) {
         duplicate = true;
      }
   }
   if (!duplicate) {
      //creates the div
      var newEntry = document.createElement('div');
      newEntry.setAttribute("class", 'cell large-6 small-12 plan-item');
      //creates the link element
      var aE1 = document.createElement('a')
      aE1.setAttribute('href', "")
      aE1.textContent = '[food name]' + "+" + document.getElementById("drink-title").textContent + "+" + document.getElementById('movie-title').textContent
      //creates the span inside the link
      var span = document.createElement('span')
      span.setAttribute('class', 'float-right')
      //create the icon inside the span
      var icon = document.createElement('i')
      icon.setAttribute('class', 'fas fa-plus')
      span.appendChild(icon);
      //append the span to the link
      aE1.appendChild(span);
      //append link to the div
      newEntry.appendChild(aE1);
      //append div to page
      savedPlanEl.appendChild(newEntry);
      //set variables for storage
      drinkName = document.getElementById("drink-title").textContent
      movieName = document.getElementById('movie-title').textContent
      newSave.push(currentDate, drinkName, movieName, drinkID, movieID)
      console.log(newSave)
      storageArray.push(newSave)
      save();
   }
}
//second movie api call to fetch movie by title
var movieHistory = function () {
   console.log(movieHistoryID)

   fetch("https://api.themoviedb.org/3/movie/"+movieHistoryID+"?api_key=9c93d665dc21728a97fdea54289e90ee&language=en-US")
      .then(function (historyResponse) {
         if (historyResponse.ok) {
            return historyResponse.json();
         }
         else {
            return;
         }

      })
      .then(function (historyData){
         console.log(historyData)
         //clear out the div 
         document.getElementById('movie-box').textContent="";
         //dynamically create the elements and append to page
         //create title 
         var title = document.createElement('h3')
         title.setAttribute('id', 'movie-title')
         title.textContent =historyData.original_title
         document.getElementById('movie-box').appendChild(title)
         //create movie cover
         var cover = document.createElement('img')
         cover.setAttribute('src', "https://image.tmdb.org/t/p/w500/" + historyData.poster_path + "")
         cover.setAttribute('value', historyData.id)
         cover.setAttribute('alt', "Move poster for "+historyData.original_title)
         document.getElementById('movie-box').appendChild(cover)
         //create overview
         var summary = document.createElement('p')
         summary.textContent = historyData.overview
         document.getElementById('movie-box').appendChild(summary)

      })   
}


//reFetch
var reFetch = function (event) {
   event.preventDefault()
   console.log(event.target)
   movieHistoryID=event.target.getAttribute('data-movie')
   //call the api
   movieHistory();

}
loadMemory();
//event listener for the savedPlan click
document.getElementById('saved-plans').addEventListener("click", reFetch)
//event listener for the save plan
document.getElementById('save-plan-btn').addEventListener("click", savePlan)

//IF WE REFRESH THE PAGE IT WILL RELOAD THE RESULTS WE COULD USE THIS AS A 'MIX AGAIN'