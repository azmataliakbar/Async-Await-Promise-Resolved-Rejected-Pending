//^ Q7 Create a TypeScript function that takes a number as an argument and returns a Promise that resolves with the square of the number after a delay of 1 second.

// Function that calculates the square of a number after a delay
function calculateSquareAfterDelay(num: number): Promise<number> {

  // Return a new Promise
  return new Promise((resolve) => {

      // Set a timeout to calculate the square after 1000 milliseconds (1 second)
      setTimeout(() => {

          // Calculate the square of the given number
          const square = num * num;

          // Resolve the promise with the calculated square
          resolve(square);
      }, 1000);
  });
}

// Call the calculateSquareAfterDelay function with the number 5
calculateSquareAfterDelay(5).then((result) => {

  // Log the result (the square of 5) to the console
  console.log("\nThe square of 5 is:", result);
  
});

