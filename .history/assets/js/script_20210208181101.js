
//GLOBAL VAR SECTIONS 
var queryString = location.search;
var dataTypes = queryString.split("=");
var mealType = dataTypes[1];
var drinkType = dataTypes[2];
var genreId = dataTypes[3];

console.log("fuckyou", dataTypes);

var drinkBoxEl = $("#drink-box")
var mealBoxE1 = $("#meal-box")
//VARIABLEs FOR SAVED PLANS
var savedPlanEl = $("#saved-plans")

// DATE INFORMATIONS USING MOMENT.JS
var currentDate = moment().format(' Do [of] MMMM ');

// MEMORY
var storageArray = [];

// GLOBAL VAR STRINGS
var movieID = "";
var dID = "";
var bevID = "";
var foodName = "";
var drinkName = "";
var movieName = "";
var newSave = [];

//GLOBAL VARS STRINGS FOR RELOAD 
var movieHistoryID = "";
var mealHistoryID = "";
var drinkHistoryID = "";

// WE MAY NEED THREE DATA SET
var removeButton = function () {

   $("#save-plan-btn").hide()
   $("#reload-btn").hide();
   $("#view-saved-btn").hide();
   $("#contain").hide();
}
var showButton = function () {

   $("#save-plan-btn").show()
   $("#reload-btn").show();
   $("#view-saved-btn").show();
   $("#contain").show();
}

// MEMORY
//var storageArray = [];

//var hideHistory
var hideHistory = function () {
   showButton()
   if ($("#saved-plans").hasClass('hide')) {
      return false;
   } else {
      setTimeout(function () {
         $("#saved-plans").addClass("hide");
         $("#saved-plans").removeClass("animate_slideInUp open");
         $("#his").empty();
      }, 0);
   }
}
removeButton();

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
         var newEntry = $('<div>');
         newEntry.attr("class", 'cell large-6 small-12 plan-item saved-div')
         //passes the id's needed for the api as data-* attributes
         newEntry.attr('data-drink', memory[i][6])
         newEntry.attr('data-movie', memory[i][4]);
         newEntry.attr('data-meal', memory[i][3]);
         //newEntry.attr('data-meal', memory[i][4]);
         //creates the link element
         var aE1 = $('<a>')
         aE1.attr('href', "")
         aE1.textContent = " Wow! " + "On the " + memory[i][0] + " I wasn't Bored in the House after all! " + " I Enjoyed a " + memory[i][5] + ", with a " + memory[i][1] + ", while watching " + memory[i][2]
         //since the whole div is clickable due to its dynamically created, we will ensure we capture the ids needed 
         aE1.attr('data-drink', memory[i][6])
         aE1.attr('data-movie', memory[i][4]);
         aE1.attr('data-meal', memory[i][3]);

         //creates the span inside the link
         var span = $('<span>')
         span.attr('class', 'float-right')

         //create the icon inside the span
         var icon = $('<i>')
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
      //console.log(storageArray);
   }
}
// END VAR MEMORYGET = FUNCTION

// RENDER FUNCTION DYNAMIC ELEMENT (REFATOR) EASIER TO READ SEPARATING FRUNCT FOR FETCH/API CALL> 
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
   //console.log(data2);
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
   console.log(ingredients)
   // HAD TO DEFIND MEAL ID AS VAR (REFRACTOR)
   let mealId = data.meals[0].idMeal
   //console.log("this is the mealId: " + mealId)
   //creates ingredients header
   let ingredientsHeader = $("<h3>")
   ingredientsHeader.attr("class", "results-title")
   ingredientsHeader.text("Ingredients")
   //append to page
   mealBoxE1.append(ingredientsHeader)
   let mealList = $("<ul>");
   mealBoxE1.append(mealList)
   //creates instructions header
   let instructionsHeader = $("<h3>")
   instructionsHeader.attr("class", "results-title")
   instructionsHeader.text("Instructions")
   //APPEND TO PAGE 
   mealBoxE1.append(instructionsHeader)
   let instructions = $('<p>')
   instructions.attr('class', "text");
   instructions.text(data2.meals[0].strInstructions);
   // LOOKING FOR INSTRUCTIONS.  
   //console.log(instructions);

   mealBoxE1.append(instructions);
   dID = mealId;

   //console.log("this is the dID: " + dID)//
   for (var i = 0; i < measure.length; i++) {
      //console.log($(this));
      if (measure[i] === null || measure[i] === "" || measure[i] === " ") {
         return;
      }
      else {
         var mealStuff = $("<li>")
         mealStuff.text(measure[i] + "-" + ingredients[i]);
         mealList.append(mealStuff);
      }
   }
}
//END OF MEAL RENDER FUNCTION

//BEGINING OF DRINK FUNCTION (REFATOR) EASIER TO READ SEPARATING FRUNCT FOR FETCH/API CALL
var drinkRender = function (data, measure, ingredients) {
   var drinkTitle = $("<h3>")
   drinkTitle.text(data.drinks[0].strDrink)
   drinkTitle.attr("class", "results-title")
   drinkTitle.attr("id", "drink-title")
console.log(drinkTitle)
   //append title
   drinkBoxEl.append(drinkTitle)

   //add image to page and set alt attribute
   var drinkImg = $("<img>")
   drinkImg.attr("src", data.drinks[0].strDrinkThumb)
   drinkImg.attr("alt", "Picture of a " + data.drinks[0].strDrink)

   //append image
   drinkBoxEl.append(drinkImg)


   // stores the drink id
   var drinkId = data.drinks[0].idDrink
   bevID = drinkId

   //console.log("this is the drinkID: " + drinkId)


   //ingredientsHeader
   var ingredientsHeader = $("<h3>")
   ingredientsHeader.attr("class", "results-title")
   ingredientsHeader.text("Ingredients")
   //append to page
   drinkBoxEl.append(ingredientsHeader)
   var drinkList = $("<ul>");
   drinkBoxEl.append(drinkList)
   //creates instructions header
   var instructionsHeader = $("<h3>")
   instructionsHeader.attr("class", "results-title")
   instructionsHeader.text("Instructions")
   //append to page
   drinkBoxEl.append(instructionsHeader)

   var instructions = $('<p>')
   instructions.attr("class", "text")
   instructions.text(data.drinks[0].strInstructions)
   drinkBoxEl.append(instructions);
   for (var i = 0; i < measure.length; i++) {
      //console.log($(this));
      if (measure[i] === null || measure[i] === "") {
         return;
      }
      else {
         var drinkM = $("<li>")
         drinkM.text(measure[i] + "-" + ingredients[i]);
         drinkList.append(drinkM);
      }
   }
}
//END DRINK RENDER DYNAMIC

//BEGINING OF MOVIE RENDER DYNAMIC
var movieRender = function (movieData) {
   var randomNum = Math.floor(Math.random() * 20);
   //console.log("selected randoStyle is: " + randomNum);

   console.log(movieData)
   //CREATE DYNAMICALLY APPEND TO PAGE>  
   var title = $('<h3>')
   title.attr('class', 'results-title')
   title.attr('id', "movie-title")
   title.text(movieData.results[randomNum].original_title)

   $('#movie-box').append(title)
   //create movie cover
   var cover = $('<img>')
   cover.attr('src', "https://image.tmdb.org/t/p/w500/" + movieData.results[randomNum].poster_path + "")
   cover.attr('value', movieData.results[randomNum].id)
   cover.attr('alt', "Movie poster for " + movieData.results[randomNum].original_title)
   $('#movie-box').append(cover)
   //create overview title
   var summaryTitle = $('<h3>')
   summaryTitle.attr("class", "results-title")
   summaryTitle.text("What's it about?")
   $('#movie-box').append(summaryTitle)
   //create overview
   var summary = $('<p>')
   summary.attr("class", 'text')
   summary.text(movieData.results[randomNum].overview)
   $('#movie-box').append(summary)
   // creates the variable for the movieID so we call recall out of storage
   movieID = movieData.results[randomNum].id
   // console.log("this is the movieID: " + movieID)
}

// END OF MOVIE RENDER DYNAMIC(KH)

// BEGINGING OF API CALLS (KH)

// VAR FUNCTION FOR API MEAL(KH)(!current set up just to run a random meal!)(AT)
var meal = function () {

   if (mealType === "random") {
      apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
   }
   else {
      apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + mealType;
   }
   fetch(apiUrl)
      .then(function (response) {
         response.json().then(function (data) {
            consol
            var randomNum = ""
            var ranNumFunc = function () {
               randomNum = Math.floor(Math.random() * 34);
               if (data.meals[randomNum] === undefined) {
                  ranNumFunc();
               }
            };
            ranNumFunc();
            var mealId = data.meals[randomNum].idMeal;
            //console.log(data);

            var apiUrl2 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId
            fetch(apiUrl2)
               .then(function (response2) {
                  response2.json().then(function (data2) {

                     renderMeal(data, data2);

                  })
               })
         })
      })
};
meal();
// END VAR FUNCTION FOR API MEAL(KH)

// VAR FUNCTION FOR API DRINKS(KH)(!current set up just to run a random meal!)(AT)
var drink = function () {
   if (drinkType === null || drinkType === undefined) {
      return
   }
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
         fetch(apiUrl2)
            .then(function (response2) {
               response2.json()
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
                     //WILL PASS FUNCTION
                     drinkRender(data, measure, ingredients)
                  })
            })
      })
};
drink();
// END OF VAR FUNCTION FOR API DRINKS(KH)

// VAR FUNCTION FOR API MOVIE(KH)(! need to change the current values in html to match the ids!)
var movie = function () {
   if (genreId != undefined) {
      console.log("genreFucker", genreId);
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

         movieRender(movieData);
         hideHistory();
      })
}}
movie();

console.log("this is the movieID: " + movieID)


//save function
var savePlan = function () {
   //console.log("You clicked save");
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
      var newEntry = $('<div>');
      newEntry.attr("class", 'cell large-6 small-12 plan-item saved-div');
      //creates the link element
      var aE1 = $('<a>')
      aE1.attr('href', "")
      aE1.text("Enjoying a " + $("#meal-title").text() + ", with a " + $("#drink-title").text() + ", while watching " + $('#movie-title').text())
      //creates the span inside the link
      var span = $('<span>')
      span.attr('class', 'float-right')
      //create the icon inside the span
      var icon = $('<i>')
      icon.attr('class', 'fas fa-plus')
      span.append(icon);
      //append the span to the link
      aE1.append(span);
      //append link to the div
      newEntry.append(aE1);
      //append div to page
      savedPlanEl.append(newEntry);
      //set variables for storage
      foodName = $("#meal-title").text()
      drinkName = $("#drink-title").text()
      movieName = $('#movie-title').text()
      newSave.push(currentDate, drinkName, movieName, dID, movieID, foodName, bevID)
      console.log("fuckof", newSave)
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
         $('#movie-box').text("");
         //dynamically create the elements and append to page
         //create title 
         var title = $('<h3>')
         title.attr('class', 'results-title')
         title.attr("id", "movie-title")
         title.text(historyData.original_title)
         $('#movie-box').append(title)
         //create movie cover
         var cover = $('<img>')
         cover.attr('src', "https://image.tmdb.org/t/p/w500/" + historyData.poster_path + "")
         cover.attr('value', historyData.id)
         cover.attr('alt', "Movie poster for " + historyData.original_title)
         $('#movie-box').append(cover)
         //create overview title
         var summaryTitle = $('<h3>')
         summaryTitle.attr("class", "results-title")
         summaryTitle.text("What's it about?")
         $('#movie-box').append(summaryTitle)
         //create overview
         var summary = $('<p>')
         summary.attr("class", "text")
         summary.text(historyData.overview)
         $('#movie-box').append(summary)

      })
}

//api call for mealHistory
var mealHistory = function () {
   console.log(mealHistoryID)
   mealBoxE1.text("");

   var apiUrl2 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealHistoryID
   fetch(apiUrl2).then(function (response2) {
      return response2.json()
   })
      .then(function (data2) {
         console.log(data2);

         //creates the h3 element for the meal-title
         var mealTitle = $('<h3>')
         mealTitle.attr('class', "results-title")
         mealTitle.text(data2.meals[0].strMeal);
         //getElementById("meal-title").text(data2.meals[0].strMeal;
         //creates the img element for the meal-img
         var mealImage = $('<img>')
         mealImage.attr("src", data2.meals[0].strMealThumb)
         mealImage.attr("alt", "Picture of a " + data2.meals[0].strMeal)
         //append the title and image to page
         mealBoxE1.append(mealTitle,)
         mealBoxE1.append(mealImage)
         //getElementById('meal-img').attr("src", data2.meals[0].strMealThumb)
         //getElementById('meal-img').attr("alt", "Picture of a " + data2.meals[0].strMeal)

         if (data2.meals[0].strSource) {
            var recipe = $("<a>")
            recipe.attr("href", data2.meals[0].strSource);
            recipe.attr("target", "_blank")
            recipe.text("Check out the recipe!");
            mealBoxE1.append(recipe)
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
         var ingredientsHeader = $("<h3>")
         ingredientsHeader.attr("class", "results-title")
         ingredientsHeader.text("Ingredients")
         //append to page
         mealBoxE1.append(ingredientsHeader)
         var mealList = $("ul");
         mealBoxE1.append(mealList)
         //creates instructions header
         var instructionsHeader = $("<h3>")
         instructionsHeader.attr("class", "results-title")
         instructionsHeader.text("Instructions")
         //append to page
         mealBoxE1.append(instructionsHeader)
         var instructions = $('<p>')
         instructions.attr('class', "text");
         instructions.textdata2.meals[0].strInstructions
         console.log(instructions);
         mealBoxE1.append(instructions);
         dID = mealID;
         console.log("this is the dID: " + dID)
         for (var i = 0; i < measure.length; i++) {
            //console.log($(this));
            if (measure[i] === null || measure[i] === "" || measure[i] === " ") {
               return;
            }
            else {
               var mealStuff = $("<li>")
               mealStuff.text(measure[i] + "-" + ingredients[i]);
               mealList.append(mealStuff);
            }
         }

      })


}

//drinkHistory (Code reduction Redunancy maybe fractering. )
var drinkHistory = function () {
   //console.log(drinkHistoryID)
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
         drinkBoxEl.text("")
         //add title of drink to page
         var drinkTitle = $("<h3>")
         drinkTitle.text() = data.drinks[0].strDrink
         drinkTitle.attr("class", "results-title")
         drinkTitle.attr("id", "drink-title")

         //append title
         drinkBoxEl.append(drinkTitle)

         //add image to page and set alt attribute
         var drinkImg = $("<img>")
         drinkImg.attr("src", data.drinks[0].strDrinkThumb)
         drinkImg.attr("alt", "Picture of a " + data.drinks[0].strDrink)

         //append image
         drinkBoxEl.append(drinkImg)


         // stores the drink id
         drinkID = data.drinks[0].idDrink

         console.log("this is the drinkID: " + drinkID)
         //ingredientsHeader
         var ingredientsHeader = $("h3")
         ingredientsHeader.attr("class", "results-title")
         ingredientsHeader.text() = "Ingredients"
         //append to page
         drinkBoxEl.append(ingredientsHeader)
         var drinkList = $("<ul>");
         drinkBoxEl.append(drinkList)
         //creates instructions header
         var instructionsHeader = $("<h3>")
         instructionsHeader.attr("class", "results-title")
         instructionsHeader.text() = "Instructions"
         //append to page
         drinkBoxEl.append(instructionsHeader)
         var instructions = $('<p>')
         instructions.attr("class", "text")
         instructions.text(data.drinks[0].strInstructions)
         drinkBoxEl.append(instructions);
         for (var i = 0; i < measure.length; i++) {
            //console.log($(this));
            if (measure[i] === null || measure[i] === "") {
               return;
            }
            else {
               var drinkM = $("li")
               drinkM.text() = measure[i] + "-" + ingredients[i];
               drinkList.append(drinkM);
            }
         }
      })
   })
}



//reFetch
var reFetch = function (event) {
   showButton();
   event.preventDefault()
   //console.log(event.target)
   if ($(this).attr("data-movie") === null
      || $(this).attr("data-meal") === null
      || $(this).attr("data-drink") === null) {
      return;
   }
   movieHistoryID = $(this).attr('data-movie')
   mealHistoryID = $(this).attr("data-meal")
   drinkHistoryID = $(this).attr("data-drink")
   //call the api
   movieHistory();
   mealHistory();
   drinkHistory();

}
//var showHistory
var showHistory = function () {
   removeButton()
   if ($("#saved-plans").hasClass('open')) {
      return false;
   } else {
      setTimeout(function () {
         $("#saved-plans").remove("hide");
         $("#saved-plans").addClass("animate__slideInUp open");
         $("#his").append("History");
      }, 0);

   }
}
// hides the elements when when are viewing history

loadMemory();
//event listener for the savedPlan click
$('#saved-plans').on("click", reFetch)
//event listener for the save plan
$('#save-plan-btn').on("click", savePlan)
//event listener for the view saved plans
$('#view-saved-btn').on("click", showHistory)

//IF WE REFRESH THE PAGE IT WILL RELOAD THE RESULTS WE COULD USE THIS AS A 'MIX AGAIN'

$("#reload-btn").on('click', function () {
   event.preventDefault();
   location.reload();
});

//document.$("#view-saved-btn").addEventListener("click", function () {
   //if (document.$("#saved-plans").classList.contains('open')) {
      //return false;
   //} else {
      //setTimeout(function () {
         //document.$("#saved-plans").classList.replace("hide", "animate_slideInUp");
        // document.$("#saved-plans").classList.add("open");
      //}, 500);

  // }
//});
