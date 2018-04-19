// res.js
// handles user input and response

// owen wilson was here
var Alexa = require('alexa-sdk');

var mealExchange = {
  "crossroads":["burrito theory offers Chicken Burrito Bowl", "Veggie Burrito Bowl", "Beef Burrito Bowl", "Cheese Quesadilla", "grilleworks offers", "Hamburger", "Malibu Veggie Burger", "Grilled Cheese Sandwhich", "3 Piece Chicken Tenders",
  "and society pies offers Personal Cheese Pizza", "Personnal Pepperoni Pizza", "Pasta and Breadstick"],
  "in the nood":["Nood Sampler", "Chicken and Broccoli Alfredo", "Spaghetti and Meatballs", "Shiitake Udon", "with late night options", "Mama's Mac", "Maccaprese", "Buffalo Mac", "Maccaroma"],
  "lambeth":["PB & J", "Tomato, Basil, and Mozzarella on Ciabatta", "Vegan Avocado Bacon Wrap", "Turkey Club Wrap", "Chef Salad", "Chicken Caesar Salad", "Cobb Salad"],
  "fine arts cafe":["Western Breakfast Omelet", "Cheese Breakfast Omelet", "Veggie Breakfast Omelet", "with afternoon options", "Carter's Mountain", "Blue Ridge", "Ole Virginia Peanut Butter & Banana", "Turkey, Cheddar, & Apple", "Grilled Cheese Melt"],
  "crumbs":["Black Forest Ham & Swiss Croissant", "Chicken Salad on Ciabatta", "Mozzarella & Tomato on Tomato Wrap", "Chef Salad", "Garden Salad"],
  "rising roll":["Omelet", "Pastry", "with afternoon options", "Hummus Veggie Wrap", "Turkey Cheeser Sandwhich"],
  "sidley austin cafe":["Breakfast Grill Sandwich", "Choice of Entree or Side"],
  "west range":["Colonnade Classic", "Carolina Barbecue Sandwich with a side salad or french fries", "Fresh Vegetable Wrap with a side salad or french fries", "Specialty Grilled Cheese with a side salad or french fries"],
  "the pav":["chick fil a has a chicken Sandwich and Spicy chicken Sandwich", "subway has Ham, Veggie, Cold Cut, Turkey, or BLT 6 inch sub", "and there are no meal exchange options for 5 guys"],
  "cafe McLeod":["Chicken, Pear, and Walnut Salad", "Chicken Caesar Wrap", "6 inch Italian Sub", "Tuna Salad on Wheatberry", "Mediterranean Veggie Ciabatta", "Cheesy Sun-Dried Tomato Melt"],
  "java city":["One pastry with a medium coffee or hot tea", "One pastry with a regular fountain soda", "One fresh market smoothie", "Yogurt, whole fruit, and a medium coffee or hot tea", "Yogurt, whole fruit, and a regular fountain soda"],
  "einsteins":["Options at Rice Hall are a", "Breakfast Sandwhich", "Bagel and Shmear", "and options at the bookstore are bagel and shmear"]
};

module.exports = {
  sendResponse: function sendResponse(slotVal) {
    console.log(this);
    //console.log("The slot value is: " + slotVal);

    var res = "Sorry, I couldn't find meal exchange options for that location.";
    for(var key in mealExchange ) {
        //console.log("Key is: "+key);
        if (key == slotVal) {
          //console.log("MATCHED KEY is: "+key);
          res = mealExchange[key];  //check later to make sure that the intent that we are getting lines up with the keys
        }
    }
    //console.log("Result is: " + res);
    return (res);

  }
}
