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

var diningHours = {
  "O'Hill":["Mon-Fri from 7AM - 9PM", "Sat-Sun from 8AM - 9PM"],
  "Newcomb":["Mon-Thu	from 7AM - 8PM", "Fri from 7AM - 2:15PM", "Sat from 10AM - 2PM", "Sun from 10AM - 8PM"],
  "Runk":["Mon-Fri from 7AM - 8PM", "Sat-Sun from 10AM - 8PM"],
  "1818 at McLeod":["Mon-Fri from 7:30AM - 1:30PM"],
  "1819 at Newcomb":["Mon-Fri from 8AM - 11PM", "Sat from 10AM - 4PM", "Sun	from 3PM - 11PM"],
  "1819 at Runk":["Mon-Fri from 7AM - 12AM", "Sat-Sun from 10AM - 12AM"],
  "Einsteins at the Bookstore":["Mon-Thu from 8:30AM - 3PM", "Fri from 8:30AM - 2PM"],
  "Einsteins at Rice Hall":["Mon-Thu from 8AM - 4PM", "Friday from 8AM - 3PM"],
  "Fine Arts Cafe":["Mon-Thu from 9AM - 6:30PM", "Fri from 9AM - 3PM"],
  "Five Guys":["Mon-Fri from 11AM - 9PM"],
  "Garden Room":["Mon-Fri from 11:30AM - 2PM"],
  "In the Nood":["Mon-Thu from 11AM - 11PM", "Fri from 11AM - 3PM"],
  "N 2 Go":["Mon-Thu from 11AM - 10PM", "Fri from 11AM - 8PM", "Sat from 2PM - 8PM"],
  "Alderman Cafe":["Mon-Thu from 8AM - 11:30PM", "Fri from 8AM - 5PM", "Sat from 12PM - 6PM", "Sun from 1PM - 11:30PM"],
  "Argo Cafe":["Mon-Thu from 8AM - 5PM", "Fri from 8AM - 3PM"],
  "C3":["Mon-Fri from 5PM - 12AM", "Sat-Sun from 12PM - 12AM"],
  "Cafe McLeod":["Mon-Fri from 8AM - 2PM"],
  "Chick Fil A":["Mon-Fri from 10:30AM - 8PM"],
  "Clark Cafe":["Mon-Thu from 8AM - 10PM", "Fri from 8AM - 5PM", "Sat from 1PM - 6PM", "Sun from 1PM - 9PM"],
  "Crossroads":["Mon-Wed from 8AM - 1AM", "Thu-Fri from 8AM - 2AM", "Sat-Sun from 11AM - 2AM"],
  "Croads":["Mon-Wed from 8AM - 1AM", "Thu-Fri from 8AM - 2AM", "Sat-Sun from 11AM - 2AM"],
  "Crumbs":["Mon-Sun from 4PM - 12AM"],
  "Poolside Cafe at the AFC":["Mon-Fri from 9AM - 9PM"],
  "Rising Roll":["Mon-Thu from 8AM - 5PM", "Fri from 8AM - 3PM"],
  "Sidely Austin Cafe":["Mon-Fri from 8AM - 2PM"],
  "Greenberry's":["Mon-Fri from 8AM - 2:30PM"],
  "Starbucks":["Mon-Thu from 7:30AM - 7PM", "Fri from 7:30AM - 5PM"],
  "Street Eats Foodtruck":["Mon-Fri from 11AM - 3PM"],
  "Subway":["Mon-Fri from 10:30AM - 8PM"],
  "West Range":["Mon-Thu from 9AM - 8PM", "Fri from 9AM - 3PM"]
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
