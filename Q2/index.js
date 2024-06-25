//^ Q2: Create a TypeScript function that takes a callback function as an argument and uses setTimeout to call the callback after 1 second.
function welcomeToRestaurant(fn) {
    console.log("\n🍽️ 🍷...We are preparing the table; please wait for 1 second... 🍷🍽️");
    setTimeout(fn, 1000);
}
function favoriteMeal() {
    console.log("\n🍽️ 🌟 Welcome to our exceptional restaurant! Enjoy your meal! 🌟🍽️");
}
welcomeToRestaurant(favoriteMeal);
export {};
