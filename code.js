// Housing Equality Questionnaire

// Screen Navigation Event Handlers
onEvent("atholtonHomeBtn", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("centennialHomeBtn", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("glenelgHomeBtn", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("hammondHomeBtn", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("hebronHomeBtn", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("howardHomeBtn", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("lrhsHomeBtn", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("mrhsHomeBtn", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("ohmsHomeBtn", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("reservoirHomeBtn", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("rhhsHomeBtn", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("wlhsHomeBtn", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("gameInstructionsBtn", "click", function( ) {
  setScreen("gameInstructionsScreen");
});

onEvent("questionnaireHomeScreenContinue", "click", function( ) {
  setScreen("questionnaireQ1");
});

onEvent("questionnaireQ1Yes", "click", function( ) {
  setScreen("questionnaireQ2");
});

onEvent("ageUnder18Btn", "click", function( ) {
  setScreen("under18Resources");
});

onEvent("ageOver18Btn", "click", function( ) {
  setScreen("questionnaireQ3");
});

onEvent("returnFromU18Resources", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("questionnaireQ1No", "click", function( ) {
  setScreen("questionnaireHowToHelp");
});

onEvent("returnFromHowToHelp", "click", function( ) {
  setScreen("HomeScrn");
});

onEvent("goToGame", "click", function( ) {
  setScreen("GameScrn");
  playGame();
});

onEvent("questionnaireLocationGlenelg", "click", function( ) {
  setScreen("GlenelgLocationsForYou");
});

onEvent("questionnaireLocationRiverHill", "click", function( ) {
  setScreen("RiverHillLocationsForYou");
});

onEvent("questionnaireLocationCentennial", "click", function( ) {
  setScreen("CentennialLocationsForYou");
});

onEvent("questionnaireLocationMRHS", "click", function( ) {
  setScreen("MRHSLocationsForYou");
});

onEvent("questionnaireLocationHebron", "click", function( ) {
  setScreen("HebronLocationsForYou");
});

onEvent("questionnaireLocationOMHS", "click", function( ) {
  setScreen("OMHSLocationsForYou");
});

onEvent("questionnaireLocationHammond", "click", function( ) {
  setScreen("HammondLocationsForYou");
});

onEvent("questionnaireLocationReservoir", "click", function( ) {
  setScreen("ReservoirLocationsForYou");
});

onEvent("questionnaireLocationLRHS", "click", function( ) {
  setScreen("LRHSLocationsForYou");
});

onEvent("questionnaireLocationWLHS", "click", function( ) {
  setScreen("WLHSLocationsForYou");
});

onEvent("questionnaireLocationAtholton", "click", function( ) {
  setScreen("AtholtonLocationsForYou");
});

onEvent("questionnaireLocationHoward", "click", function( ) {
  setScreen("HowardLocationsForYou");
});


// Catch The House Game
// Screen Navigation Event Handlers
onEvent("questionnaireButton", "click", function() {
  setScreen("questionnaireScreen");
});

onEvent("returnToGameFromFact1", "click", function( ) {
  setScreen("GameScrn");
  playGame();
});

onEvent("returnToGameFromFact2", "click", function( ) {
  setScreen("GameScrn");
  playGame();
});

onEvent("returnToGameFromFact3", "click", function( ) {
  setScreen("GameScrn");
  playGame();
});

//Allows the user to control the basket's direction and shoot fireballs
onEvent("leftBtn", "click", function () {
  basketX = getXPosition("basket") - 40;
  setPosition("basket", basketX, 250);
  console.log("The basket's x-coordinate is: " + basketX);
});

onEvent("rightBtn", "click", function () {
  basketX = getXPosition("basket") + 40;
  setPosition("basket", basketX, 250);
  console.log("The basket's x-coordinate is: " + basketX);
});

//List of global variables
var score;
var score=0;
var basketX;
var houseX; 
var houseY = 50;
var isWon=false;
var arrayOfXCoordinates = [40, 120, 200];
var myTimer;

//Highest level function; sets up the game and controls most of the movement within it 
function playGame() {
  setupGame();
  movementLoop();
}  

//Allows house to pick a random location at the top of the screen from the three possible x-values in the array  
function getRandomX() {
  var randomIndex = randomNumber(0, arrayOfXCoordinates.length-1);
  return arrayOfXCoordinates[randomIndex];
}
houseX = getRandomX();


//Sets up initial positions, sizes, and labels
//Child Algorithm #2
function setupGame () {
  console.log("Score: " + score);
  setText("scoreLabel", "Score: " + score);
  setPosition("basket", 100, 250);
  positionHouse(houseY);
  basketX = 100;
  setSize("ghost", 70, 70);
  setSize("fireball", 15, 15);
  hideElement("house");
  }

//Updates the score variables and score label by the given amount
//Chosen Abstraction
function updateScore(amt) {
  score=score+amt;
  setText("scoreLabel", "Score: "+score);
  console.log("Updated Score: " + score);
}

//Controls positioning of the ghost with the global variable "houseY" as a parameter
function positionHouse (houseY) {
  console.log("House X is: " + houseX, "House Y is: "+houseY);
  setPosition("house", houseX, houseY);
  showElement("house");
}

//Checks if the basket and house are colliding at any given time
function isBasketAndHouseColliding () {
  var BasketX = getXPosition("basket");
  var BasketY = getYPosition("basket");
  var HouseX = getXPosition("house");
  var HouseY = getYPosition("house");
  
  if (BasketX+20==HouseX && BasketY<=HouseY) {
    return true;
  } 
  else {
    return false;
  }
}

//Controls the downwards movement of the house
function movementLoop() {
  myTimer = setInterval(function() {
    console.log("House Y: " + houseY);
    houseY+=20;
    positionHouse(houseY);
    if (hasGameEnded()) {
      console.log("Game Ended");
      clearInterval(myTimer);
        if (isWon==true) {
          setScreen("winScreen");
          playSound("assets/category_points/vibrant_game_cartoon_musical_bling_1.mp3");
    } else {
    setScreen("loseScreen");
    playSound("assets/category_alerts/cartoon_negative_bling.mp3");
  }
  }
}, 300);
}

//Checks if the game is over through a series of conditions
//Parent Algorithm
function hasGameEnded() {
  var isEnded = false;
  if (isBasketAndHouseColliding ()) {
    updateScore(1);
    playSound("assets/category_alerts/airy_bell_notification.mp3", false);
    setText("scoreLabel", "Score: " + score);
    destroyHouse();
    console.log("Score: "+score);
    if (score == 3) {
      console.log("Fact 1!");
      clearInterval(myTimer);
      setScreen("fact1");
    } else if (score == 6) {
      console.log("Fact 1!");
      clearInterval(myTimer);
      setScreen("fact2");
    } else if (score == 9) {
      console.log("Fact 1!");
      clearInterval(myTimer);
      setScreen("fact3");
    } else if (score==12) {
      isWon=true;
      isEnded=true;
    }
    else {
    setupGame();
    isEnded = false;
    }
  } else if (getYPosition("house")>=450) {
    isWon=false;
    isEnded=true;
    console.log("Game Lost!");
  }
    return isEnded;
  }

//Resets the position of the ghost
function destroyHouse() {
  hideElement("house");
  houseY=50;
  houseX = getRandomX();
  positionHouse(houseY);
  showElement("house");
}
