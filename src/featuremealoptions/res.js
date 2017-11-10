// res.js
// handles user input and response

// owen wilson was here
var Alexa = require('alexa-sdk');
var index = require('index.js');

var mealExchange = {
  "Grilleworks":["Hamburger", "Malibu Veggie Burger", "Grilled Cheese Sandwhich", "3 Piece Chicken Tenders"],
  "Society Pies":["Personal Cheese Pizza", "Personnal Pepperoni Pizza", "Pasta and Breadstick"],
  "Burrito Theory":["Chicken Burrito Bowl", "Veggie Burrito Bowl", "Beef Burrito Bowl", "Cheese Quesadilla"],
  "In the Nood":["Nood Sampler", "Chicken and Broccoli Alfredo", "Spaghetti and Meatballs", "Shiitake Udon"],
  "Late Night in the Nood":["Mama's Mac", "Maccaprese", "Buffalo Mac", "Maccaroma"],
  "Lambeth":["PB & J", "Tomato, Basil, and Mozzarella on Ciabatta", "Vegan Avocado Bacon Wrap", "Turkey Club Wrap", "Chef Salad", "Chicken Caesar Salad", "Cobb Salad"],
  "Fine Arts Cafe":["Western Breakfast Omelet", "Cheese Breakfast Omelet", "Veggie Breakfast Omelet"],
  "Fine Arts Cafe Afternoon":["Carter's Mountain", "Blue Ridge", "Ole Virginia Peanut Butter & Banana", "Turkey, Cheddar, & Apple", "Grilled Cheese Melt"],
  "Crumbs":["Black Forest Ham & Swiss Croissant", "Chicken Salad on Ciabatta", "Mozzarella & Tomato on Tomato Wrap", "Chef Salad", "Garden Salad"],
  "Rising Roll":["Omelet", "Pastry"],
  "Rising Roll Afternoon":["Hummus Veggie Wrap", "Turkey Cheeser Sandwhich"],
  "Sidley Austin Cafe":["Breakfast Grill Sandwhich", "Choice of Entree or Side"],
  "West Range":["Colonnade Classic", "Carolina Barbecue Sandwich with a side salad or french fries", "Fresh Vegetable Wrap with a side salad or french fries", "Specialty Grilled Cheese with a side salad or french fries"],
  "Chick Fil A":["Chick Fil A Sandwhich", "Spicy Chick Fil A Sandwhich"],
  "Subway":["Ham, Veggie, Cold Cut, Turkey, or BLT 6 inch sub"],
  "Cafe McLeod":["Chicken, Pear, and Walnut Salad", "Chicken Caesar Wrap", "6 inch Italian Sub", "Tuna Salad on Wheatberry", "Mediterranean Veggie Ciabatta", "Cheesy Sun-Dried Tomato Melt"],
  "Java City":["One pastry with a medium coffee or hot tea", "One pastry with a regular fountain soda", "One fresh market smoothie", "Yogurt, whole fruit, and a medium coffee or hot tea", "Yogurt, whole fruit, and a regular fountain soda"],
  "Einstein Bros. Bagels at Rice Hall":["Breakfast Sandwhich", "Bagel and Shmear"],
  "Einstein Bros. Bagels at the Bookstore":["Bagel and Shmear"],
}

function sendResponse() {
  console.log(this);
  //TEST: this.emit(':tell', 'Sorry, I don\'t have that functionality yet.');
  for(var key in mealExchange ) {
      if( key == index.slotValue ) var res = mealExchange[key];  //check later to make sure that the intent that we are getting lines up with the keys
  }
  return (res);
  //return ('sorry, I don\'t have that functionality yet.');
}

module.exports = {
  sendResponse: sendResponse(),
}
