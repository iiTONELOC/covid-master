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
        if (clickedBtnId === "scroll-release") {
            document.querySelector("body").classList.remove("scroll-lock");
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
        document.querySelector("body").classList.add("scroll-lock");
        setTimeout(function() {
            document.querySelector("#home-slide").classList.add("hide");
        }, 1000);

    }
    if (clickedBtnId === "add-food-btn") {
        document.querySelector("#drink-slide").classList.replace("hide", "animate__slideInUp");
        foodType = document.querySelector("#cuisine-type").value;
        document.querySelector("#drink-slide h2 span").textContent = foodType;
        console.log(foodType);
    }
    if (clickedBtnId === "add-drink-btn") {
        document.querySelector("#genre-slide").classList.replace("hide", "animate__slideInUp");
        drinkType = document.querySelector("#drink-type").value;
        document.querySelector("#genre-slide h2 span").textContent = drinkType;
        console.log(drinkType);
    }
    if (clickedBtnId === "add-genre-btn") {
        document.querySelector("#genre-slide").classList.replace("hide", "animate__slideInUp");
        movieType = document.querySelector("#movie-type").value;
        console.log(movieType);
        console.log(foodType);
        console.log(drinkType);
        open('results.html?para=' + foodType + '=' + drinkType + '=' + movieType);
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
