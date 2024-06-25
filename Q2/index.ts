//^ Q2: Create a TypeScript function that takes a callback function as an argument and uses setTimeout to call the callback after 1 second.

// Function that simulates welcoming a customer to a restaurant
// It takes a callback function 'fn' as a parameter, which is called after a delay
function welcomeToRestaurant(fn: () => void) {

// Log the message indicating preparation of the table and a 1-second wait  
console.log("\n🍽️ 🍷...We are preparing the table; please wait for 1 second... 🍷🍽️");

// Set a timeout to call the callback function 'fn' after 1 second (1000 milliseconds)
  setTimeout(fn, 1000);

}

// Function that logs a welcoming message for the customer
function favoriteMeal() {

  // Log the welcome message for the customer
  console.log("\n🍽️ 🌟 Welcome to our exceptional restaurant! Enjoy your meal! 🌟🍽️");

}

// Call the 'welcomeToRestaurant' function, passing 'favoriteMeal' as the callback function
welcomeToRestaurant(favoriteMeal);
