//^ Q3 Write a TypeScript function that returns a Promise that resolves with the value "Resolved!" after 3 seconds.

// Function that returns a Promise which resolves after a delay of 3 seconds
function resolveAfterDelay(): Promise<string> {

  // Return a new Promise
  return new Promise((resolve, reject) => {

      // Set a timeout to resolve the Promise after 3000 milliseconds (3 seconds)
      setTimeout(() => {

          // Resolve the Promise with a message
          resolve("\n🌟🌟🌟 Resolved! 🌟🌟🌟");
      }, 3000);

  });

}

// Immediately Invoked Function Expression (IIFE) to handle asynchronous code
(async () => {

  // Await the resolveAfterDelay function and store the result in 'result'
  const result = await resolveAfterDelay();

  // Log the result to the console
  console.log(result);

})();
