var foodType = "";
var drinkType = "";
var movieType = "";

document.querySelector('main').addEventListener("click", function() {

    event.preventDefault();

    // find which button was click
    var clickedBtn = event.target;
    var clickedBtnId = clickedBtn.getAttribute("id");
    var parent = clickedBtn.closest("section");

    // if a back button was clicked, remove current slide
    if (clickedBtn.classList.contains("back-btn")) {
        removeAlert();
        if (clickedBtnId === "scroll-release") {
            // document.querySelector("body").classList.remove("scroll-lock");
            document.querySelector("#home-slide").classList.remove("hide");
        }
        parent.classList.replace("animate__slideInUp", "animate__slideOutDown");
        setTimeout(function() {
            parent.classList.remove("animate__slideOutDown");
            parent.classList.add("hide");
        }, 500);
    }

    if (clickedBtnId === "start-btn") {
        document.querySelector("#dinner-slide").classList.replace("hide", "animate__slideInUp");
    }
    if (clickedBtnId === "add-food-btn") {
        removeAlert();
        foodType = document.querySelector("#cuisine-type").value;
        if(foodType === "") {
            displayAlertMessage();
        } else {
            document.querySelector("#drink-slide").classList.replace("hide", "animate__slideInUp");   
            document.querySelector("#drink-slide h2 span").textContent = foodType;
            console.log(foodType);
        }
    }
    if (clickedBtnId === "add-drink-btn") {
        removeAlert();
        drinkType = document.querySelector("#drink-type").value;
        if(drinkType === "") {
            displayAlertMessage();
        } else {
            document.querySelector("#genre-slide").classList.replace("hide", "animate__slideInUp");
            document.querySelector("#genre-slide h2 span").textContent = drinkType;
            console.log(drinkType);
        }
        
    }
    if (clickedBtnId === "add-genre-btn") {
        removeAlert();
        movieType = document.querySelector("#movie-type").value;
        if(movieType === "") {
            displayAlertMessage();
        } else {
            document.querySelector("#genre-slide").classList.replace("hide", "animate__slideInUp");
            console.log(movieType);
            console.log(foodType);
            console.log(drinkType);
            window.location='./results.html?para=' + foodType + '=' + drinkType + '=' + movieType
        }
        
    }
    if (clickedBtnId === "history-btn"){
        window.location="./results.html#saved-plans"
    }
});

//remove class for mobile styling

var heightOutput = document.querySelector('#height');
var widthOutput = document.querySelector('#width');

var windowSizeCheck = function() {
    if(window.innerWidth < 640) {
        document.querySelector("#home-slide .grid-x").classList.remove("align-middle");
        }
        else {
            document.querySelector("#home-slide .grid-x").classList.add("align-middle");
        }
}

window.onresize = windowSizeCheck;


windowSizeCheck();
window.addEventListener("resize", function() {
    windowSizeCheck();
});


//ALERT MESSAGE
var displayAlertMessage = function() {
    var alertBox = document.createElement("div");
    alertBox.classList = "callout alert text-left";
    alertBox.setAttribute('data-closable', ""); 
    alertBox.innerHTML = '<h5>Alert</h5> <p>Please select an input valid value</p> <button class="close-button" aria-label="Dismiss alert" type="button" data-close><span aria-hidden="true">&times;</span></button>';
    if($('div').hasClass('question-container')) {
        $('.question-container').append(alertBox);
    }
    
}
// remove alert
var removeAlert = function() {
    if($('div').hasClass('callout')) {
        $('.callout').remove();
    }
}