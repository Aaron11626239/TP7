// JavaScript for TP6

// function to load a file from the URL "fromFile" into object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

//new Recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  
  this.displayRecipe = function() {
    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#titleBanner").style.backgroundImage = "url("+ this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
    
  }
}

MomsPolishStewedCabbage = new Recipe("Moms Polish Stewed Cabbage",
                                     "pretzeld",
                                     "https://images.pexels.com/photos/8321980/pexels-photo-8321980.jpeg?cs=srgb&dl=pexels-pexels-user-8321980.jpg&fm=jpg", 
                                     "ingredients.html",
                                     "equipment.html",
                                     "directions.html"
                                    );

BakedAppleCiderDonuts = new Recipe("Baked Apple Cider Donuts",
                                     "Chef John",
                                     "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/15/0/VP0106H_Apple-Cider-Baked-Donuts_s4x3.jpg.rend.hgtvcom.616.462.suffix/1513375696765.jpeg.jpg", 
                                     "bakedappleciderdonuts - ingredients.html",
                                     "bakedappleciderdonuts - equipment.html",
                                     "bakedappleciderdonuts - directions.html"
                                    );

RutabagaBeefStew = new Recipe("Rutabaga Beef Stew",
                                     "dinehaus",
                                     "https://i0.wp.com/tastefoodblog.com/wp-content/uploads/2012/03/irish-stew-tf2.jpg",
                                     "rutabagabeefstew - ingredients.html",
                                     "rutabagabeefstew - equipment.html",
                                     "rutabagabeefstew - directions.html"
                                    );

window.onload = function() {
  
  document.querySelector("#firstRecipe").onclick = function() {
    MomsPolishStewedCabbage.displayRecipe();
  }
  document.querySelector("#secondRecipe").onclick = function() {
    BakedAppleCiderDonuts.displayRecipe();
  }
  document.querySelector("#thirdRecipe").onclick = function() {
    RutabagaBeefStew.displayRecipe();
  }
  
}// end window.onload