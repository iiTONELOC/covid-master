
var queryString = document.location.search;
var dataTypes = queryString.split("=");
var mealType = dataTypes[1];
var drinkType = dataTypes[2];
var genreId = dataTypes[3];
console.log(dataTypes);
var drinkBoxEl = $("#drink-box")
var mealBoxE1 = $("#meal-box")
//VARIABLEs FOR SAVED PLANS
var savedPlanEl = $("#saved-plans")
//date
var currentDate = moment().format(' Do [of] MMMM ');
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
         newEntry.attr("class", 'cell large-6 small-12 plan-item saved-div')
         //passes the id's needed for the api as data-* attributes
         newEntry.attr('data-drink', memory[i][6])
         newEntry.attr('data-movie', memory[i][4]);
         newEntry.attr('data-meal', memory[i][3]);
         //newEntry.attr('data-meal', memory[i][4]);
         //creates the link element
         var aE1 = document.createElement('a')
         aE1.attr('href', "")
         aE1.textContent = " Wow! " + "On the " + memory[i][0] + " I wasn't Bored in the House after all! " + " I Enjoyed a " + memory[i][5] + ", with a " + memory[i][1] + ", while watching " + memory[i][2]
         //since the whole div is clickable due to its dynamically created, we will ensure we capture the ids needed 
         aE1.attr('data-drink', memory[i][6])
         aE1.attr('data-movie', memory[i][4]);
         aE1.attr('data-meal', memory[i][3]);

         //creates the span inside the link
         var span = document.createElement('span')
         span.attr('class', 'float-right')

         //create the icon inside the span
         var icon = document.createElement('i')
         icon.attr('class', 'fas fa-plus')
         icon.attr('data-drink', memory[i][6])
         icon.attr('data-movie', memory[i][4]);
         icon.attr('data-meal', memory[i][3]);
         span.append(icon);
         //append the span to the link
         aE1.append(span);
         //append link to the div
         newEntry.append(aE1);
         //append div to page
         savedPlanEl.append(newEntry);
      }
      console.log(storageArray);
   }
}

// GLOBAL VAR 
var movieID = "";
var dID = "";
var bevID = "";
var foodName = "";
var drinkName = "";
var movieName = "";
var newSave = [];
//VARS for RELOAD
var movieHistoryID = "";
var mealHistoryID = "";
var drinkHistoryID = "";


// RENDER FUNCTION EASIER TO READ DYNAMIC ELEMENT> 
var renderMeal = function (data, data2) {
   var mealTitle = $('<h3>')
   mealTitle.attr("class", "results-title")
   mealTitle.attr("id", "meal-title")
   mealTitle.text(data2.meals[0].strMeal);
   var mealImage = $('<img>')
   mealImage.attr("src", data2.meals[0].strMealThumb)
   mealImage.attr("alt", "Picture of a " + data2.meals[0].strMeal)
   //APPEND CHILD ON FIRST PAGE
   mealBoxE1.append(mealTitle,)
   mealBoxE1.append(mealImage)
   console.log(data2);
   //check for link
   if (data2.meals[0].strSource) {
      var recipe = $("<a>")
      recipe.attr("href", data2.meals[0].strSource);
      recipe.attr("target", "_blank")
      recipe.textContent = "Check out the recipe!";
      mealBoxE1.append(recipe)
   }
   //ARRAY COULD BE CONDENCES DO TO THE NATURE OF API DESIGN. 
   var ingredients = [
      data2.meals[0].strIngredient1,
      data2.meals[0].strIngredient2,
      data2.meals[0].strIngredient3,
      data2.meals[0].strIngredient4,
      data2.meals[0].strIngredient5,
      data2.meals[0].strIngredient6,
      data2.meals[0].strIngredient7,
      data2.meals[0].strIngredient8,
      data2.meals[0].strIngredient9,
      data2.meals[0].strIngredient10,
      data2.meals[0].strIngredient11,
      data2.meals[0].strIngredient12,
      data2.meals[0].strIngredient13,
      data2.meals[0].strIngredient14,
      data2.meals[0].strIngredient15,
      data2.meals[0].strIngredient16,
      data2.meals[0].strIngredient17,
      data2.meals[0].strIngredient18,
      data2.meals[0].strIngredient19,
      data2.meals[0].strIngredient20,
   ]
   var measure = [
      data2.meals[0].strMeasure1,
      data2.meals[0].strMeasure2,
      data2.meals[0].strMeasure3,
      data2.meals[0].strMeasure4,
      data2.meals[0].strMeasure5,
      data2.meals[0].strMeasure6,
      data2.meals[0].strMeasure7,
      data2.meals[0].strMeasure8,
      data2.meals[0].strMeasure9,
      data2.meals[0].strMeasure10,
      data2.meals[0].strMeasure11,
      data2.meals[0].strMeasure12,
      data2.meals[0].strMeasure13,
      data2.meals[0].strMeasure14,
      data2.meals[0].strMeasure15,
      data2.meals[0].strMeasure16,
      data2.meals[0].strMeasure17,
      data2.meals[0].strMeasure18,
      data2.meals[0].strMeasure19,
      data2.meals[0].strMeasure20,
   ]

   // stores the meal id
   mealID = data.meals[0].idMeal
   console.log("this is the mealId: " + mealId)
   //creates ingredients header
   var ingredientsHeader = $("<h3>")
   ingredientsHeader.attr("class", "results-title")
   ingredientsHeader.textContent = "Ingredients"
   //append to page
   mealBoxE1.append(ingredientsHeader)
   var mealList = document.$("<ul");
   mealBoxE1.append(mealList)
   //creates instructions header
   var instructionsHeader = document.$("h3")
   instructionsHeader.attr("class", "results-title")
   instructionsHeader.textContent = "Instructions"
   //append to page
   mealBoxE1.append(instructionsHeader)
   var instructions = $('<p>')
   instructions.attr('class', "text");
   instructions.textContent = data2.meals[0].strInstructions
   console.log(instructions);
   mealBoxE1.append(instructions);
   dID = mealId;
   console.log("this is the dID: " + dID)
   for (var i = 0; i < measure.length; i++) {
      //console.log($(this));
      if (measure[i] === null || measure[i] === "" || measure[i] === " ") {
         return;
      }
      else {
         var mealStuff = document.createElement("li")
         mealStuff.textContent = measure[i] + "-" + ingredients[i];
         mealList.append(mealStuff);
      }
   }
}


// API CALLS 
// var function api dinner !current set up just to run a random meal!
var meal = function () {
   if (mealType === "random") {
      apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
   }
   else {
      apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + mealType;
   }
   fetch(apiUrl).then(function (response) {
      response.json().then(function (data) {
         var randomNum = ""
         var ranNumFunc = function () {
            randomNum = Math.floor(Math.random() * 34);
            if (data.meals[randomNum] === undefined) {
               ranNumFunc();
            }
         };
         ranNumFunc();
         var mealId = data.meals[randomNum].idMeal;
         console.log(data);

         var apiUrl2 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId
         fetch(apiUrl2).then(function (response2) {
            response2.json().then(function (data2) {

               //creates the h3 element for the meal-title  // seperate function 
               renderMeal(data, data2)

               //Currently Youtube is commented out because of an issue
               //if (data2.meals[0].strYoutube) {
               //var video = document.createElement("iframe")
               //video.attr("src", data2.meals[0].strYoutube);
               //document.getElementById("meal-box").appendChild(video);
               //}
            })
         })
      })
   })
};
meal();

// var function api call drink !current set up just to run a random meal!
var drink = function () {
   if (drinkType === "random") {
      apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
   }
   else {
      apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkType;
   }
   fetch(apiUrl)
      .then(function (response) {
         return response.json();
      })
      .then(function (data) {

         var randomNum = ""
         var ranNumFunc = function () {
            randomNum = Math.floor(Math.random() * 34);
            if (data.drinks[randomNum] === undefined) {
               ranNumFunc();
            }
         };
         ranNumFunc();
         var drinkId = data.drinks[randomNum].idDrink;


         var apiUrl2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId
         fetch(apiUrl2).then(function (response2) {
            response2.json().then(function (data) {
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
               var drinkTitle = document.createElement("h3")
               drinkTitle.textContent = data.drinks[0].strDrink
               drinkTitle.setAttribute("class", "results-title")
               drinkTitle.setAttribute("id", "drink-title")

               //append title
               drinkBoxEl.appendChild(drinkTitle)

               //add image to page and set alt attribute
               var drinkImg = document.createElement("img")
               drinkImg.setAttribute("src", data.drinks[0].strDrinkThumb)
               drinkImg.setAttribute("alt", "Picture of a " + data.drinks[0].strDrink)

               //append image
               drinkBoxEl.appendChild(drinkImg)


               // stores the drink id
               drinkID = data.drinks[0].idDrink
               bevID = drinkId
               console.log("this is the drinkID: " + drinkID)
               //ingredientsHeader
               var ingredientsHeader = document.createElement("h3")
               ingredientsHeader.setAttribute("class", "results-title")
               ingredientsHeader.textContent = "Ingredients"
               //append to page
               drinkBoxEl.appendChild(ingredientsHeader)
               var drinkList = document.createElement("ul");
               drinkBoxEl.appendChild(drinkList)
               //creates instructions header
               var instructionsHeader = document.createElement("h3")
               instructionsHeader.setAttribute("class", "results-title")
               instructionsHeader.textContent = "Instructions"
               //append to page
               drinkBoxEl.appendChild(instructionsHeader)

               var instructions = document.createElement('p')
               instructions.setAttribute("class", "text")
               instructions.textContent = data.drinks[0].strInstructions
               drinkBoxEl.appendChild(instructions);
               for (var i = 0; i < measure.length; i++) {
                  //console.log($(this));
                  if (measure[i] === null || measure[i] === "") {
                     return;
                  }
                  else {
                     var drinkM = document.createElement("li")
                     drinkM.textContent = measure[i] + "-" + ingredients[i];
                     drinkList.appendChild(drinkM);
                  }
               }
            })
         })
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
         title.setAttribute('class', 'results-title')
         title.setAttribute('id', "movie-title")
         title.textContent = movieData.results[randomNum].original_title
         document.getElementById('movie-box').appendChild(title)
         //create movie cover
         var cover = document.createElement('img')
         cover.setAttribute('src', "https://image.tmdb.org/t/p/w500/" + movieData.results[randomNum].poster_path + "")
         cover.setAttribute('value', movieData.results[randomNum].id)
         cover.setAttribute('alt', "Movie poster for " + movieData.results[randomNum].original_title)
         document.getElementById('movie-box').appendChild(cover)
         //create overview title
         var summaryTitle = document.createElement('h3')
         summaryTitle.setAttribute("class", "results-title")
         summaryTitle.textContent = "What's it about?"
         document.getElementById('movie-box').appendChild(summaryTitle)
         //create overview
         var summary = document.createElement('p')
         summary.setAttribute("class", 'text')
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
      newEntry.setAttribute("class", 'cell large-6 small-12 plan-item saved-div');
      //creates the link element
      var aE1 = document.createElement('a')
      aE1.setAttribute('href', "")
      aE1.textContent = "Enjoying a " + document.getElementById("meal-title").textContent + ", with a " + document.getElementById("drink-title").textContent + ", while watching " + document.getElementById('movie-title').textContent
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
      foodName = document.getElementById("meal-title").textContent
      drinkName = document.getElementById("drink-title").textContent
      movieName = document.getElementById('movie-title').textContent
      newSave.push(currentDate, drinkName, movieName, dID, movieID, foodName, bevID)
      console.log(newSave)
      storageArray.push(newSave)
      save();
   }
}
//second movie api call to fetch movie by title
var movieHistory = function () {
   console.log(movieHistoryID)

   fetch("https://api.themoviedb.org/3/movie/" + movieHistoryID + "?api_key=9c93d665dc21728a97fdea54289e90ee&language=en-US")
      .then(function (historyResponse) {
         if (historyResponse.ok) {
            return historyResponse.json();
         }
         else {
            return;
         }

      })
      .then(function (historyData) {
         console.log(historyData)
         //clear out the div 
         document.getElementById('movie-box').textContent = "";
         //dynamically create the elements and append to page
         //create title 
         var title = document.createElement('h3')
         title.setAttribute('class', 'results-title')
         title.setAttribute("id", "movie-title")
         title.textContent = historyData.original_title
         document.getElementById('movie-box').appendChild(title)
         //create movie cover
         var cover = document.createElement('img')
         cover.setAttribute('src', "https://image.tmdb.org/t/p/w500/" + historyData.poster_path + "")
         cover.setAttribute('value', historyData.id)
         cover.setAttribute('alt', "Movie poster for " + historyData.original_title)
         document.getElementById('movie-box').appendChild(cover)
         //create overview title
         var summaryTitle = document.createElement('h3')
         summaryTitle.setAttribute("class", "results-title")
         summaryTitle.textContent = "What's it about?"
         document.getElementById('movie-box').appendChild(summaryTitle)
         //create overview
         var summary = document.createElement('p')
         summary.setAttribute("class", "text")
         summary.textContent = historyData.overview
         document.getElementById('movie-box').appendChild(summary)

      })
}

//api call for mealHistory
var mealHistory = function () {
   console.log(mealHistoryID)
   mealBoxE1.textContent = "";

   var apiUrl2 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealHistoryID
   fetch(apiUrl2).then(function (response2) {
      return response2.json()
   })
      .then(function (data2) {
         console.log(data2);

         //creates the h3 element for the meal-title
         var mealTitle = document.createElement('h3')
         mealTitle.setAttribute('class', "results-title")
         mealTitle.textContent = data2.meals[0].strMeal;
         //document.getElementById("meal-title").textContent = data2.meals[0].strMeal;
         //creates the img element for the meal-img
         var mealImage = document.createElement('img')
         mealImage.setAttribute("src", data2.meals[0].strMealThumb)
         mealImage.setAttribute("alt", "Picture of a " + data2.meals[0].strMeal)
         //append the title and image to page
         mealBoxE1.appendChild(mealTitle,)
         mealBoxE1.appendChild(mealImage)
         //document.getElementById('meal-img').setAttribute("src", data2.meals[0].strMealThumb)
         //document.getElementById('meal-img').setAttribute("alt", "Picture of a " + data2.meals[0].strMeal)

         if (data2.meals[0].strSource) {
            var recipe = document.createElement("a")
            recipe.setAttribute("href", data2.meals[0].strSource);
            recipe.setAttribute("target", "_blank")
            recipe.textContent = "Check out the recipe!";
            mealBoxE1.appendChild(recipe)
         }
         var ingredients = [
            data2.meals[0].strIngredient1,
            data2.meals[0].strIngredient2,
            data2.meals[0].strIngredient3,
            data2.meals[0].strIngredient4,
            data2.meals[0].strIngredient5,
            data2.meals[0].strIngredient6,
            data2.meals[0].strIngredient7,
            data2.meals[0].strIngredient8,
            data2.meals[0].strIngredient9,
            data2.meals[0].strIngredient10,
            data2.meals[0].strIngredient11,
            data2.meals[0].strIngredient12,
            data2.meals[0].strIngredient13,
            data2.meals[0].strIngredient14,
            data2.meals[0].strIngredient15,
            data2.meals[0].strIngredient16,
            data2.meals[0].strIngredient17,
            data2.meals[0].strIngredient18,
            data2.meals[0].strIngredient19,
            data2.meals[0].strIngredient20,
         ]
         var measure = [
            data2.meals[0].strMeasure1,
            data2.meals[0].strMeasure2,
            data2.meals[0].strMeasure3,
            data2.meals[0].strMeasure4,
            data2.meals[0].strMeasure5,
            data2.meals[0].strMeasure6,
            data2.meals[0].strMeasure7,
            data2.meals[0].strMeasure8,
            data2.meals[0].strMeasure9,
            data2.meals[0].strMeasure10,
            data2.meals[0].strMeasure11,
            data2.meals[0].strMeasure12,
            data2.meals[0].strMeasure13,
            data2.meals[0].strMeasure14,
            data2.meals[0].strMeasure15,
            data2.meals[0].strMeasure16,
            data2.meals[0].strMeasure17,
            data2.meals[0].strMeasure18,
            data2.meals[0].strMeasure19,
            data2.meals[0].strMeasure20,
         ]

         // stores the meal id
         mealID = data2.meals[0].idMeal




         // stores the meal id
         mealID = data2.meals[0].idMeal
         console.log("this is the mealId: " + mealID)
         //ingredientsHeader
         var ingredientsHeader = document.createElement("h3")
         ingredientsHeader.setAttribute("class", "results-title")
         ingredientsHeader.textContent = "Ingredients"
         //append to page
         mealBoxE1.appendChild(ingredientsHeader)
         var mealList = document.createElement("ul");
         mealBoxE1.appendChild(mealList)
         //creates instructions header
         var instructionsHeader = document.createElement("h3")
         instructionsHeader.setAttribute("class", "results-title")
         instructionsHeader.textContent = "Instructions"
         //append to page
         mealBoxE1.appendChild(instructionsHeader)
         var instructions = document.createElement('p')
         instructions.setAttribute('class', "text");
         instructions.textContent = data2.meals[0].strInstructions
         console.log(instructions);
         mealBoxE1.appendChild(instructions);
         dID = mealID;
         console.log("this is the dID: " + dID)
         for (var i = 0; i < measure.length; i++) {
            //console.log($(this));
            if (measure[i] === null || measure[i] === "" || measure[i] === " ") {
               return;
            }
            else {
               var mealStuff = document.createElement("li")
               mealStuff.textContent = measure[i] + "-" + ingredients[i];
               mealList.appendChild(mealStuff);
            }
         }

      })


}

//drinkHistory
var drinkHistory = function () {
   console.log(drinkHistoryID)
   var apiUrl2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkHistoryID
   fetch(apiUrl2).then(function (response2) {
      response2.json().then(function (data) {
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
         drinkBoxEl.textContent = ""
         //add title of drink to page
         var drinkTitle = document.createElement("h3")
         drinkTitle.textContent = data.drinks[0].strDrink
         drinkTitle.setAttribute("class", "results-title")
         drinkTitle.setAttribute("id", "drink-title")

         //append title
         drinkBoxEl.appendChild(drinkTitle)

         //add image to page and set alt attribute
         var drinkImg = document.createElement("img")
         drinkImg.setAttribute("src", data.drinks[0].strDrinkThumb)
         drinkImg.setAttribute("alt", "Picture of a " + data.drinks[0].strDrink)

         //append image
         drinkBoxEl.appendChild(drinkImg)


         // stores the drink id
         drinkID = data.drinks[0].idDrink

         console.log("this is the drinkID: " + drinkID)
         //ingredientsHeader
         var ingredientsHeader = document.createElement("h3")
         ingredientsHeader.setAttribute("class", "results-title")
         ingredientsHeader.textContent = "Ingredients"
         //append to page
         drinkBoxEl.appendChild(ingredientsHeader)
         var drinkList = document.createElement("ul");
         drinkBoxEl.appendChild(drinkList)
         //creates instructions header
         var instructionsHeader = document.createElement("h3")
         instructionsHeader.setAttribute("class", "results-title")
         instructionsHeader.textContent = "Instructions"
         //append to page
         drinkBoxEl.appendChild(instructionsHeader)
         var instructions = document.createElement('p')
         instructions.setAttribute("class", "text")
         instructions.textContent = data.drinks[0].strInstructions
         drinkBoxEl.appendChild(instructions);
         for (var i = 0; i < measure.length; i++) {
            //console.log($(this));
            if (measure[i] === null || measure[i] === "") {
               return;
            }
            else {
               var drinkM = document.createElement("li")
               drinkM.textContent = measure[i] + "-" + ingredients[i];
               drinkList.appendChild(drinkM);
            }
         }
      })
   })
}



//reFetch
var reFetch = function (event) {
   event.preventDefault()
   console.log(event.target)
   if (event.target.getAttribute("data-movie") === null
      || event.target.getAttribute("data-meal") === null
      || event.target.getAttribute("data-drink") === null) {
      return;
   }
   movieHistoryID = event.target.getAttribute('data-movie')
   mealHistoryID = event.target.getAttribute("data-meal")
   drinkHistoryID = event.target.getAttribute("data-drink")
   //call the api
   movieHistory();
   mealHistory();
   drinkHistory();

}
loadMemory();
//event listener for the savedPlan click
document.getElementById('saved-plans').addEventListener("click", reFetch)
//event listener for the save plan
document.getElementById('save-plan-btn').addEventListener("click", savePlan)

//IF WE REFRESH THE PAGE IT WILL RELOAD THE RESULTS WE COULD USE THIS AS A 'MIX AGAIN'